"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

const FEEDBACK_EMAIL =
  process.env.NEXT_PUBLIC_FEEDBACK_EMAIL || "support@rafiki.app";

const STORAGE_KEYS = {
  profile: {
    name: "userName",
    email: "userEmail",
    phone: "userPhone",
    county: "userCounty",
    drivingSchool: "userDrivingSchool",
  },
  joinedAt: "userJoinedAt",
  settings: "userSettings",
  feedbackDraft: "profileFeedbackDraft",
  feedbackList: "rafikiFeedback",
  quizAttempts: "quizAttemptHistory",
  usageDays: "rafikiUsageDays",
  stats: {
    quizzesCompleted: "quizzesCompleted",
    studyHours: "studyHours",
    streak: "studyStreak",
  },
};

const EMPTY_PROFILE = {
  name: "",
  email: "",
  phone: "",
  county: "",
  drivingSchool: "",
};

const EMPTY_FEEDBACK = {
  topic: "platform",
  rating: 4,
  message: "",
  allowContact: true,
  contactEmail: "",
};

function safeParseJson(value, fallback) {
  try {
    const parsed = JSON.parse(value);
    if (parsed && typeof parsed === "object") return parsed;
    return fallback;
  } catch {
    return fallback;
  }
}

function toNonNegativeInt(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) return 0;
  return Math.floor(parsed);
}

function formatDate(isoDate) {
  if (!isoDate) return "-";
  try {
    return new Date(isoDate).toLocaleDateString();
  } catch {
    return isoDate;
  }
}

