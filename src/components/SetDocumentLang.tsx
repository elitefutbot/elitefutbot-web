'use client';

import { useEffect } from 'react';

interface SetDocumentLangProps {
  lang: string;
}

export default function SetDocumentLang({ lang }: SetDocumentLangProps) {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

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

