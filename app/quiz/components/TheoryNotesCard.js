import Link from 'next/link';

export default function TheoryNotesCard() {
  return (
    <Link href="/study/theory-notes">
      <div className="relative group bg-gradient-to-br from-white/90 via-blue-50/90 to-indigo-50/90 dark:from-gray-900/90 dark:via-indigo-950/90 dark:to-purple-950/90 p-8 sm:p-10 rounded-3xl border-2 border-indigo-200 dark:border-indigo-800 shadow-xl backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/40 dark:hover:shadow-indigo-500/60 hover:border-indigo-400 dark:hover:border-indigo-400">
        
        {/* Animated Background Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 opacity-30 group-hover:scale-150 group-hover:opacity-50 transition-all duration-1000 ease-out blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-800 dark:to-cyan-800 opacity-30 group-hover:scale-150 group-hover:opacity-50 transition-all duration-1000 ease-out blur-2xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-4 right-8 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-700"></div>
        <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-700" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute bottom-8 left-12 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-700" style={{ animationDelay: '0.4s' }}></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/15 group-hover:to-blue-500/20 transition-all duration-700"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Icon Section */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-grow text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-3 group-hover:scale-105 transition-transform duration-700">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">NEW FEATURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-700">
              Theory Notes & Study Materials
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-700">
              Access comprehensive study materials with images, videos, infographics, and interactive charts. Master the theory before taking quizzes.
            </p>
            
            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
              <span className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform duration-500">📚 Detailed Notes</span>
              <span className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform duration-500" style={{ transitionDelay: '50ms' }}>🎥 Video Tutorials</span>
              <span className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform duration-500" style={{ transitionDelay: '100ms' }}>📊 Infographics</span>
              <span className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform duration-500" style={{ transitionDelay: '150ms' }}>📈 Charts & Diagrams</span>
            </div>
            
            {/* CTA Button */}
            <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-4 transition-all duration-700">
              <span>Explore Theory Notes</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
          
          {/* Visual Indicator */}
          <div className="hidden lg:block relative flex-shrink-0">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl group-hover:rotate-[-12deg] transition-transform duration-700"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg group-hover:rotate-6 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-out"></div>
        </div>
        
        {/* Border Highlight */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-400/50 dark:group-hover:border-indigo-400/70 transition-all duration-700"></div>
      </div>
    </Link>
  );
}
