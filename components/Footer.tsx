'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function Footer() {
  const { lang } = useLang();
  const T = t[lang];

  const links = [
    { href: '/', label: T.nav.home },
    { href: '/a-propos', label: T.nav.about },
    { href: '/services', label: T.nav.services },
    { href: '/contact', label: T.nav.contact },
  ];

  return (
    <footer className="bg-[#111110] text-white">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#C4A35A] flex items-center justify-center shrink-0">
                <span className="font-serif text-[#1C1917] text-xs font-bold tracking-[0.2em]">OP</span>
              </div>
              <div>
                <p className="font-serif text-sm text-white font-semibold leading-none">Olivier Pastorel</p>
                <p className="text-white/35 text-[10px] leading-none mt-1 tracking-[0.15em] uppercase">
                  {lang === 'fr' ? 'Gestion de patrimoine' : 'Wealth Management'}
                </p>
              </div>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed">{T.footer.tagline}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5">{T.footer.quickLinks}</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 text-sm font-light hover:text-[#C4A35A] transition-colors duration-200 cursor-pointer">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5">{T.footer.contactInfo}</p>
            <address className="not-italic space-y-3 text-sm text-white/55 font-light">
              <p className="leading-relaxed">1-45 rue Rémi Dansereau<br />Beloeil, QC J3G 0N6</p>
              <p><a href="tel:5144432335" className="hover:text-[#C4A35A] transition-colors cursor-pointer">514 443-2335</a></p>
              <p><a href="mailto:olivier.pastorel@opgestionprivee.ca" className="hover:text-[#C4A35A] transition-colors cursor-pointer break-all">olivier.pastorel@opgestionprivee.ca</a></p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">{T.footer.rights}</p>
          <p className="text-white/15 text-xs tracking-wide">opgestionprivee.ca</p>
        </div>
      </div>
    </footer>
  );
}
