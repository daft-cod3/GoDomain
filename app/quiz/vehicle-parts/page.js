'use client';

import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';

export default function PlaceholderQuizPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quiz Coming Soon!</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
        This quiz category is under development. Check back later!
      </p>
      <Link href="/quiz" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
        {t('backToQuizzes','Back to Quizzes')}
      </Link>
    </div>
  );
}
