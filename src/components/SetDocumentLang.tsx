'use client';

import { useEffect } from 'react';
import { getLocaleEntry } from '@/data/locales/registry';

interface SetDocumentLangProps {
  /** Route locale prefix (e.g. "pt", "es-mx") or a BCP 47 code. */
  lang: string;
}

export default function SetDocumentLang({ lang: localeKey }: SetDocumentLangProps) {
  // Map the URL prefix to its BCP 47 tag so <html lang> matches the page's
  // hreflang (e.g. "pt" -> "pt-BR", "es-mx" -> "es-MX").
  const entry = getLocaleEntry(localeKey);
  const lang = entry?.hreflang ?? localeKey;
  const dir = entry?.direction ?? (localeKey === 'ar' ? 'rtl' : 'ltr');

  useEffect(() => {
    if (typeof document !== 'undefined' && lang) {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang = ${JSON.stringify(lang)}; document.documentElement.dir = ${JSON.stringify(dir)};`,
      }}
    />
  );
}
