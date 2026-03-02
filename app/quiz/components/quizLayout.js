"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../components/LanguageContext";

const STORAGE_KEYS = {
  soundEnabled: "quizSoundEnabled",
  quizAttempts: "quizAttemptHistory",
  quizzesCompleted: "quizzesCompleted",
  usageDays: "rafikiUsageDays",
};

function safeParseJson(value, fallback) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(fallback)
      ? Array.isArray(parsed)
        ? parsed
        : fallback
      : parsed;
  } catch {
    return fallback;
  }
}

function optionLetter(index) {
  return String.fromCharCode(65 + index);
}

function getQuizCategoryLabel(slug) {
  if (slug.startsWith("road-signs")) return "Road Signs";
  if (slug.startsWith("road-laws")) return "Road Laws";
  if (slug.startsWith("vehicle-parts")) return "Vehicle Parts";
  if (slug.startsWith("model-town")) return "Model Town";
  return "General Quiz";
}

function updateUsageDays() {
  const today = new Date().toISOString().slice(0, 10);
  const storedDays = safeParseJson(
    localStorage.getItem(STORAGE_KEYS.usageDays) || "[]",
    [],
  );
  if (!storedDays.includes(today)) {
    localStorage.setItem(
      STORAGE_KEYS.usageDays,
      JSON.stringify([today, ...storedDays].slice(0, 365)),
    );
  }
}

function getScoreMessage(score, total) {
  if (score === total) return "Perfect result";
  if (score >= total * 0.8) return "Excellent work";
  if (score >= total * 0.6) return "Good progress";
  return "Keep practicing";
}

