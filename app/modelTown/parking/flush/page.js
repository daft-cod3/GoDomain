'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../components/LanguageContext';

export default function FlushParkingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-black relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-purple-400 to-pink-500 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-full-to-br from-indigo-400 to-blue-500 dark:from-indigo-900 dark:to-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link href="/modelTown" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
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
                {t('flushParking') || 'Flush Parking'}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              </span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            {t('flushParkingDesc') || 'Master the art of parallel parking with step-by-step guidance and expert tips.'}
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Steps */}
          <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {t('parkingSteps') || 'Step-by-Step Guide'}
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: t('findSpot') || 'Find a Suitable Spot',
                  desc: t('findSpotDesc') || 'Look for a space at least 1.5 times the length of your vehicle. Check for no-parking signs and ensure the space is legal.'
                },
                {
                  step: 2,
                  title: t('positionCar') || 'Position Your Car',
                  desc: t('positionCarDesc') || 'Pull up alongside the vehicle in front of the empty space, keeping about 2 feet of distance.'
                },
                {
                  step: 3,
                  title: t('signalAndCheck') || 'Signal and Check Mirrors',
                  desc: t('signalAndCheckDesc') || 'Turn on your right turn signal and check all mirrors and blind spots for approaching traffic.'
                },
                {
                  step: 4,
                  title: t('reverseSlowly') || 'Reverse Slowly',
                  desc: t('reverseSlowlyDesc') || 'Begin reversing slowly while turning the steering wheel sharply to the right.'
                },
                {
                  step: 5,
                  title: t('straightenWheels') || 'Straighten the Wheels',
                  desc: t('straightenWheelsDesc') || 'Once your car is at a 45-degree angle, straighten the wheels and continue reversing slowly.'
                },
                {
                  step: 6,
                  title: t('adjustPosition') || 'Adjust and Center',
                  desc: t('adjustPositionDesc') || 'Pull forward if needed to center your vehicle in the space, keeping equal distance from both vehicles.'
                }
              ].map((item, i) => (
                <div key={i} className="group relative backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-blue-200/40 dark:border-blue-700/40 rounded-xl p-5 hover:scale-105 hover:shadow-lg hover:border-blue-400/60 dark:hover:border-blue-400/60 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 to-blue-400/0 group-hover:from-blue-500/5 group-hover:to-blue-400/5 transition-all duration-300" />
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.title}</h4>
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
                  t('practiceEmptyLot') || 'Practice in an empty parking lot first to build confidence.',
                  t('useReferencePoints') || 'Use the side mirrors and windows as reference points.',
                  t('goSlow') || 'Always reverse slowly and stop if you feel unsure.',
                  t('checkTraffic') || 'Continuously check for pedestrians and other vehicles.',
                  t('adjustSeat') || 'Adjust your seat position for better visibility before parking.'
                ].map((tip, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
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
                  t('avoidBlocking') || 'Never block driveways, intersections, or fire hydrants.',
                  t('respectSigns') || 'Always obey parking signs and restrictions.',
                  t('leaveRoom') || 'Leave enough space for other vehicles to maneuver.',
                  t('emergencyAccess') || 'Ensure emergency vehicles can access the area.',
                  t('weatherConditions') || 'Be extra cautious in bad weather conditions.'
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
              <div className="text-6xl mb-4">🅿️</div>
              <p className="text-gray-600 dark:text-gray-400">
                {t('visualDesc') || 'Imagine aligning your vehicle parallel to the curb, leaving adequate space for traffic flow.'}
              </p>
            </div>
          </div>
        </div>

        
        <div className="text-center">
          <Link href="/modelTown" className="bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
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
