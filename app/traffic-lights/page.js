'use client';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageContext';
import { trafficLightsResearch } from '../study/researchContent';
const trafficLightSignals = [
  {
    id: 1,
    title: "Red Light",
    image: "https://via.placeholder.com/300x200/ff0000/ffffff?text=Red+Light",
    description: "Stop completely before the stop line or crosswalk. Do not proceed until the light turns green.",
    titleKey: 'redLight',
    descKey: 'redLightDesc'
  },
  {
    id: 2,
    title: "Yellow Light",
    image: "https://via.placeholder.com/300x200/ffff00/000000?text=Yellow+Light",
    description: "Prepare to stop if you can do so safely. If you're too close to the intersection, proceed with caution.",
    titleKey: 'yellowLight',
    descKey: 'yellowLightDesc'
  },
  {
    id: 3,
    title: "Green Light",
    image: "https://via.placeholder.com/300x200/00ff00/000000?text=Green+Light",
    description: "You may proceed if the intersection is clear. Yield to pedestrians and other vehicles as necessary.",
    titleKey: 'greenLight',
    descKey: 'greenLightDesc'
  },
  {
    id: 4,
    title: "Flashing Red",
    image: "https://via.placeholder.com/300x200/ff0000/ffffff?text=Flashing+Red",
    description: "Treat as a stop sign. Come to a complete stop and proceed only when it's safe.",
    titleKey: 'flashingRed',
    descKey: 'flashingRedDesc'
  },
  {
    id: 5,
    title: "Flashing Yellow",
    image: "https://via.placeholder.com/300x200/ffff00/000000?text=Flashing+Yellow",
    description: "Slow down and proceed with caution. Yield to oncoming traffic.",
    titleKey: 'flashingYellow',
    descKey: 'flashingYellowDesc'
  },
  {
    id: 6,
    title: "Green Arrow",
    image: "https://via.placeholder.com/300x200/00ff00/000000?text=Green+Arrow",
    description: "You may turn in the direction of the arrow if the intersection is clear.",
    titleKey: 'greenArrow',
    descKey: 'greenArrowDesc'
  }
];
export default function TrafficLightsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-yellow-50 to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-300 dark:bg-red-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-300 dark:bg-green-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            {t('trafficLights','Traffic Lights')}<span className="bg-linear-to-r from-red-600 to-green-600 bg-clip-text text-transparent"> {t('guide','Guide')}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('masterTrafficLights','Master traffic light signals and rules for safe driving')}
          </p>
        </div>
        <div className="mb-16 animate-fade-in-up">
          <div className="relative group backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-xl overflow-hidden border border-gray-200/40 dark:border-gray-700/40 hover:shadow-2xl transition-all duration-500 hover:border-red-400/30 dark:hover:border-red-400/30">
            <div className="absolute inset-0 bg-linear-to-br from-red-500/0 to-green-500/0 group-hover:from-red-500/5 group-hover:to-green-500/5 transition-all duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-400 via-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-6 sm:p-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-red-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                {t('trafficLightsOverview','Traffic Lights Overview')}
              </h2>
              <p className="text-sm sm:text-base text-white dark:text-gray-400 max-w-3xl mx-auto group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {t('understandTrafficLights','Understand the meaning of each traffic light signal and how to respond safely')}
              </p>
            </div>
            <div className="relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-6 sm:mb-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-full transition-all duration-1000 z-20 pointer-events-none" />
              <Image
                src="/traffic/traffic.jpg"
                alt="Traffic Light"
                className="w-full h-auto max-h-96 object-contain bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-700 ease-out"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('trafficLightSignals','Traffic Light Signals')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trafficLightSignals.map((signal, index) => (
              <div
                key={signal.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group relative backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-lg overflow-hidden border border-gray-200/40 dark:border-gray-700/40 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up overflow-hidden" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="absolute inset-0 bg-linear-to-br from-red-500/0 to-green-500/0 group-hover:from-red-500/5 group-hover:to-green-500/5 transition-all duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-400 via-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-full transition-all duration-1000 z-20 pointer-events-none" />
                    <img
                      src={signal.image}
                      alt={signal.title}
                      className="w-full h-48 object-contain bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-red-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
                      {t(signal.titleKey, signal.title)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {t(signal.descKey, signal.description)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16 animate-fade-in-up">
          <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('safetyTips','Safety Tips')}
            </h2>
            <div className="grid md:grid-cols-1 grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-linear-to-r from-red-600 to-red-500 bg-clip-text text-transparent dark:from-red-400 dark:to-red-300">{t('generalRules','General Rules')}</h3>
                {[
                  { title: t('alwaysObeySignals','Always Obey Signals'), desc: t('alwaysObeySignalsDesc','Traffic lights are there for safety. Ignoring them can cause accidents.') },
                  { title: t('checkForPedestrians','Check for Pedestrians'), desc: t('checkForPedestriansDesc','Look for pedestrians before proceeding, even on green lights.') },
                  { title: t('rightOfWay','Right of Way'), desc: t('rightOfWayDesc','Yield to traffic already in the intersection when the light changes.') },
                  { title: t('emergencyVehicles','Emergency Vehicles'), desc: t('emergencyVehiclesDesc','Pull over and stop for emergency vehicles regardless of the light.') }
                ].map((item, i) => (
                  <div key={i} className="group/lane relative backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-red-200/40 dark:border-red-700/40 rounded-xl p-5 hover:scale-105 hover:shadow-lg hover:border-red-400/60 dark:hover:border-red-400/60 transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-red-500/0 to-red-400/0 group-hover/lane:from-red-500/5 group-hover/lane:to-red-400/5 transition-all duration-300" />
                    <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-red-400 to-transparent opacity-0 group-hover/lane:opacity-100 transition-opacity duration-300" />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 relative z-10 group-hover/lane:text-red-600 dark:group-hover/lane:text-red-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent dark:from-green-400 dark:to-green-300">{t('turningRules','Turning Rules')}</h3>
                {[
                  { title: t('rightTurnsOnRed','Right Turns on Red'), desc: t('rightTurnsOnRedDesc','In some areas, right turns are allowed after stopping, but check local laws.') },
                  { title: t('leftTurns','Left Turns'), desc: t('leftTurnsDesc','Wait for green arrow or proceed if clear and legal.') },
                  { title: t('uTurns','U-Turns'), desc: t('uTurnsDesc','Only where permitted and safe.') },
                  { title: t('noTurnsOnRed','No Turns on Red'), desc: t('noTurnsOnRedDesc','Do not make left turns on red unless specified.') }
                ].map((item, i) => (
                  <div key={i} className="group/lane relative backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-green-200/40 dark:border-green-700/40 rounded-xl p-5 hover:scale-105 hover:shadow-lg hover:border-green-400/60 dark:hover:border-green-400/60 transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-green-500/0 to-green-400/0 group-hover/lane:from-green-500/5 group-hover/lane:to-green-400/5 transition-all duration-300" />
                    <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-green-400 to-transparent opacity-0 group-hover/lane:opacity-100 transition-opacity duration-300" />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 relative z-10 group-hover/lane:text-green-600 dark:group-hover/lane:text-green-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-fade-in-up">
          <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              {trafficLightsResearch.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-8">
              {trafficLightsResearch.subtitle}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {trafficLightsResearch.modules.map((module, index) => (
                <div
                  key={`${module.title}-${index}`}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-5"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{module.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {module.points.map((point, pointIndex) => (
                      <li key={`${point.slice(0, 24)}-${pointIndex}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 text-center">
                Reference Sources
              </p>
              <ul className="space-y-1 text-sm text-center">
                {trafficLightsResearch.sources.map((source) => (
                  <li key={source.id}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-700 dark:text-green-300 hover:underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
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
