'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';

const TRANSLATABLE_ATTRIBUTES = ['alt', 'aria-label', 'placeholder', 'title'];
const SKIP_TAGS = new Set([
  'CODE',
  'IFRAME',
  'NOSCRIPT',
  'PRE',
  'SCRIPT',
  'STYLE',
  'SVG',
  'TEXTAREA',
]);

function hasLetters(value) {
  return /\p{L}/u.test(value);
}

function shouldTranslate(value) {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (!hasLetters(trimmed)) return false;
  return true;
}

function withOriginalSpacing(original, translated) {
  if (typeof original !== 'string' || typeof translated !== 'string') {
    return translated;
  }

  const leading = original.match(/^\s*/)?.[0] || '';
  const trailing = original.match(/\s*$/)?.[0] || '';
  return `${leading}${translated.trim()}${trailing}`;
}

function shouldSkipElement(element) {
  if (!element) return true;
  if (SKIP_TAGS.has(element.tagName)) return true;
  if (element.closest('[data-no-translate="true"]')) return true;
  if (element.closest('code, pre, script, style, textarea, [contenteditable="true"]')) return true;
  return false;
}

function collectTranslatableNodes(root, originalTextRef, originalAttrRef) {
  const textEntries = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);

  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    if (parent && !shouldSkipElement(parent)) {
      if (!originalTextRef.current.has(node)) {
        originalTextRef.current.set(node, node.nodeValue || '');
      }

      const original = originalTextRef.current.get(node);
      if (shouldTranslate(original)) {
        textEntries.push({ node, original });
      }
    }
    node = walker.nextNode();
  }

  const attrEntries = [];
  const elements = root.querySelectorAll('*');

  elements.forEach((element) => {
    if (shouldSkipElement(element)) return;

    TRANSLATABLE_ATTRIBUTES.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;

      let elementMap = originalAttrRef.current.get(element);
      if (!elementMap) {
        elementMap = new Map();
        originalAttrRef.current.set(element, elementMap);
      }

      if (!elementMap.has(attribute)) {
        elementMap.set(attribute, element.getAttribute(attribute) || '');
      }

      const original = elementMap.get(attribute);
      if (!shouldTranslate(original)) return;

      attrEntries.push({ attribute, element, original });
    });
  });

  return { textEntries, attrEntries };
}

function restoreOriginalContent(root, originalTextRef, originalAttrRef) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);

  let node = walker.nextNode();
  while (node) {
    if (originalTextRef.current.has(node)) {
      const original = originalTextRef.current.get(node);
      if (typeof original === 'string' && node.nodeValue !== original) {
        node.nodeValue = original;
      }
    }
    node = walker.nextNode();
  }

  const elements = root.querySelectorAll('*');
  elements.forEach((element) => {
    const elementMap = originalAttrRef.current.get(element);
    if (!elementMap) return;

    elementMap.forEach((originalValue, attribute) => {
      if (typeof originalValue !== 'string') return;
      if (element.getAttribute(attribute) !== originalValue) {
        element.setAttribute(attribute, originalValue);
      }
    });
  });
}

export default function GlobalTranslator() {
  const pathname = usePathname();
  const { resolvedLanguage, translateBatch } = useLanguage();

  const originalTextRef = useRef(new WeakMap());
  const originalAttrRef = useRef(new WeakMap());
  const titleByPathRef = useRef(new Map());
  const timerRef = useRef(null);
  const applyingRef = useRef(false);
  const suppressObserverUntilRef = useRef(0);

  useEffect(() => {
    if (typeof document === 'undefined' || !document.body) {
      return undefined;
    }

    const pathKey = pathname || '/';

    const applyTranslations = async () => {
      if (!document.body || applyingRef.current) return;

      applyingRef.current = true;
      suppressObserverUntilRef.current = Date.now() + 300;

      try {
        const currentTitle = document.title || '';
        if (resolvedLanguage === 'en' || !titleByPathRef.current.has(pathKey)) {
          titleByPathRef.current.set(pathKey, currentTitle);
        }

        if (resolvedLanguage === 'en') {
          restoreOriginalContent(document.body, originalTextRef, originalAttrRef);
          const originalTitle = titleByPathRef.current.get(pathKey);
          if (typeof originalTitle === 'string' && originalTitle.length > 0) {
            document.title = originalTitle;
          }
          document.documentElement.lang = 'en';
          return;
        }

        const { textEntries, attrEntries } = collectTranslatableNodes(
          document.body,
          originalTextRef,
          originalAttrRef
        );

        const titleSource = titleByPathRef.current.get(pathKey) || currentTitle;

        const originals = [...new Set(
          [
            ...textEntries.map((entry) => entry.original.trim()),
            ...attrEntries.map((entry) => entry.original.trim()),
            titleSource.trim(),
          ].filter((value) => shouldTranslate(value))
        )];

        if (originals.length === 0) {
          document.documentElement.lang = resolvedLanguage;
          return;
        }

        const translations = await translateBatch(originals);

        textEntries.forEach(({ node, original }) => {
          const key = original.trim();
          const translated = translations[key];
          if (!translated || !shouldTranslate(translated)) return;

          const nextValue = withOriginalSpacing(original, translated);
          if (node.nodeValue !== nextValue) {
            node.nodeValue = nextValue;
          }
        });

        attrEntries.forEach(({ attribute, element, original }) => {
          const key = original.trim();
          const translated = translations[key];
          if (!translated || !shouldTranslate(translated)) return;
          if (element.getAttribute(attribute) !== translated) {
            element.setAttribute(attribute, translated);
          }
        });

        if (shouldTranslate(titleSource)) {
          const titleKey = titleSource.trim();
          const translatedTitle = translations[titleKey];
          if (translatedTitle && document.title !== translatedTitle) {
            document.title = translatedTitle;
          }
        }

        document.documentElement.lang = resolvedLanguage;
      } finally {
        applyingRef.current = false;
        suppressObserverUntilRef.current = Date.now() + 250;
      }
    };

    const scheduleApply = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        applyTranslations().catch(() => {});
      }, 90);
    };

    scheduleApply();

    const observer = new MutationObserver((mutations) => {
      if (Date.now() < suppressObserverUntilRef.current) return;
      if (applyingRef.current) return;

      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') {
          const textNode = mutation.target;
          const parent = textNode.parentElement;
          if (!parent || shouldSkipElement(parent)) return;
          // Preserve the first-seen value as the source text.
          // Overwriting this on translated mutations causes language switching glitches.
          if (!originalTextRef.current.has(textNode)) {
            originalTextRef.current.set(textNode, textNode.nodeValue || '');
          }
          return;
        }

        if (mutation.type === 'attributes') {
          const element = mutation.target;
          const attribute = mutation.attributeName;
          if (!attribute || !TRANSLATABLE_ATTRIBUTES.includes(attribute)) return;
          if (shouldSkipElement(element)) return;

          let elementMap = originalAttrRef.current.get(element);
          if (!elementMap) {
            elementMap = new Map();
            originalAttrRef.current.set(element, elementMap);
          }

          if (!elementMap.has(attribute)) {
            elementMap.set(attribute, element.getAttribute(attribute) || '');
          }
        }
      });

      const hasRelevantMutation = mutations.some((mutation) => {
        if (mutation.type === 'childList') return true;
        if (mutation.type === 'characterData') return true;
        if (mutation.type === 'attributes') {
          return TRANSLATABLE_ATTRIBUTES.includes(mutation.attributeName || '');
        }
        return false;
      });

      if (hasRelevantMutation) {
        scheduleApply();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRIBUTES,
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [pathname, resolvedLanguage, translateBatch]);

  return null;
}
