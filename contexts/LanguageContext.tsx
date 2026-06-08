'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'fr' | 'en';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangCtx>({ lang: 'fr', setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('op-lang');
    if (saved === 'en') setLang('en');
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('op-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
