'use client';

import QuizCard from './components/QuizCard';
import { quizzes } from './data';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageContext';

export default function QuizPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-black relative overflow-hidden">

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-indigo-400 to-purple-500 dark:from-indigo-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-purple-400 to-pink-500 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg--to-br from-pink-400 to-rose-500 dark:from-pink-900 dark:to-rose-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        

        <div className="absolute top-20 left-10 text-2xl opacity-60 animate-bounce">📝</div>
        <div className="absolute top-40 right-20 text-xl opacity-60 animate-bounce" style={{ animationDelay: '1s' }}>🎯</div>
        <div className="absolute bottom-40 left-20 text-lg opacity-60 animate-bounce" style={{ animationDelay: '2s' }}>🏆</div>
        <div className="absolute bottom-20 right-10 text-2xl opacity-60 animate-bounce" style={{ animationDelay: '3s' }}>⭐</div>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">

        
        <div className="text-center space-y-6 mb-12 sm:mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              <span className="relative">
                {t('testYourKnowledge', 'Test Your Knowledge')}
                <div className="absolute -inset-2 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
              </span>
              <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x ml-4">
                {t('knowledge','Knowledge')}
              </span>
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            {t('quizDescription', 'Answer questions to review what you\'ve learned.')}
          </p>
          

          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('questions','Questions')}</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('passRate','Pass Rate')}</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('available','Available')}</div>
            </div>
          </div>
        </div>

        
        <div className="mb-16 sm:mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Link href="/quiz/review/general-review">
            <div className="group relative backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-out hover:border-indigo-400/50 dark:hover:border-indigo-400/50">
              
              <div className="absolute inset-0 bg-linear-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 ease-out"></div>
              

              <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-500 ease-out"></div>
              <div className="absolute top-8 right-12 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-500 ease-out" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute top-6 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-500 ease-out" style={{ animationDelay: '0.6s' }}></div>
              
              <div className="relative p-8 sm:p-12 md:p-16 text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 ease-out"></div>
                  <div className="relative w-16 h-16 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500 ease-out">
                  {t('reviewProgress','Review Your Progress')}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {t('analyzePerformance','Analyze your quiz performance, review correct answers, and identify areas for improvement.')}
                </p>
                
                <div className="mt-8 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-2 transition-transform duration-500 ease-out">
                  <span className="text-lg">{t('startReviewing') || 'Start Reviewing'}</span>
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-lienear-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </Link>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('quizCategories') || 'Quiz Categories'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('selectCategory') || 'Select a category and choose your quiz level to begin testing your knowledge.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {quizzes.map((quiz, index) => (
              <div key={quiz.href} className="animate-fade-in-up" style={{ animationDelay: `${600 + index * 100}ms` }}>
                <QuizCard
                  title={quiz.name}
                  description={quiz.description}
                  image={quiz.image}
                  href={quiz.href}
                  subQuizzes={quiz.subQuizzes}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('whyTakeQuizzes')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('instantFeedback')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('instantFeedbackDesc')}</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('trackProgress')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('trackProgressDesc')}</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('learnEffectively')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('learnEffectivelyDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
