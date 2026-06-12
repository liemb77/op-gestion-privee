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
              <p className={`text-[10px] leading-none mt-0.5 tracking-[0.15em] uppercase transition-colors duration-500 ${scrolled ? 'text-[#78716C]' : 'text-white/60'}`}>
                Gestion Financière Stratégique
              </p>
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
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/contact"
              className="bg-[#C4A35A] text-[#1C1917] text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 font-semibold hover:bg-[#D4B87A] transition-colors duration-200 cursor-pointer"
            >
              {T.cta}
            </Link>
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
        <div className="px-8 pb-12 flex items-center justify-end">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#C4A35A] text-[#1C1917] text-xs tracking-[0.15em] uppercase px-6 py-3 font-semibold cursor-pointer"
          >
            {T.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
