import Link from 'next/link';

export default function QuizCard({ title, description, image, href, subQuizzes }) {
  const category = href.split('/').pop();
  return (
    <div className="relative group bg-white/80 dark:bg-gray-900/80 p-5 sm:p-7 rounded-2xl border-2 border-gray-200 dark:border-gray-800 shadow-md backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] h-full flex flex-col overflow-hidden cursor-pointer hover:scale-[1.08] hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/50 hover:border-indigo-400 dark:hover:border-indigo-400 hover:-rotate-1">
      
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 opacity-20 group-hover:scale-[2] group-hover:opacity-50 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>

      
      <div className="absolute top-2 right-2 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-700 ease-out"></div>
      <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-700 ease-out" style={{ animationDelay: '0.15s' }}></div>
      <div className="absolute top-6 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-700 ease-out" style={{ animationDelay: '0.3s' }}></div>

      
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/15 group-hover:via-purple-500/10 group-hover:to-pink-500/15 transition-all duration-700 ease-out"></div>

      <div className="relative z-10">
        {image && (
          <div className="relative w-full h-32 sm:h-40 rounded-xl mb-3 sm:mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-700 ease-out">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:rotate-3"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
          </div>
        )}
        <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-700 ease-out">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 grow mb-3 sm:mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-700 ease-out">{description}</p>
        <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2">
          {subQuizzes.map((quiz, idx) => (
            <Link 
              key={quiz.id} 
              href={`/quiz/${category}-${quiz.id}`} 
              className="relative bg-indigo-600/90 text-white text-center font-bold py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm hover:bg-indigo-700/90 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="relative z-10">{quiz.name}</span>
              <div className="absolute inset-0 bg-linear-to-r from-indigo-400/0 via-white/20 to-indigo-400/0 translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          ))}
        </div>
      </div>

      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
      </div>

      
      <span className="absolute top-4 right-4 text-indigo-400 group-hover:translate-x-3 group-hover:-translate-y-1 group-hover:scale-125 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-xl sm:text-2xl z-20 group-hover:rotate-[-15deg]">→</span>
    </div>
  );
}
