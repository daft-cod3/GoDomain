'use client';
import Link from 'next/link';
import { roadSignContent } from './data.js';
import { useLanguage } from '../components/LanguageContext';
export default function RoadSignsPage() {
  const { t } = useLanguage();
  const getRegulatorySubcategory = (imagePath = '') => {
    if (imagePath.includes('/roadSign/regulatory/priority/')) return 'priority';
    if (imagePath.includes('/roadSign/regulatory/proh/')) return 'prohibitory';
    return 'prohibitory';
  };
  const categories = [
    {
      key: 'Regulatory Signs',
      name: t('regulatorySigns','Regulatory Signs'),
      description: t('regulatoryDesc','Regulatory signs set rules and restrictions to control traffic flow.'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      key: 'Warning Signs',
      name: t('warningSigns','Warning Signs'),
      description: t('warningDesc','Warning signs alert drivers to potential hazards ahead.'),
      color: 'bg-yellow-600 hover:bg-yellow-700'
    },
    {
      key: 'Informatory Signs',
      name: t('informatorySigns','Informatory Signs'),
      description: t('informatoryDesc','Informatory signs provide navigation and facility information.'),
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];
  const allSigns = Object.keys(roadSignContent).map(key => ({
    ...roadSignContent[key],
    slug: key,
    category: roadSignContent[key].category || 'Regulatory Signs'
  }));
  const renderSignsRow = (signs) => (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {signs.map((sign) => (
          <Link
            key={sign.slug}
            href={`/road-signs/${sign.slug}`}
            className="shrink-0 w-64 block group"
          >
            <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-green-600/30">
              <div className="w-full h-32 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10" />
                <img
                  src={sign.image}
                  alt={sign.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors">
                  {sign.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed grow h-16 overflow-y-auto">
                  {sign.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black animate-fade-in">
      <div className="relative isolate overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-16 sm:py-20 md:py-24 lg:py-28 text-center">
            <p className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-green-700 dark:text-green-300 mb-4 sm:mb-5">
              {t('kenyaRoadSigns','Kenya Road Signs')}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[0.95]">
              {t('roadSignsGuide','Road Signs Guide')}
            </h1>
            <p className="text-sm sm:text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
              {t('masterAllRoadSigns','Master all Kenyan road signs with detailed explanations, rules, and visual guides. Essential for NTSA theory exams.')}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {categories.map((category) => {
          const signsForCategory = allSigns.filter(sign => sign.category === category.key);
          if (signsForCategory.length === 0) return null;
          return (
            <div key={category.name}>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {category.name}
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mt-2">
                  {category.description}
                </p>
              </div>
              {category.key === 'Regulatory Signs' ? (
                <div className="space-y-8">
                  <div>
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {t('prioritySigns','Priority Signs')}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {t('prioritySignsDesc','These signs control right-of-way and who should proceed first.')}
                      </p>
                    </div>
                    {renderSignsRow(signsForCategory.filter(sign => getRegulatorySubcategory(sign.image) === 'priority'))}
                  </div>
                  <div>
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {t('prohibitorySigns','Prohibitory Signs')}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {t('prohibitorySignsDesc','These signs show restrictions and actions that are not allowed.')}
                      </p>
                    </div>
                    {renderSignsRow(signsForCategory.filter(sign => getRegulatorySubcategory(sign.image) === 'prohibitory'))}
                  </div>
                </div>
              ) : (
                renderSignsRow(signsForCategory)
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
