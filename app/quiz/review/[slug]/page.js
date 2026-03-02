import QuizReview from "../../components/QuizReview";
import { generalReviewQuiz } from "../../general-review";
import { quizzes } from "../../quizzes";
import {
  getCategoryFallbackImage,
  getCuratedReviewQuiz,
} from "../reviewQuestionBank";

function normalizeQuestion(question, fallbackImage) {
  const options = Array.isArray(question?.options)
    ? question.options
        .filter((option) => typeof option === "string")
        .map((option) => option.trim())
        .filter(Boolean)
    : [];

  while (options.length < 4) {
    options.push(`Option ${String.fromCharCode(65 + options.length)}`);
  }

  const safeOptions = options.slice(0, 4);
  const answer =
    Number.isInteger(question?.answer) && question.answer >= 0 && question.answer < 4
      ? question.answer
      : 0;

  return {
    ...question,
    image:
      typeof question?.image === "string" && question.image.trim()
        ? question.image
        : fallbackImage,
    options: safeOptions,
    answer,
  };
}

export default async function DynamicQuizReviewPage({ params }) {
  const { slug } = await params;

  const curatedQuiz = getCuratedReviewQuiz(slug);
  if (curatedQuiz) {
    return <QuizReview quizData={curatedQuiz} />;
  }

  let quizData = null;
  const fallbackImage = getCategoryFallbackImage(slug);

  if (slug === "general-review") {
    quizData = {
      ...generalReviewQuiz,
      questions: generalReviewQuiz.questions.map((question) =>
        normalizeQuestion(question, fallbackImage),
      ),
    };
  } else if (quizzes[slug]) {
    quizData = {
      ...quizzes[slug],
      questions: quizzes[slug].questions.map((question) =>
        normalizeQuestion(question, fallbackImage),
      ),
    };
  }

  return <QuizReview quizData={quizData} />;
}
