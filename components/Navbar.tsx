'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { useScrolled } from '@/hooks/useScrolled';
import { t } from '@/lib/translations';

export default function Navbar() {
  const { lang } = useLang();
  const scrolled = useScrolled(60);
  const T = t[lang].nav;
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: T.home },
    { href: '/a-propos', label: T.about },
    { href: '/services', label: T.services },
    { href: '/contact', label: T.contact },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ${
          scrolled
            ? 'top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'top-4 left-4 right-4'
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 h-16 transition-all duration-500 ${
            scrolled ? 'max-w-none mx-0' : 'max-w-none mx-0 bg-black/20 backdrop-blur-sm border border-white/10'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 bg-[#C4A35A] flex items-center justify-center shrink-0">
              <span className="font-serif text-[#1C1917] text-xs font-bold tracking-[0.2em]">OP</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-serif text-sm font-semibold leading-none tracking-wide transition-colors duration-500 ${scrolled ? 'text-[#1C1917]' : 'text-white'}`}>
                Olivier Pastorel
              </p>
              <div className={`mt-0.5 transition-colors duration-500 ${scrolled ? 'text-[#78716C]' : 'text-white/60'}`}>
                <p className="text-[9px] leading-none tracking-[0.12em] uppercase">Gestion Financière Stratégique</p>
                <p className="text-[9px] leading-none tracking-[0.12em] uppercase mt-[3px]">Strategic Financial Management</p>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-light tracking-[0.08em] transition-colors duration-300 cursor-pointer ${
                  scrolled ? 'text-[#1C1917] hover:text-[#C4A35A]' : 'text-white/90 hover:text-[#C4A35A]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`text-right transition-colors duration-500 ${scrolled ? 'text-[#78716C]' : 'text-white/60'}`}>
              <p className="text-[9px] leading-none tracking-[0.12em] uppercase font-light">Gestion Financière Stratégique</p>
              <p className="text-[9px] leading-none tracking-[0.12em] uppercase font-light mt-[3px]">Strategic Financial Management</p>
            </div>
            <a
              href="https://investisseurweb.groupecloutierinvestissement.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 font-semibold transition-colors duration-200 ${scrolled ? 'bg-[#C4A35A] text-[#1C1917] hover:bg-[#D4B87A]' : 'border border-white/30 text-white hover:bg-white/10'}`}
            >
              {lang === 'fr' ? 'Connexion Cloutier' : 'Cloutier Login'}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 cursor-pointer ${scrolled ? 'text-[#1C1917]' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1C1917] transition-all duration-500 flex flex-col ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 gap-2 mt-16">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl text-white/90 hover:text-[#C4A35A] transition-colors py-3 border-b border-white/10 cursor-pointer"
              style={{ transitionDelay: open ? `${i * 80}ms` : '0ms' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="px-8 pb-12 flex flex-col items-start gap-3">
          <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase">
            {lang === 'fr' ? 'Gestion Financière Stratégique' : 'Strategic Financial Management'}
          </p>
          <a
            href="https://investisseurweb.groupecloutierinvestissement.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#C4A35A] text-[#1C1917] text-xs tracking-[0.15em] uppercase px-6 py-3 font-semibold"
          >
            {lang === 'fr' ? 'Connexion Cloutier' : 'Cloutier Login'}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