export default function QuizPage({ slug }) {
  const { t } = useLanguage();
  const router = useRouter();
  const [quiz, setQuiz] = useState(null);
  const [quizStatus, setQuizStatus] = useState("loading");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [skippedQuestions, setSkippedQuestions] = useState(new Set());
  const [showScore, setShowScore] = useState(false);
  const [attemptSaved, setAttemptSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.soundEnabled);
    if (saved !== null) setSoundEnabled(saved === "true");
    updateUsageDays();
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.soundEnabled, String(soundEnabled));
  }, [soundEnabled]);

  useEffect(() => {
    let cancelled = false;
    setCurrentQuestion(0);
    setUserAnswers({});
    setSkippedQuestions(new Set());
    setShowScore(false);
    setAttemptSaved(false);

    const loadQuiz = async () => {
      try {
        setQuizStatus("loading");
        setQuiz(null);
        const res = await fetch(`/api/quiz/${slug}`);
        if (!res.ok) {
          if (!cancelled) {
            setQuizStatus(res.status === 404 ? "not_found" : "error");
          }
          return;
        }
        const data = await res.json();
        if (!cancelled) {
          setQuiz(data);
          setQuizStatus("ready");
        }
      } catch (error) {
        console.error("Failed to load quiz:", error);
        if (!cancelled) setQuizStatus("error");
      }
    };

    loadQuiz();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const score = useMemo(() => {
    if (!quiz) return 0;
    return Object.entries(userAnswers).reduce(
      (total, [questionIndex, answerIndex]) => {
        return quiz.questions[Number(questionIndex)]?.answer === answerIndex
          ? total + 1
          : total;
      },
      0,
    );
  }, [quiz, userAnswers]);

  const incorrectAnswers = useMemo(() => {
    if (!quiz) return [];
    return Object.entries(userAnswers)
      .filter(([questionIndex, answerIndex]) => {
        return quiz.questions[Number(questionIndex)]?.answer !== answerIndex;
      })
      .map(([questionIndex, answerIndex]) => {
        const question = quiz.questions[Number(questionIndex)];
        return {
          questionIndex: Number(questionIndex),
          question: question?.question || "Question",
          selectedIndex: Number(answerIndex),
          correctIndex: question?.answer ?? 0,
          selectedOption: question?.options?.[Number(answerIndex)] || "N/A",
          correctOption: question?.options?.[question?.answer ?? 0] || "N/A",
        };
      });
  }, [quiz, userAnswers]);

  const answeredCount = Object.keys(userAnswers).length;
  const skippedCount = skippedQuestions.size;
  const totalQuestions = quiz?.questions?.length || 0;
  const remainingCount = Math.max(
    totalQuestions - answeredCount - skippedCount,
    0,
  );
  const accuracyPercent = totalQuestions
    ? Math.round((score / totalQuestions) * 100)
    : 0;
  const quizCategory = getQuizCategoryLabel(slug);
  const progressPercentage = totalQuestions
    ? ((currentQuestion + 1) / totalQuestions) * 100
    : 0;

  useEffect(() => {
    if (!showScore || !quiz || attemptSaved) return;

    const attempt = {
      id: `${Date.now()}`,
      slug,
      category: quizCategory,
      quizTitle: quiz.title,
      score,
      totalQuestions,
      answeredCount,
      skippedCount,
      incorrectCount: incorrectAnswers.length,
      accuracyPercent,
      weakQuestions: incorrectAnswers.slice(0, 8),
      createdAt: new Date().toISOString(),
    };

    const existingAttempts = safeParseJson(
      localStorage.getItem(STORAGE_KEYS.quizAttempts) || "[]",
      [],
    );
    const nextAttempts = [attempt, ...existingAttempts].slice(0, 150);
    localStorage.setItem(
      STORAGE_KEYS.quizAttempts,
      JSON.stringify(nextAttempts),
    );

    const currentCompleted = Number(
      localStorage.getItem(STORAGE_KEYS.quizzesCompleted) || "0",
    );
    const safeCompleted = Number.isFinite(currentCompleted)
      ? currentCompleted
      : 0;
    localStorage.setItem(
      STORAGE_KEYS.quizzesCompleted,
      String(safeCompleted + 1),
    );

    setAttemptSaved(true);
  }, [
    accuracyPercent,
    answeredCount,
    attemptSaved,
    incorrectAnswers,
    quiz,
    quizCategory,
    score,
    showScore,
    skippedCount,
    slug,
    totalQuestions,
  ]);

  const playFeedbackSound = (isCorrect) => {
    if (!soundEnabled) return;
    const audioSrc = isCorrect ? "/audio/correct.mp3" : "/audio/incorrect.mp3";
    const audio = new Audio(audioSrc);
    audio.volume = 0.6;
    audio.play().catch((error) => {
      console.warn("Audio playback failed:", error);
    });
  };

  const handleAnswerOptionClick = (index) => {
    if (
      !quiz ||
      userAnswers[currentQuestion] !== undefined ||
      skippedQuestions.has(currentQuestion)
    ) {
      return;
    }
    const isCorrect = index === quiz.questions[currentQuestion].answer;
    playFeedbackSound(isCorrect);
    setUserAnswers((current) => ({ ...current, [currentQuestion]: index }));
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
      return;
    }
    setShowScore(true);
  };

  const handleBack = () => {
    if (currentQuestion > 0) setCurrentQuestion((value) => value - 1);
  };

  const handleSkip = () => {
    setSkippedQuestions((current) => new Set([...current, currentQuestion]));
    handleNext();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setSkippedQuestions(new Set());
    setShowScore(false);
    setAttemptSaved(false);
  };

  if (quizStatus === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-black">
        <div className="w-full max-w-md rounded-3xl border border-gray-200/50 bg-white/90 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90 dark:shadow-black/50">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Loading quiz
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Preparing your questions.
          </p>
        </div>
      </div>
    );
  }

  if (quizStatus !== "ready" || !quiz) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quiz not found
          </h1>
          <p className="mb-6 mt-2 text-gray-600 dark:text-gray-400">
            The requested quiz could not be loaded.
          </p>
          <button
            type="button"
            onClick={() => router.push("/quiz")}
            className="rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg"
          >
            {t("backToQuizzes", "Back to Quizzes")}
          </button>
        </div>
      </div>
    );
  }

  const currentQuizQuestion = quiz.questions[currentQuestion];

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-80 w-80 animate-blob rounded-full bg-linear-to-br from-indigo-400 to-blue-500 opacity-20 blur-xl mix-blend-multiply dark:from-indigo-900 dark:to-blue-900 dark:mix-blend-soft-light" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-blob rounded-full bg-linear-to-br from-purple-400 to-pink-500 opacity-20 blur-xl mix-blend-multiply dark:from-purple-900 dark:to-pink-900 dark:mix-blend-soft-light animation-delay-2000" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-gray-200/50 bg-white/90 shadow-2xl shadow-black/10 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90 dark:shadow-black/50">
          {showScore
            ? <div className="p-8 sm:p-12">
                <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Quiz Completed
                </h2>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                  {quizCategory} • {quiz.title}
                </p>

                <div className="mt-6 rounded-2xl bg-linear-to-r from-green-50 to-emerald-50 p-6 text-center dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="text-5xl font-bold text-green-700 dark:text-green-300 sm:text-6xl">
                    {score}/{totalQuestions}
                  </div>
                  <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                    {getScoreMessage(score, totalQuestions)}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Correct
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {score}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Incorrect
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {incorrectAnswers.length}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Skipped
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {skippedCount}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Accuracy
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {accuracyPercent}%
                    </p>
                  </div>
                </div>

                {incorrectAnswers.length > 0 && (
                  <div className="mt-8 rounded-2xl border border-amber-300/60 bg-amber-50 p-4 dark:border-amber-700/60 dark:bg-amber-900/20">
                    <h3 className="text-lg font-bold text-amber-800 dark:text-amber-200">
                      Weak answer review
                    </h3>
                    <div className="mt-3 space-y-3">
                      {incorrectAnswers.slice(0, 5).map((item) => (
                        <div
                          key={`${item.question}-${item.questionIndex}`}
                          className="rounded-lg bg-white p-3 text-sm dark:bg-slate-900"
                        >
                          <p className="font-semibold text-slate-900 dark:text-slate-100">
                            Q{item.questionIndex + 1}. {item.question}
                          </p>
                          <p className="mt-1 text-red-700 dark:text-red-300">
                            Your answer: {optionLetter(item.selectedIndex)}.{" "}
                            {item.selectedOption}
                          </p>
                          <p className="text-green-700 dark:text-green-300">
                            Correct answer: {optionLetter(item.correctIndex)}.{" "}
                            {item.correctOption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="rounded-xl bg-linear-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-emerald-600 hover:shadow-lg"
                  >
                    Retry Quiz
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push("/quiz/review")}
                    className="rounded-xl border border-indigo-400 px-6 py-3 font-semibold text-indigo-700 transition-all duration-300 hover:scale-105 hover:bg-indigo-50 dark:border-indigo-500 dark:text-indigo-300 dark:hover:bg-indigo-900/30"
                  >
                    Review Questions
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push("/user-profile")}
                    className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:scale-105 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Open Profile Progress
                  </button>
                </div>
              </div>
            : <div className="p-6 sm:p-8">
                <div className="mb-8">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                      {quiz.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                        {quizCategory}
                      </span>
                      <label className="flex items-center gap-2 text-sm text-gray-600 select-none dark:text-gray-400">
                        <input
                          type="checkbox"
                          checked={soundEnabled}
                          onChange={(event) =>
                            setSoundEnabled(event.target.checked)
                          }
                          className="h-4 w-4 accent-indigo-600"
                        />
                        Sound
                      </label>
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="rounded-lg bg-slate-100 p-2 text-center text-xs dark:bg-slate-800">
                      <p className="text-slate-500 dark:text-slate-400">
                        Answered
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {answeredCount}
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-100 p-2 text-center text-xs dark:bg-slate-800">
                      <p className="text-slate-500 dark:text-slate-400">
                        Skipped
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {skippedCount}
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-100 p-2 text-center text-xs dark:bg-slate-800">
                      <p className="text-slate-500 dark:text-slate-400">
                        Remaining
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {remainingCount}
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-100 p-2 text-center text-xs dark:bg-slate-800">
                      <p className="text-slate-500 dark:text-slate-400">
                        Question
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white">
                        {currentQuestion + 1}/{totalQuestions}
                      </p>
                    </div>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-full bg-linear-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <h3 className="mb-6 text-xl font-semibold leading-relaxed text-gray-900 dark:text-white sm:text-2xl">
                  {currentQuizQuestion.question}
                </h3>

                {currentQuizQuestion.image && (
                  <div className="mb-6 flex justify-center">
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                      <Image
                        src={currentQuizQuestion.image}
                        alt="Quiz illustration"
                        width={420}
                        height={260}
                        className="max-h-52 w-full object-contain"
                      />
                    </div>
                  </div>
                )}

                <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {currentQuizQuestion.options.map((option, index) => {
                    const isAnswered =
                      userAnswers[currentQuestion] !== undefined;
                    const isSkipped = skippedQuestions.has(currentQuestion);
                    const isSelected = userAnswers[currentQuestion] === index;
                    const isCorrect = index === currentQuizQuestion.answer;

                    let optionClass =
                      "w-full rounded-xl border-2 border-gray-200 bg-white p-3 text-left transition-all duration-200 hover:scale-[1.02] hover:border-gray-300 hover:bg-gray-50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700";

                    if (isAnswered || isSkipped) {
                      if (isCorrect) {
                        optionClass =
                          "w-full rounded-xl border-2 border-green-500 bg-green-50 p-3 text-left text-green-700 shadow-lg shadow-green-500/20 dark:bg-green-900/20 dark:text-green-300";
                      } else if (isSelected) {
                        optionClass =
                          "w-full rounded-xl border-2 border-red-500 bg-red-50 p-3 text-left text-red-700 shadow-lg shadow-red-500/20 dark:bg-red-900/20 dark:text-red-300";
                      } else {
                        optionClass =
                          "w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-3 text-left opacity-60 dark:border-gray-700 dark:bg-gray-800";
                      }
                    }

                    return (
                      <button
                        key={`${currentQuestion}-${option}`}
                        type="button"
                        onClick={() => handleAnswerOptionClick(index)}
                        className={optionClass}
                        disabled={isAnswered || isSkipped}
                      >
                        <div className="flex items-center">
                          <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-xs font-bold dark:border-gray-600">
                            {optionLetter(index)}
                          </span>
                          <span className="text-sm font-medium leading-tight">
                            {option}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className="w-full rounded-xl bg-gray-200 px-6 py-3 text-gray-700 transition-all duration-200 hover:scale-105 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 sm:w-auto"
                  >
                    &larr; Back
                  </button>

                  <div className="flex w-full gap-3 sm:w-auto">
                    {userAnswers[currentQuestion] === undefined && (
                      <button
                        type="button"
                        onClick={handleSkip}
                        className="flex-1 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-yellow-600 hover:shadow-lg sm:flex-none"
                      >
                        Skip
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={userAnswers[currentQuestion] === undefined}
                      className="flex-1 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
                    >
                      {currentQuestion === totalQuestions - 1
                        ? "Finish Quiz"
                        : "Next ->"}
                    </button>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => router.push("/quiz")}
                    className="text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    &larr; {t("backToQuizSelection", "Back to Quiz Selection")}
                  </button>
                </div>
              </div>}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