function buildMailtoLink(payload) {
  const subject = encodeURIComponent(
    `Rafiki Feedback: ${payload.topic} (${payload.rating}/5)`,
  );
  const body = encodeURIComponent(
    `Name: ${payload.userName}\nEmail: ${payload.contactEmail}\nRating: ${payload.rating}/5\nTopic: ${payload.topic}\nAllow Contact: ${payload.allowContact ? "Yes" : "No"}\n\nFeedback:\n${payload.message}`,
  );

  return `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
}

export default function UserProfile() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("overview");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [profile, setProfile] = useState(EMPTY_PROFILE);
  const [feedback, setFeedback] = useState(EMPTY_FEEDBACK);
  const [joinedAt, setJoinedAt] = useState("");
  const [stats, setStats] = useState({
    quizzesCompleted: 0,
    studyHours: 0,
    streak: 0,
  });
  const [progressTracking, setProgressTracking] = useState({
    mostStudied: "",
    leastStudied: "",
    weakAreas: [],
    usageDays: 0,
    totalAttempts: 0,
    categoryStats: [],
  });
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  useEffect(() => {
    const storedProfile = {
      name: localStorage.getItem(STORAGE_KEYS.profile.name) || "",
      email: localStorage.getItem(STORAGE_KEYS.profile.email) || "",
      phone: localStorage.getItem(STORAGE_KEYS.profile.phone) || "",
      county: localStorage.getItem(STORAGE_KEYS.profile.county) || "",
      drivingSchool:
        localStorage.getItem(STORAGE_KEYS.profile.drivingSchool) || "",
    };

    const storedDraft = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.feedbackDraft) || "{}",
      {},
    );
    const storedFeedbackHistory = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.feedbackList) || "[]",
      [],
    );
    const storedSettings = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.settings) || "{}",
      {},
    );
    const storedQuizAttempts = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.quizAttempts) || "[]",
      [],
    );
    const storedUsageDays = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.usageDays) || "[]",
      [],
    );

    let userJoinedAt = localStorage.getItem(STORAGE_KEYS.joinedAt) || "";
    if (!userJoinedAt) {
      userJoinedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEYS.joinedAt, userJoinedAt);
    }

    setProfile(storedProfile);
    setFeedback({
      ...EMPTY_FEEDBACK,
      ...storedDraft,
      contactEmail:
        storedDraft.contactEmail ||
        storedProfile.email ||
        EMPTY_FEEDBACK.contactEmail,
    });
    setJoinedAt(userJoinedAt);
    setFeedbackHistory(
      Array.isArray(storedFeedbackHistory) ? storedFeedbackHistory : [],
    );
    setStats({
      quizzesCompleted: toNonNegativeInt(
        localStorage.getItem(STORAGE_KEYS.stats.quizzesCompleted),
      ),
      studyHours: toNonNegativeInt(
        localStorage.getItem(STORAGE_KEYS.stats.studyHours),
      ),
      streak: toNonNegativeInt(localStorage.getItem(STORAGE_KEYS.stats.streak)),
    });

    const categoryMap = {};
    if (Array.isArray(storedQuizAttempts)) {
      storedQuizAttempts.forEach((attempt) => {
        const area =
          typeof attempt?.category === "string" && attempt.category.trim()
            ? attempt.category.trim()
            : "General Quiz";

        if (!categoryMap[area]) {
          categoryMap[area] = {
            area,
            attempts: 0,
            correct: 0,
            total: 0,
            incorrect: 0,
          };
        }

        categoryMap[area].attempts += 1;
        categoryMap[area].correct += toNonNegativeInt(attempt?.score);
        categoryMap[area].total += toNonNegativeInt(attempt?.totalQuestions);
        categoryMap[area].incorrect += toNonNegativeInt(
          attempt?.incorrectCount,
        );
      });
    }

    const categoryStats = Object.values(categoryMap).sort(
      (left, right) => right.attempts - left.attempts,
    );
    const weakAreas = [...categoryStats]
      .filter((item) => item.total > 0 && item.incorrect > 0)
      .sort(
        (left, right) =>
          right.incorrect / right.total - left.incorrect / left.total,
      )
      .slice(0, 3)
      .map((item) => ({
        area: item.area,
        attempts: item.attempts,
        accuracy: Math.round((item.correct / item.total) * 100),
        incorrect: item.incorrect,
      }));

    setProgressTracking({
      mostStudied: categoryStats[0]?.area || "",
      leastStudied: categoryStats[categoryStats.length - 1]?.area || "",
      weakAreas,
      usageDays: Array.isArray(storedUsageDays) ? storedUsageDays.length : 0,
      totalAttempts: Array.isArray(storedQuizAttempts)
        ? storedQuizAttempts.length
        : 0,
      categoryStats,
    });

    if (storedSettings.theme === "dark" || storedSettings.theme === "light") {
      setTheme(storedSettings.theme);
    }
  }, [setTheme]);

  const initials = useMemo(() => {
    if (!profile.name.trim()) return "U";
    return profile.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  }, [profile.name]);

  const pageThemeClasses =
    theme === "dark"
      ? "min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-slate-100"
      : "min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900";

  const feedbackPayloadPreview = useMemo(
    () => ({
      topic: feedback.topic,
      rating: feedback.rating,
      message: feedback.message.trim() || "Feedback message",
      allowContact: Boolean(feedback.allowContact),
      contactEmail:
        feedback.contactEmail.trim() || profile.email || "Not provided",
      userName: profile.name.trim() || "Anonymous",
    }),
    [feedback, profile.email, profile.name],
  );

  const feedbackMailtoHref = useMemo(
    () => buildMailtoLink(feedbackPayloadPreview),
    [feedbackPayloadPreview],
  );

  const saveProfile = (event) => {
    event.preventDefault();
    localStorage.setItem(STORAGE_KEYS.profile.name, profile.name.trim());
    localStorage.setItem(STORAGE_KEYS.profile.email, profile.email.trim());
    localStorage.setItem(STORAGE_KEYS.profile.phone, profile.phone.trim());
    localStorage.setItem(STORAGE_KEYS.profile.county, profile.county.trim());
    localStorage.setItem(
      STORAGE_KEYS.profile.drivingSchool,
      profile.drivingSchool.trim(),
    );

    setStatus({
      type: "success",
      text: t("profileSaved", "Profile saved successfully."),
    });
  };

  const saveThemePreference = (nextTheme) => {
    if (nextTheme !== "light" && nextTheme !== "dark") return;
    setTheme(nextTheme);

    const currentSettings = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.settings) || "{}",
      {},
    );
    localStorage.setItem(
      STORAGE_KEYS.settings,
      JSON.stringify({ ...currentSettings, theme: nextTheme }),
    );

    setStatus({
      type: "success",
      text: t("settingsSaved", "Theme preference saved."),
    });
  };

  const submitFeedback = (event) => {
    event.preventDefault();
    const trimmedMessage = feedback.message.trim();
    if (!trimmedMessage) {
      setStatus({
        type: "error",
        text: t("feedbackRequired", "Please write feedback before submitting."),
      });
      return;
    }

    const payload = {
      id: `${Date.now()}`,
      topic: feedback.topic,
      rating: feedback.rating,
      message: trimmedMessage,
      allowContact: Boolean(feedback.allowContact),
      contactEmail: feedback.contactEmail.trim() || profile.email.trim(),
      userName: profile.name.trim() || "Anonymous",
      createdAt: new Date().toISOString(),
    };

    const existingHistory = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.feedbackList) || "[]",
      [],
    );
    const nextHistory = [payload, ...existingHistory].slice(0, 25);

    localStorage.setItem(
      STORAGE_KEYS.feedbackList,
      JSON.stringify(nextHistory),
    );
    localStorage.setItem(
      STORAGE_KEYS.feedbackDraft,
      JSON.stringify({ ...feedback, message: "" }),
    );

    setFeedback((current) => ({ ...current, message: "" }));
    setFeedbackHistory(nextHistory);
    setStatus({
      type: "success",
      text: t(
        "feedbackSaved",
        "Feedback saved. You can also send it using the email button.",
      ),
    });
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  return (
    <div className={pageThemeClasses}>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-3xl bg-linear-to-r from-green-600 via-blue-600 to-indigo-600 p-6 text-white shadow-xl sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
                {initials}
              </div>
              <div>
                <h1 className="text-2xl font-extrabold sm:text-3xl">
                  {profile.name.trim() || t("profile", "Profile")}
                </h1>
                <p className="text-sm text-blue-100">
                  {t("username", "Username")}: {profile.name.trim() || "Guest"}
                </p>
                <p className="text-sm text-blue-100">
                  {profile.email.trim() || "guest@example.com"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
              >
                {t("backToHome", "Back to Home")}
              </Link>
              <button
                type="button"
                onClick={logout}
                className="rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t("logout", "Logout")}
              </button>
            </div>
          </div>
        </header>

        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t("quizzesCompleted", "Quizzes Completed")}
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {stats.quizzesCompleted}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t("studyHours", "Study Hours")}
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {stats.studyHours}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t("learningStreak", "Learning Streak")}
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {stats.streak}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t("joined", "Joined")}
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {formatDate(joinedAt)}
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="border-b border-slate-200 p-3 dark:border-slate-700">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "overview", label: t("overview", "Overview") },
                { id: "profile", label: t("profile", "Profile") },
                { id: "settings", label: t("settings", "Settings") },
                { id: "feedback", label: t("feedback", "Feedback") },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-6">
            {status.text && (
              <div
                className={`mb-5 rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/30 dark:text-green-200"
                    : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/30 dark:text-red-200"
                }`}
              >
                {status.text}
              </div>
            )}

            {activeTab === "overview" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t("learningProgress", "Learning Progress")}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t(
                    "overviewDescription",
                    "Continue learning, review your quizzes, and send direct feedback from your profile.",
                  )}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <Link
                    href="/quiz"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    {t("takeQuiz", "Take Quiz")}
                  </Link>
                  <Link
                    href="/quiz/review"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    {t("reviewedQuizzes", "Reviewed Quizzes")}
                  </Link>
                  <Link
                    href="/study"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    {t("studyMaterials", "Study Materials")}
                  </Link>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {t("progressTracking", "Progress Tracking")}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {t(
                      "progressTrackingDescription",
                      "Frontend insights from your quiz attempts and app activity.",
                    )}
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {t("username", "Username")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {profile.name.trim() || "Guest"}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {t("daysUsed", "Days Used")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {progressTracking.usageDays}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {t("mostStudiedArea", "Most Studied Area")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {progressTracking.mostStudied ||
                          t("noDataYet", "No data yet")}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {t("leastStudiedArea", "Least Studied Area")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {progressTracking.leastStudied ||
                          t("noDataYet", "No data yet")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                      {t(
                        "weakAreasFromAnswers",
                        "Weak Areas from Submitted Answers",
                      )}
                    </p>
                    {progressTracking.weakAreas.length > 0
                      ? <ul className="mt-2 space-y-2 text-sm text-amber-900 dark:text-amber-100">
                          {progressTracking.weakAreas.map((item) => (
                            <li
                              key={item.area}
                              className="flex flex-wrap items-center gap-2"
                            >
                              <span className="font-semibold">{item.area}</span>
                              <span>
                                {t("accuracy", "Accuracy")}: {item.accuracy}%
                              </span>
                              <span>
                                {t("attempts", "Attempts")}: {item.attempts}
                              </span>
                              <span>
                                {t("incorrect", "Incorrect")}: {item.incorrect}
                              </span>
                            </li>
                          ))}
                        </ul>
                      : <p className="mt-2 text-sm text-amber-900 dark:text-amber-100">
                          {t(
                            "noWeakAreasYet",
                            "Complete a few quizzes to identify weak areas.",
                          )}
                        </p>}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <form onSubmit={saveProfile} className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t("profileDetails", "Profile Details")}
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm text-slate-700 dark:text-slate-200">
                    {t("fullName", "Full Name")}
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(event) =>
                        setProfile((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </label>

                  <label className="text-sm text-slate-700 dark:text-slate-200">
                    {t("email", "Email")}
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(event) =>
                        setProfile((current) => ({
                          ...current,
                          email: event.target.value,
                        }))
                      }
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </label>

                  <label className="text-sm text-slate-700 dark:text-slate-200">
                    {t("phone", "Phone")}
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(event) =>
                        setProfile((current) => ({
                          ...current,
                          phone: event.target.value,
                        }))
                      }
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </label>

                  <label className="text-sm text-slate-700 dark:text-slate-200">
                    {t("county", "County")}
                    <input
                      type="text"
                      value={profile.county}
                      onChange={(event) =>
                        setProfile((current) => ({
                          ...current,
                          county: event.target.value,
                        }))
                      }
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </label>

                  <label className="text-sm text-slate-700 dark:text-slate-200 sm:col-span-2">
                    {t("drivingSchool", "Driving School")}
                    <input
                      type="text"
                      value={profile.drivingSchool}
                      onChange={(event) =>
                        setProfile((current) => ({
                          ...current,
                          drivingSchool: event.target.value,
                        }))
                      }
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  {t("saveProfile", "Save Profile")}
                </button>
              </form>
            )}

            {activeTab === "settings" && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t("preferences", "Preferences")}
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t(
                    "themePreferenceDescription",
                    "Choose your preferred display mode for the app.",
                  )}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { value: "light", label: t("lightMode", "Light mode") },
                    { value: "dark", label: t("darkMode", "Dark mode") },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => saveThemePreference(item.value)}
                      className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold ${
                        theme === item.value
                          ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
                          : "border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t("accountActions", "Account Actions")}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {t(
                      "logoutDescription",
                      "Sign out from your current session.",
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={logout}
                    className="mt-3 rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200 dark:hover:bg-red-900/30"
                  >
                    {t("logout", "Logout")}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="space-y-6">
                <form onSubmit={submitFeedback} className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t("sendDirectFeedback", "Send Direct Feedback")}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {t(
                      "feedbackDescription",
                      "Share bugs, feature requests, and quiz quality feedback directly from your profile.",
                    )}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm text-slate-700 dark:text-slate-200">
                      {t("topic", "Topic")}
                      <select
                        value={feedback.topic}
                        onChange={(event) =>
                          setFeedback((current) => ({
                            ...current,
                            topic: event.target.value,
                          }))
                        }
                        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                      >
                        <option value="platform">
                          {t("platformExperience", "Platform experience")}
                        </option>
                        <option value="quiz">
                          {t("quizQuality", "Quiz quality")}
                        </option>
                        <option value="content">
                          {t("studyContent", "Study content")}
                        </option>
                        <option value="bug">
                          {t("bugReport", "Bug report")}
                        </option>
                        <option value="feature">
                          {t("featureRequest", "Feature request")}
                        </option>
                      </select>
                    </label>

                    <label className="text-sm text-slate-700 dark:text-slate-200">
                      {t("contactEmail", "Contact Email")}
                      <input
                        type="email"
                        value={feedback.contactEmail}
                        onChange={(event) =>
                          setFeedback((current) => ({
                            ...current,
                            contactEmail: event.target.value,
                          }))
                        }
                        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                      />
                    </label>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-slate-700 dark:text-slate-200">
                      {t("rating", "Rating")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setFeedback((current) => ({
                              ...current,
                              rating: value,
                            }))
                          }
                          className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                            feedback.rating === value
                              ? "border-amber-500 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200"
                              : "border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-200"
                          }`}
                        >
                          {value} / 5
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="block text-sm text-slate-700 dark:text-slate-200">
                    {t("feedbackMessage", "Feedback Message")}
                    <textarea
                      value={feedback.message}
                      onChange={(event) =>
                        setFeedback((current) => ({
                          ...current,
                          message: event.target.value,
                        }))
                      }
                      rows={6}
                      placeholder={t(
                        "feedbackPlaceholder",
                        "Write your feedback here...",
                      )}
                      className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800"
                    />
                  </label>

                  <label className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <input
                      type="checkbox"
                      checked={feedback.allowContact}
                      onChange={(event) =>
                        setFeedback((current) => ({
                          ...current,
                          allowContact: event.target.checked,
                        }))
                      }
                    />
                    {t("allowFollowUpContact", "Allow follow-up contact")}
                  </label>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      {t("saveFeedback", "Save Feedback")}
                    </button>
                    <a
                      href={feedbackMailtoHref}
                      className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {t("sendViaEmailApp", "Send via Email App")}
                    </a>
                  </div>
                </form>

                {feedbackHistory.length > 0 && (
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                    <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">
                      {t("recentFeedback", "Recent Feedback")}
                    </h3>
                    <div className="space-y-3">
                      {feedbackHistory.slice(0, 3).map((entry) => (
                        <div
                          key={entry.id || entry.createdAt}
                          className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800"
                        >
                          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            {entry.topic || t("feedback", "Feedback")} •{" "}
                            {entry.rating || 0}/5 •{" "}
                            {formatDate(entry.createdAt)}
                          </p>
                          <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                            {entry.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
