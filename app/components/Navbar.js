"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import { useTheme } from "./ThemeContext";

export default function Navbar({ isLoggedIn = false, userName = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const themeActionLabel = isDark
    ? t("switchToLightMode", "Switch to light mode")
    : t("switchToDarkMode", "Switch to dark mode");
  const themeStateLabel = isDark
    ? t("darkMode", "Dark mode")
    : t("lightMode", "Light mode");
  const menuAriaLabel = isMenuOpen
    ? t("closeMainMenu", "Close main menu")
    : t("openMainMenu", "Open main menu");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/study", label: t("studyMaterials") },
    { href: "/modelTown", label: t("modelTown") },
    { href: "/roadLaws/training", label: t("safetyTraining") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-r from-green-600 to-blue-600 text-xs font-bold text-white">
              R
            </span>
            <span className="truncate text-sm font-bold text-slate-900 dark:text-slate-100 sm:text-base">
              {isLoggedIn && userName
                ? `${t("hello")}, ${userName}`
                : t("siteName")}
            </span>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/user-profile"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0.3), rgba(255,255,255,0.06))",
                }}
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="relative h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0 2c-3.314 0-6 1.791-6 4v1h12v-1c0-2.209-2.686-4-6-4Z"
                />
              </svg>
              <span className="relative">{t("profileHub", "Profile Hub")}</span>
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-transparent transition-all hover:border-slate-400 hover:shadow-md hover:ring-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:ring-slate-700"
              aria-label={themeActionLabel}
              title={themeActionLabel}
            >
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                  isDark
                    ? "bg-slate-700 text-amber-300"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {isDark
                  ? <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 3.5a1 1 0 0 1 1 1V6a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1Zm0 14a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Zm8.5-5.5a1 1 0 0 1-1 1H18a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm-14 0a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm9.66-5.66a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41Zm-8.32 8.32a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41Zm9.38 2.47a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0Zm-8.32-8.32a1 1 0 0 1 0 1.41L7.84 9.58a1 1 0 1 1-1.41-1.41L7.49 7.1a1 1 0 0 1 1.41 0ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z" />
                    </svg>
                  : <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.73 15.13A8.5 8.5 0 0 1 8.87 3.27a.75.75 0 0 0-.95-.95A10 10 0 1 0 21.68 16.1a.75.75 0 0 0-.95-.97Z" />
                    </svg>}
              </span>
              <span className="text-slate-700 dark:text-slate-200">
                {themeStateLabel}
              </span>
              <span className="relative h-5 w-10 rounded-full bg-slate-200 ring-1 ring-slate-300 transition-colors dark:bg-slate-700 dark:ring-slate-600">
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 dark:bg-slate-950 ${
                    isDark ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </span>
            </button>
            <LanguageSelector />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={menuAriaLabel}
          >
            {isMenuOpen
              ? <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6l-12 12"
                  />
                </svg>
              : <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                </svg>}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 md:hidden"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/user-profile"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 flex items-center justify-between rounded-xl bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/25"
          >
            <span>{t("profileHub", "Profile Hub")}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6l6 6-6 6"
              />
            </svg>
          </Link>
          <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              aria-label={themeActionLabel}
              title={themeActionLabel}
            >
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                  isDark
                    ? "bg-slate-700 text-amber-300"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {isDark
                  ? <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 3.5a1 1 0 0 1 1 1V6a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1Zm0 14a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1Zm8.5-5.5a1 1 0 0 1-1 1H18a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm-14 0a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm9.66-5.66a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41Zm-8.32 8.32a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41Zm9.38 2.47a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0Zm-8.32-8.32a1 1 0 0 1 0 1.41L7.84 9.58a1 1 0 1 1-1.41-1.41L7.49 7.1a1 1 0 0 1 1.41 0ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z" />
                    </svg>
                  : <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.73 15.13A8.5 8.5 0 0 1 8.87 3.27a.75.75 0 0 0-.95-.95A10 10 0 1 0 21.68 16.1a.75.75 0 0 0-.95-.97Z" />
                    </svg>}
              </span>
              <span>{themeStateLabel}</span>
              <span className="relative h-5 w-10 rounded-full bg-slate-200 ring-1 ring-slate-300 dark:bg-slate-700 dark:ring-slate-600">
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 dark:bg-slate-950 ${
                    isDark ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </span>
            </button>
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
