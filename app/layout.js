import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import GlobalTranslator from "./components/GlobalTranslator";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import UsageTracker from "./components/UsageTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gorilla Domain",
  description: "Kenyan Driving School App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-slate-100`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            <GlobalTranslator />
            <UsageTracker />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Chatbot />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
