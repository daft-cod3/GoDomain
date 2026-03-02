import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb:
const client = new MongoClient(uri);

let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db('rafiki');
  }
  return db;
}

const otpStore = new Map();

export function storeOTP(phone, otp) {
  otpStore.set(phone, { otp, expires: Date.now() + 300000 }); 
}

export function verifyOTP(phone, otp) {
  const stored = otpStore.get(phone);
  if (!stored || stored.expires < Date.now()) return false;
  if (stored.otp === otp) {
    otpStore.delete(phone);
    return true;
  }
  return false;
}