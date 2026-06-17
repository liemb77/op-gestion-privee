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

export default function ServicesPage() {
  const { lang } = useLang();
  const T = t[lang];

  return (
    <>
      {/* Header */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(/gallery/lac-louise.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          minHeight: '60vh',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(175deg, rgba(12,27,46,0.05) 0%, rgba(12,27,46,0.65) 100%)' }} />
        <div className="relative max-w-6xl mx-auto px-8 pb-12 w-full">
          <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-3">Olivier Pastorel</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-medium leading-tight">
            {T.services.pageTitle}
          </h1>
          <p className="text-white/55 mt-3 max-w-lg text-sm font-light">{T.services.pageSub}</p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-8 py-20 md:py-28">
        {T.services.items.map((service, i) => (
          <AnimFade key={service.id} delay={0}>
            <div
              id={service.id}
              className={`scroll-mt-24 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 py-14 ${
                i < T.services.items.length - 1 ? 'border-b border-[#E7E5E0]' : ''
              }`}
            >
              {/* Number + title */}
              <div className="flex flex-col gap-4">
                <span className="font-serif text-5xl font-bold text-[#1C1917]/[0.07] leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#1C1917] font-medium leading-tight">
                  {service.title}
                </h2>
                <div className="w-6 h-[1px] bg-[#C4A35A]" />
              </div>

              {/* Body */}
              <div>
                <p className="font-serif italic text-[#1C1917] text-lg leading-relaxed mb-6">
                  {service.short}
                </p>
                <div className="text-[#78716C] text-sm leading-relaxed whitespace-pre-line font-light">
                  {service.body}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.2em] uppercase text-[#1C1917] hover:text-[#C4A35A] group transition-colors cursor-pointer font-medium"
                >
                  {lang === 'fr' ? 'Discuter de ce service' : 'Discuss this service'}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimFade>
        ))}
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundImage: 'url(/gallery/mont-blanc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '480px' }}>
        <div className="absolute inset-0 bg-[#0C1B2E]/25" />
        <div className="relative max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimFade>
            <h2 className="font-serif text-2xl md:text-3xl text-white font-medium">{T.services.ctaTitle}</h2>
            <p className="text-white/50 mt-2 text-sm font-light">{T.services.ctaText}</p>
          </AnimFade>
          <Link
            href="/contact"
            className="shrink-0 bg-[#C4A35A] text-[#1C1917] text-[11px] tracking-[0.2em] uppercase px-8 py-4 font-semibold hover:bg-[#D4B87A] transition-colors cursor-pointer"
          >
            {T.services.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
