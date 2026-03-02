'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from './TranslationContext';

export default function T({ children, className = '' }) {
  const { language, translateText } = useTranslation();
  const [translated, setTranslated] = useState(children);

  useEffect(() => {
    if (typeof children === 'string') {
      translateText(children).then(setTranslated);
    }
  }, [children, language]);

  return <span className={className}>{translated}</span>;
}
