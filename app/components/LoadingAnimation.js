'use client';

import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  const loadingTips = [
    "🚗 Preparing your driving journey...",
    "📚 Loading study materials...",
    "🛣️ Setting up road signs...",
    "⚡ Almost ready to go!"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % loadingTips.length);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tipInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-black relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 dark:bg-green-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-bounce-slight"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-bounce-slight"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-bounce-slight"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-3xl text-white font-bold">R</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Rafiki Driving School
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Master Kenyan Roads
          </p>
        </div>

        
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">

            <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
            
            <div className="absolute inset-0 border-4 border-transparent border-t-green-500 border-r-blue-500 rounded-full animate-spin"></div>

            <div className="absolute inset-6 bg-linear-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        
        <div className="mb-6">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/30"></div>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        
        <div className="h-12 flex items-center justify-center">
          <p className="text-gray-700 dark:text-gray-300 text-sm animate-pulse">
            {loadingTips[currentTip]}
          </p>
        </div>

        
        <div className="absolute -top-10 -left-10 w-6 h-6 bg-green-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute -top-5 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute -bottom-8 -left-6 w-5 h-5 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
      </div>


    </div>
  );
}