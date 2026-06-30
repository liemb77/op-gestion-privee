'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';

const STORAGE_KEY = 'op-consent-status';

export default function CookieConsent() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setTimeout(() => setAnimIn(true), 10));
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  function dismiss(choice: 'accepted' | 'declined') {
    localStorage.setItem(STORAGE_KEY, choice);
    setAnimIn(false);
    setTimeout(() => setVisible(false), 400);
  }

  if (!visible) return null;

  const copy = {
    fr: {
      label: 'Confidentialité',
      body: 'Ce site collecte certaines données pour améliorer votre expérience. Consultez notre',
      link: 'politique de confidentialité',
      accept: 'Accepter',
      decline: 'Refuser',
    },
    en: {
      label: 'Privacy',
      body: 'This site collects certain data to improve your experience. Read our',
      link: 'privacy policy',
      accept: 'Accept',
      decline: 'Decline',
    },
  }[lang];

  return (
    <div
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
      style={{
        opacity: animIn ? 1 : 0,
        transform: animIn ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <div className="bg-[#111110] border-t-2 border-[#C4A35A] shadow-2xl p-6">
        <p className="text-[#C4A35A] text-[10px] tracking-[0.3em] uppercase mb-3">
          {copy.label}
        </p>
        <p className="text-white/60 text-sm font-light leading-relaxed mb-5">
          {copy.body}{' '}
          <Link
            href="/politique-de-confidentialite"
            className="text-white/80 underline underline-offset-2 hover:text-[#C4A35A] transition-colors"
          >
            {copy.link}
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => dismiss('accepted')}
            className="flex-1 bg-[#C4A35A] text-[#1C1917] text-[11px] tracking-[0.2em] uppercase font-semibold py-3 hover:bg-[#D4B87A] transition-colors cursor-pointer"
          >
            {copy.accept}
          </button>
          <button
            onClick={() => dismiss('declined')}
            className="flex-1 border border-white/20 text-white/50 text-[11px] tracking-[0.2em] uppercase font-light py-3 hover:border-white/40 hover:text-white/70 transition-colors cursor-pointer"
          >
            {copy.decline}
          </button>
        </div>
      </div>
    </div>
  );
}