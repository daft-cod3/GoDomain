"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageContext";

function optionLetter(index) {
  return String.fromCharCode(65 + index);
}

export default function QuizReview({ quizData }) {
  const { t } = useLanguage();
  const quiz = quizData;

  if (!quiz) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
          <h1 className="text-2xl font-bold">{t("quizNotFound", "Quiz not found")}</h1>
          <p className="mt-2 text-sm text-slate-300">
            {t(
              "quizNotFoundDescription",
              "The requested review quiz could not be loaded.",
            )}
          </p>
          <Link
            href="/quiz/review"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {t("backToReviewHome", "Back to review home")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-blue-300">
            {t("reviewMode", "Review Mode")}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            {quiz.title} {t("review", "Review")}
          </h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            {t(
              "reviewDescription",
              "Each question shows the correct answer and a related image for revision.",
            )}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {t("backToQuizSelection", "Back to Quiz Selection")}
            </Link>
            <Link
              href="/quiz/review"
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            >
              {t("viewAllReviewQuizzes", "View all review quizzes")}
            </Link>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {quiz.questions.map((question, questionIndex) => (
            <article
              key={`${question.question}-${questionIndex}`}
              className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                <span>
                  {t("question", "Question")} {questionIndex + 1}
                </span>
                <span>
                  {t("correct", "Correct")}: {optionLetter(question.answer)}
                </span>
              </div>

              <h2 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                {question.question}
              </h2>

              {question.image && (
                <div className="mb-4 overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
                  <Image
                    src={question.image}
                    alt={t("questionImage", "Question image")}
                    width={640}
                    height={360}
                    className="h-48 w-full object-cover sm:h-56"
                  />
                </div>
              )}

              <div className="grid gap-2 sm:grid-cols-2">
                {question.options.map((option, optionIndex) => {
                  const isCorrect = optionIndex === question.answer;
                  return (
                    <div
                      key={`${option}-${optionIndex}`}
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        isCorrect
                          ? "border-green-500 bg-green-900/30 text-green-200"
                          : "border-slate-700 bg-slate-800 text-slate-200"
                      }`}
                    >
                      <span className="mr-2 font-bold">{optionLetter(optionIndex)}.</span>
                      {option}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
