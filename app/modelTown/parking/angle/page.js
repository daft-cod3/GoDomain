'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../components/LanguageContext';

export default function AngleParkingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-black relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-purple-400 to-pink-500 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-pink-400 to-indigo-500 dark:from-pink-900 dark:to-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-full-to-br from-indigo-400 to-purple-500 dark:from-indigo-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link href="/modelTown" className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToModelTown') || 'Back to Model Town'}
          </Link>
        </div>

        
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              <span className="relative">
                {t('angleParking') || 'Angle Parking'}
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              </span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            {t('angleParkingDesc') || 'Learn the technique of parking at an angle to the curb, commonly used in parking lots and angled spaces.'}
          </p>
        </div>

        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {t('parkingSteps') || 'Step-by-Step Guide'}
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: t('locateSpace') || 'Locate the Parking Space',
                  desc: t('locateSpaceDesc') || 'Identify an empty angled parking space. Check for directional arrows painted on the pavement indicating the angle.'
                },
                {
                  step: 2,
                  title: t('approachCorrectly') || 'Approach from the Correct Direction',
                  desc: t('approachCorrectlyDesc') || 'Approach the space head-on if spaces are angled toward you, or reverse if angled away.'
                },
                {
                  step: 3,
                  title: t('alignWithLines') || 'Align with Parking Lines',
                  desc: t('alignWithLinesDesc') || 'Position your vehicle so the wheels are parallel to the painted lines on the ground.'
                },
                {
                  step: 4,
                  title: t('turnWheels') || 'Turn the Wheels Appropriately',
                  desc: t('turnWheelsDesc') || 'Turn the steering wheel sharply toward the curb as you enter the space.'
                },
                {
                  step: 5,
                  title: t('enterSpace') || 'Enter the Space Slowly',
                  desc: t('enterSpaceDesc') || 'Drive forward slowly into the space, keeping the vehicle at the correct angle.'
                },
                {
                  step: 6,
                  title: t('centerAndStraighten') || 'Center and Straighten',
                  desc: t('centerAndStraightenDesc') || 'Once inside, straighten the wheels and adjust position to center between the lines.'
                }
              ].map((item, i) => (
                <div key={i} className="group relative backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-purple-200/40 dark:border-purple-700/40 rounded-xl p-5 hover:scale-105 hover:shadow-lg hover:border-purple-400/60 dark:hover:border-purple-400/60 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 to-purple-400/0 group-hover:from-purple-500/5 group-hover:to-purple-400/5 transition-all duration-300" />
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="space-y-8">
            
            <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t('parkingTips') || 'Expert Tips'}
              </h2>
              <div className="space-y-4">
                {[
                  t('checkAngle') || 'Always check the angle markings on the pavement before parking.',
                  t('useMirrors') || 'Use mirrors to ensure you\'re not too close to adjacent vehicles.',
                  t('practiceAngles') || 'Practice in empty lots with different angle configurations.',
                  t('watchWheels') || 'Keep an eye on your wheels to ensure they stay within the lines.',
                  t('leaveSpace') || 'Leave adequate space between your vehicle and others for easy exit.'
                ].map((tip, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-400">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t('safetyConsiderations') || 'Safety Considerations'}
              </h2>
              <div className="space-y-4">
                {[
                  t('avoidOverhang') || 'Ensure your vehicle doesn\'t overhang into traffic lanes.',
                  t('respectDirections') || 'Park in the direction indicated by pavement markings.',
                  t('emergencyExit') || 'Position for quick and safe exit in emergencies.',
                  t('pedestrianAwareness') || 'Be aware of pedestrians walking between parked vehicles.',
                  t('weatherCaution') || 'Exercise extra caution on slippery surfaces.'
                ].map((safety, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-400">{safety}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200/50 dark:border-gray-700/50 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('visualGuide') || 'Visual Guide'}
          </h2>
          <div className="text-center">
            <div className="inline-block p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl">
              <div className="text-6xl mb-4">📐</div>
              <p className="text-gray-600 dark:text-gray-400">
                {t('angleVisualDesc') || 'Visualize parking at a 45-degree angle to the curb, following the painted directional arrows.'}
              </p>
            </div>
          </div>
        </div>

        
        <div className="text-center">
          <Link href="/modelTown" className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
            {t('practiceNow') || 'Practice in Model Town'}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
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
