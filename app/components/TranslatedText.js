'use client';

import { useLanguage } from './LanguageContext';

export default function TranslatedText({ children, className = '' }) {
  const { t } = useLanguage();

  if (typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  return <span className={className}>{t(children, children)}</span>;
}
