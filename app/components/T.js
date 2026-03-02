'use client';

import { useLanguage } from './LanguageContext';

export default function T({ children, k, fallback }) {
  const { t } = useLanguage();
  
  if (k) {
    return t(k, fallback || children);
  }
  
  return children;
}