'use client';

import AutoTranslate from '@/app/components/AutoTranslate';
import { useLanguage } from '@/app/components/LanguageContext';

export default function TranslationExample() {
  const { language } = useLanguage();

  return (
    <div className="p-8 space-y-6">
      <AutoTranslate 
        text="Welcome to Universal Translation" 
        as="h1" 
        className="text-4xl font-bold"
      />

      <AutoTranslate 
        text="This system automatically translates any text to your selected language." 
        as="p" 
        className="text-lg text-gray-600"
      />

      <div className="space-y-4">
        <AutoTranslate text="Current Language:" as="h2" className="text-2xl font-semibold" />
        <p className="text-xl">{language === 'en' ? 'English' : language === 'sw' ? 'Swahili' : 'Kikuyu'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <AutoTranslate text="Road Signs" as="h3" className="font-bold mb-2" />
          <AutoTranslate text="Learn all traffic signs" as="p" className="text-sm" />
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <AutoTranslate text="Practice Quiz" as="h3" className="font-bold mb-2" />
          <AutoTranslate text="Test your knowledge" as="p" className="text-sm" />
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <AutoTranslate t a ="Model Town" as="h3" className="font-bold mb-2" />
          <AutoTranslate text="Master the driving board" as="p" className="text-sm" />
        </div>
      </div>

      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <AutoTranslate text="Start Learning Now" />
      </button>
    </div>
  );
}
