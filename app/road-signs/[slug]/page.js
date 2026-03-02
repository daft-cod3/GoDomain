'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/app/components/LanguageContext';
import { roadSignContent } from '../data.js';
import { buildResearchProfile } from '../researchInsights.js';

function getRegulatorySubcategory(imagePath = '') {
  if (imagePath.includes('/roadSign/regulatory/priority/')) return 'priority';
  if (imagePath.includes('/roadSign/regulatory/proh/')) return 'prohibitory';
  return 'prohibitory';
}

function countGuidancePoints(content = []) {
  return content.reduce((total, item) => {
    if (item.type === 'ul' && Array.isArray(item.items)) {
      return total + item.items.length;
    }
    return total;
  }, 0);
}

function findSectionText(content = [], keywords = []) {
  for (let i = 0; i < content.length; i += 1) {
    const item = content[i];
    if ((item.type === 'h3' || item.type === 'h4') && typeof item.text === 'string') {
      const normalized = item.text.toLowerCase();
      const isMatch = keywords.some((keyword) => normalized.includes(keyword));
      if (isMatch) {
        const nextItem = content[i + 1];
        if (nextItem?.type === 'p' && typeof nextItem.text === 'string') {
          return nextItem.text;
        }
      }
    }
  }
  return '';
}

function truncate(text = '', maxLength = 180) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function renderContent(contentItem, index) {
  switch (contentItem.type) {
    case 'h3':
      return (
        <h3 key={index} className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
          {contentItem.text}
        </h3>
      );
    case 'h4':
      return (
        <h4 key={index} className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">
          {contentItem.text}
        </h4>
      );
    case 'p':
      return (
        <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {contentItem.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={index} className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-2">
          {contentItem.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    default:
      return null;
  }
}

export default function RoadSignPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const { t } = useLanguage();

  const sign = slug ? roadSignContent[slug] : null;

  if (!sign) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
          {t('roadSignNotFound', 'Road sign not found.')}
        </h1>
        <Link
          href="/road-signs"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          {t('backToRoadSigns', 'Back to Road Signs')}
        </Link>
      </div>
    );
  }

  const allSlugs = Object.keys(roadSignContent);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const contentItems = Array.isArray(sign.content) ? sign.content : [];
  const subcategory = getRegulatorySubcategory(sign.image || '');
  const signType =
    sign.category === 'Regulatory Signs'
      ? subcategory === 'priority'
        ? t('prioritySign', 'Priority Sign')
        : t('prohibitorySign', 'Prohibitory Sign')
      : sign.category || t('roadSignType', 'Road Sign');
  const guidancePoints = countGuidancePoints(contentItems);
  const meaningText = findSectionText(contentItems, ['what it means', 'function', 'purpose']);
  const locationText = findSectionText(contentItems, ['location']);
  const penaltiesText = findSectionText(contentItems, ['penalt']);
  const researchProfile = buildResearchProfile(sign, slug);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Link
            href="/road-signs"
            className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {t('backToRoadSigns', 'Back to Road Signs')}
          </Link>
          <div className="flex items-center gap-2">
            {prevSlug && (
              <Link
                href={`/road-signs/${prevSlug}`}
                className="inline-flex items-center rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:border-green-500 transition-colors"
              >
                {t('previous', 'Previous')}
              </Link>
            )}
            {nextSlug && (
              <Link
                href={`/road-signs/${nextSlug}`}
                className="inline-flex items-center rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:border-green-500 transition-colors"
              >
                {t('next', 'Next')}
              </Link>
            )}
          </div>
        </div>

        <article className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
          <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row gap-6">
              {sign.image && (
                <div className="w-full md:w-64">
                  <div className="relative h-44 md:h-52 w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white overflow-hidden">
                    <Image
                      src={sign.image}
                      alt={sign.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 256px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              )}

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 text-xs font-semibold">
                    {sign.category || t('roadSignCategory', 'Road Sign Category')}
                  </span>
                  <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 text-xs font-semibold">
                    {signType}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {sign.title}
                </h1>
                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {sign.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                  <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-3">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t('category', 'Category')}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{sign.category}</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-3">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t('type', 'Type')}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{signType}</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-3">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t('guidancePoints', 'Guidance Points')}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{guidancePoints}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {meaningText && (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {t('mainMeaning', 'Main Meaning')}
                      </p>
                      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{truncate(meaningText, 140)}</p>
                    </div>
                  )}
                  {locationText && (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {t('commonLocation', 'Common Location')}
                      </p>
                      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{truncate(locationText, 140)}</p>
                    </div>
                  )}
                  {penaltiesText && (
                    <div className="rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/20 p-3 sm:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-red-700 dark:text-red-300">
                        {t('possiblePenalty', 'Possible Penalty')}
                      </p>
                      <p className="mt-1 text-sm text-red-800 dark:text-red-200">{truncate(penaltiesText, 220)}</p>
                    </div>
                  )}
                </div>

                <div className="mt-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 sm:p-5">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {t('researchBackedRoadSignData', 'Research-backed Road Sign Data')}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {t(
                      'researchBasisHint',
                      'These notes summarize official Kenyan road-sign guidance on meaning, placement, and expected driver behavior.'
                    )}
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {t('officialClass', 'Official Class')}
                      </p>
                      <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{researchProfile.className}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {t('legalEffect', 'Legal Effect')}
                      </p>
                      <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{researchProfile.legalEffect}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-3 sm:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {t('officialMeaning', 'Official Meaning')}
                      </p>
                      <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{researchProfile.officialMeaning}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-3 sm:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {t('typicalPlacement', 'Typical Placement / Location')}
                      </p>
                      <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{researchProfile.typicalPlacement}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-3 sm:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {t('driverAction', 'Expected Driver Action')}
                      </p>
                      <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{researchProfile.driverAction}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t('placementStandards', 'Placement Standards')}
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {researchProfile.placementStandards.map((standard, index) => (
                        <li key={`${standard.slice(0, 24)}-${index}`}>{standard}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t('referenceSources', 'Reference Sources')}
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                      {researchProfile.sources.map((source) => (
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
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('detailedGuidance', 'Detailed Guidance')}
            </h2>
            <article className="space-y-4">{contentItems.map(renderContent)}</article>
          </div>
        </article>
      </div>
    </div>
  );
}
