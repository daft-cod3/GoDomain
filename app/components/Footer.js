"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-100 py-10 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t("ntsaMaster")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t("makingKenyanRoadsSafer")}
            </p>
            <Link
              href="/user-profile"
              className="group mt-5 inline-flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-linear-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 px-4 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:border-cyan-400/60 hover:from-emerald-500/20 hover:via-teal-500/20 hover:to-cyan-500/20 dark:border-emerald-400/40 dark:text-white dark:hover:border-cyan-300/60 dark:hover:from-emerald-500/30 dark:hover:via-teal-500/30 dark:hover:to-cyan-500/30"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-cyan-700 dark:bg-white/15 dark:text-cyan-100">
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
                    d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0 2c-3.314 0-6 1.791-6 4v1h12v-1c0-2.209-2.686-4-6-4Z"
                  />
                </svg>
              </span>
              <span>{t("visitProfile", "Visit Profile Hub")}</span>
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
              {t("quickLinks")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/study"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  {t("studyMaterials")}
                </Link>
              </li>
              <li>
                <Link
                  href="/modelTown"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  {t("modelTownBoard")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
              {t("legal")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/legal"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-slate-900 dark:hover:text-white"
                >
                  {t("termsOfService")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-slate-300 pt-5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          &copy; {new Date().getFullYear()} {t("ntsaMaster")}.{" "}
          {t("builtForKenya")}
        </p>
      </div>
    </footer>
  );
}
