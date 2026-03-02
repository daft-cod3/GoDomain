"use client";

import { useRouter } from "next/navigation";
import DrivingClassCard from "./components/DrivingClassCard";
import { useLanguage } from "./components/LanguageContext";

const STATS = [
  { number: "50,000+", label: "Students trained" },
  { number: "95%", label: "Average pass rate" },
  { number: "320+", label: "Practice questions" },
  { number: "22", label: "Supported languages" },
];

const FEATURES = [
  {
    title: "NTSA-aligned content",
    description:
      "Structured lessons and quizzes built around the current driving curriculum.",
  },
  {
    title: "Local-language support",
    description:
      "Learners can read guidance in multiple local and regional languages.",
  },
  {
    title: "Study + quiz workflow",
    description:
      "Move from concepts to assessment with instant feedback on answers.",
  },
  {
    title: "Model town preparation",
    description:
      "Learn board navigation rules, parking methods, and practical test flow.",
  },
  {
    title: "Progress visibility",
    description:
      "Track completion and revisit weak topics before your practical exam.",
  },
  {
    title: "Mobile-ready learning",
    description:
      "Study from phone or desktop with consistent performance and layout.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Recent graduate",
    text: "I passed on my first attempt after practicing here daily for two weeks.",
  },
  {
    name: "John K.",
    role: "Driving instructor",
    text: "The content flow is easy for learners to follow and matches what we teach.",
  },
  {
    name: "Mary W.",
    role: "Student",
    text: "The model town explanations helped me understand lane choices quickly.",
  },
];

export default function Home() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-sky-50 to-slate-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
      <section className="relative overflow-hidden border-b border-slate-200/70 py-16 dark:border-slate-800">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-white/85 dark:bg-slate-900/85" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                {t("Official NTSA aligned learning")}
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                {t("Learn driving theory with clarity and confidence")}
              </h1>
              <p className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                {t(
                  "Rafiki combines practical lessons, quizzes, and model town guidance so learners can prepare efficiently for both theory and practical tests.",
                )}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => router.push("/study")}
                  className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                >
                  {t("Start learning")}
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/quiz")}
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {t("Take a practice test")}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {t("At a glance")}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
                  >
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {stat.number}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                      {t(stat.label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {t("Why learners choose Rafiki")}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {t(
                "Focused content, consistent practice, and practical guidance for Kenyan roads.",
              )}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {t(feature.title)}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {t(feature.description)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/70 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {t("Choose your driving class")}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {t("Pick a category and begin with the right materials.")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <DrivingClassCard
              category="A"
              title="Motorcycles and three-wheelers"
              icon="A"
              students="12,000+"
              link="/driving-classes?cat=a"
              color="green"
            />
            <DrivingClassCard
              category="B"
              title="Light vehicles"
              icon="B"
              students="25,000+"
              link="/driving-classes?cat=b"
              color="blue"
            />
            <DrivingClassCard
              category="C"
              title="Commercial vehicles"
              icon="C"
              students="8,000+"
              link="/driving-classes?cat=c"
              color="yellow"
            />
            <DrivingClassCard
              category="D"
              title="PSV and buses"
              icon="D"
              students="5,000+"
              link="/driving-classes?cat=d"
              color="purple"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {t("Student feedback")}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {t("Experiences from learners and instructors.")}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  "{t(item.text)}"
                </p>
                <p className="mt-4 text-sm font-bold text-slate-900 dark:text-slate-100">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t(item.role)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
