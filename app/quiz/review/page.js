'use client';

import { quizzes } from '../data';
import Link from 'next/link';

export default function ReviewHomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Review Answered Quizzes
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select a quiz to review the questions and correct answers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {quizzes.map((quiz) => (
            <div key={quiz.href} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-white">{quiz.name}</h3>
              <div className="grid grid-cols-2 gap-2">
                {quiz.subQuizzes.map((subQuiz) => (
                  <Link key={subQuiz.id} href={`/quiz/review/${quiz.href.split('/').pop()}-${subQuiz.id}`} className="bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    {subQuiz.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
