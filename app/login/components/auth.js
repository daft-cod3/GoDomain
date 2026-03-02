import { connectDB, storeOTP, verifyOTP } from './db.js';
import bcrypt from 'bcryptjs';

export async function sendOTP(phone) {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    storeOTP(phone, otp);

    console.log(`OTP for ${phone}: ${otp}`);

    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    return { success: false, error: 'Failed to send OTP' };
  }
}

export async function signup(email, password, phone, otp) {
  try {
    if (!verifyOTP(phone, otp)) {
      return { success: false, error: 'Invalid or expired OTP' };
    }

    const db = await connectDB();
    const users = db.collection('users');

    const existingUser = await users.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return { success: false, error: 'User already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await users.insertOne({
      email,
      password: hashedPassword,
      phone,
      createdAt: new Date()
    });

    return { success: true, message: 'Account created successfully' };
  } catch (error) {
    return { success: false, error: 'Signup failed' };
  }
}

export async function login(email, password, phone, otp) {
  try {
    if (!verifyOTP(phone, otp)) {
      return { success: false, error: 'Invalid or expired OTP' };
    }

    const db = await connectDB();
    const users = db.collection('users');

    const user = await users.findOne({ email });
    if (!user) {
      return { success: false, error: 'User not found' };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return { success: false, error: 'Invalid password' };
    }

    return { success: true, message: 'Login successful', user: { email: user.email, phone: user.phone } };
  } catch (error) {
    return { success: false, error: 'Login failed' };
  }
}