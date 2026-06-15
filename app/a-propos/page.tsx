'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { t } from '@/lib/translations';
import { ReactNode } from 'react';

function AnimFade({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const { lang } = useLang();
  const T = t[lang];

  return (
    <>
      {/* Page Header */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(/gallery/revelstoke.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(175deg, rgba(12,27,46,0.2) 0%, rgba(12,27,46,0.85) 100%)' }} />
        <div className="relative max-w-6xl mx-auto px-8 pb-12 w-full">
          <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-3">Olivier Pastorel</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-medium">{T.about.pageTitle}</h1>
        </div>
      </section>

      {/* Olivier */}
      <section className="max-w-6xl mx-auto px-8 py-24 md:py-32">
        <AnimFade className="mb-16">
          <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-2">{T.about.teamTitle}</p>
          <p className="text-[#78716C] text-sm font-light">{T.about.teamSub}</p>
        </AnimFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start mb-24">
          <AnimFade>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C4A35A]/30 z-0" />
              <div
                className="relative z-10 aspect-[3/4] max-w-sm overflow-hidden"
                style={{
                  backgroundImage: 'url(/gallery/olivier-pastorel.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              />
            </div>
          </AnimFade>

          <AnimFade delay={200} className="pt-4">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917] font-medium mb-3">
              {T.about.olivierTitle}
            </h2>
            <div className="space-y-1 mb-6 pl-4 border-l border-[#C4A35A]/40">
              {T.about.olivierTitles.map((title) => (
                <p key={title} className="text-[#78716C] text-sm italic font-serif">{title}</p>
              ))}
            </div>
            <div className="w-8 h-[1px] bg-[#C4A35A] mb-7" />
            <div className="space-y-5">
              {T.about.olivierBio.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#78716C] leading-relaxed text-sm font-light">{para}</p>
              ))}
            </div>
            <div className="mt-8 p-5 border-l-2 border-[#C4A35A] bg-[#F9F8F4]">
              <p className="text-sm mb-1.5">
                <a href="tel:5144432335" className="text-[#1C1917] font-medium hover:text-[#C4A35A] transition-colors cursor-pointer">
                  514 443-2335
                </a>
              </p>
              <p className="text-sm">
                <a href="mailto:olivier.pastorel@opgestionprivee.ca" className="text-[#1C1917] font-medium hover:text-[#C4A35A] transition-colors cursor-pointer">
                  olivier.pastorel@opgestionprivee.ca
                </a>
              </p>
            </div>
          </AnimFade>
        </div>

        {/* Aurelie */}
        <div className="border-t border-[#E7E5E0] pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <AnimFade delay={200} className="md:col-span-3 pt-2">
              <h3 className="font-serif text-3xl text-[#1C1917] font-medium mb-1">{T.about.aurelieTitle}</h3>
              <p className="text-[#78716C] text-sm italic font-serif mb-5">{T.about.aurelieRole}</p>
              <div className="w-6 h-[1px] bg-[#C4A35A] mb-5" />
              <div className="space-y-1.5 text-sm">
                <p><a href="tel:5143778143" className="text-[#1C1917] hover:text-[#C4A35A] transition-colors cursor-pointer">514 377-8143</a></p>
                <p><a href="mailto:aurelie.bellet@opgestionprivee.ca" className="text-[#1C1917] hover:text-[#C4A35A] transition-colors cursor-pointer">aurelie.bellet@opgestionprivee.ca</a></p>
              </div>
            </AnimFade>
          </div>
        </div>

        {/* Doris */}
        <div className="border-t border-[#E7E5E0] pt-16 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <AnimFade delay={200} className="md:col-span-3 pt-2">
              <h3 className="font-serif text-3xl text-[#1C1917] font-medium mb-1">Doris Longpré</h3>
              <p className="text-[#78716C] text-sm italic font-serif mb-5">Adjointe administrative</p>
              <div className="w-6 h-[1px] bg-[#C4A35A] mb-5" />
            </AnimFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundImage: 'url(/gallery/gasp-sunset.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <div className="absolute inset-0 bg-[#0C1B2E]/55" />
        <div className="relative max-w-6xl mx-auto px-8 text-center">
          <AnimFade>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-medium mb-4">{T.about.ctaTitle}</h2>
            <p className="text-white/50 mb-8 text-sm font-light">{T.about.ctaText}</p>
            <Link
              href="/contact"
              className="inline-block bg-[#C4A35A] text-[#1C1917] text-[11px] tracking-[0.2em] uppercase px-8 py-4 font-semibold hover:bg-[#D4B87A] transition-colors cursor-pointer"
            >
              {T.about.ctaBtn}
            </Link>
          </AnimFade>
        </div>
      </section>
    </>
  );
}
