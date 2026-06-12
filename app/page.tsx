'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/useInView';
import { t } from '@/lib/translations';
import { ReactNode, ReactElement, useEffect, useState } from 'react';
import type { Lang } from '@/contexts/LanguageContext';

// TODO: Replace with Olivier's real Cal.com booking link when ready
const BOOKING_URL = '/contact';

// ─── Data ─────────────────────────────────────────────────────────────────────

const WHY_US = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: { fr: 'Indépendant et objectif', en: 'Independent & Objective' },
    desc: {
      fr: "Nos conseils sont entièrement impartiaux. Aucun produit exclusif à promouvoir — seulement les meilleures solutions pour votre situation.",
      en: "Our advice is entirely impartial. No proprietary products to push — only the best solutions for your situation.",
    },
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: { fr: 'Vision financière globale', en: 'Comprehensive Financial Vision' },
    desc: {
      fr: "Cinq domaines d'expertise réunis sous un seul conseiller : investissement, retraite, assurances, fiscalité et succession. Une vision cohérente, sans angle mort.",
      en: "Five areas of expertise under one advisor: investment, retirement, insurance, tax, and estate. A coherent vision with no blind spots.",
    },
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: { fr: 'Service bilingue', en: 'Bilingual Service' },
    desc: {
      fr: "Nous offrons un service professionnel complet en français et en anglais, adapté à la réalité québécoise.",
      en: "We offer a complete professional service in both French and English, adapted to the Quebec reality.",
    },
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: { fr: 'Réglementé par l\'AMF', en: 'AMF Regulated' },
    desc: {
      fr: "Inscrit auprès de l'Autorité des marchés financiers du Québec. Vous bénéficiez de toutes les protections prévues par la loi.",
      en: "Registered with the Autorité des marchés financiers du Québec. You benefit from all protections provided by law.",
    },
  },
];

const APPROACH = [
  {
    title: { fr: 'Rencontre initiale', en: 'Initial Meeting' },
    desc: { fr: 'Nous commençons par une conversation approfondie pour comprendre votre situation, vos objectifs de vie et vos valeurs — sans engagement.', en: 'We start with an in-depth conversation to understand your situation, life goals, and values — with no obligation.' },
  },
  {
    title: { fr: 'Stratégie personnalisée', en: 'Personalized Strategy' },
    desc: { fr: "Nous élaborons une stratégie financière globale et cohérente, entièrement adaptée à votre réalité — investissement, fiscalité, retraite et succession.", en: 'We develop a comprehensive financial strategy, fully tailored to your reality — investment, tax, retirement, and estate.' },
  },
  {
    title: { fr: 'Mise en œuvre et suivi', en: 'Implementation & Monitoring' },
    desc: { fr: "Nous déployons votre plan et effectuons un suivi rigoureux pour l'adapter à l'évolution de votre vie et des marchés.", en: 'We deploy your plan and perform rigorous monitoring to adapt it as your life and markets evolve.' },
  },
];

const STATS = [
  { value: 5,  suffix: '',  label: { fr: "Domaines d'expertise", en: 'Areas of expertise' } },
  { value: 3,  suffix: '',  label: { fr: "Étapes d'accompagnement", en: 'Steps in our process' } },
  { value: 15, suffix: '+', label: { fr: 'Partenaires assureurs', en: 'Insurance partners' } },
  { value: 3,  suffix: '',  label: { fr: 'Professionnels dédiés', en: 'Dedicated professionals' } },
];

const TESTIMONIALS = [
  {
    quote: { fr: "Je recommande les services d'Olivier Pastorel. J'ai fait affaire avec lui suite à un héritage et je ne suis pas déçu. L'accompagnement est personnalisé et adapté à nos besoins. On n'est pas seulement un numéro et l'offre complète de services financiers a permis de répondre de façon optimisée à tous nos besoins en ayant une vision claire pour atteindre nos objectifs.", en: "" },
    name: 'Simon Langlois',
    role: { fr: '', en: '' },
  },
  {
    quote: { fr: "Travailler avec Olivier Pastorel, c'est prendre ce qu'on a de précieux, nos finances, pour en faire un projet à notre mesure. C'est recevoir des conseils, avoir des options et sentir qu'au final, on a le choix. Le tout dans un sentiment de sécurité, de respect et de convivialité.", en: "" },
    name: 'Marie-Hélène Ladouceur Parent',
    role: { fr: '', en: '' },
  },
];

const FAQ_ITEMS = [
  {
    q: { fr: 'À qui s\'adressent vos services?', en: 'Who are your services for?' },
    a: { fr: 'Nos services s\'adressent aux familles, professionnels, entrepreneurs et retraités qui souhaitent une gestion rigoureuse et personnalisée de leur patrimoine. Que vous débutiez votre parcours financier ou que vous ayez un patrimoine établi, nous vous accompagnons à chaque étape.', en: 'Our services are for families, professionals, entrepreneurs, and retirees who want rigorous and personalized wealth management. Whether you are starting your financial journey or have an established portfolio, we guide you at every step.' },
  },
  {
    q: { fr: 'Comment se déroule la première rencontre?', en: 'How does the first meeting work?' },
    a: { fr: 'La première rencontre est gratuite et sans engagement. Elle dure environ 45 à 60 minutes et nous permet de mieux comprendre votre situation, vos objectifs et vos préoccupations. Aucun document n\'est requis — juste une conversation honnête.', en: 'The first meeting is free and without obligation. It lasts about 45 to 60 minutes and allows us to better understand your situation, goals, and concerns. No documents required — just an honest conversation.' },
  },
  {
    q: { fr: 'Êtes-vous indépendant d\'une banque ou d\'un assureur?', en: 'Are you independent from a bank or insurer?' },
    a: { fr: 'Oui, totalement. Nous ne sommes rattachés à aucune institution financière. Cela nous permet de vous recommander les produits et solutions qui correspondent réellement à votre situation, sans conflit d\'intérêt.', en: 'Yes, completely. We are not affiliated with any financial institution. This allows us to recommend products and solutions that truly fit your situation, without conflict of interest.' },
  },
  {
    q: { fr: 'Comment sont calculés vos honoraires?', en: 'How are your fees calculated?' },
    a: { fr: 'Nos honoraires varient selon la complexité de votre situation et les services requis. Ils sont toujours discutés et convenus clairement lors de la première rencontre, sans surprise. La transparence est au cœur de notre approche.', en: 'Our fees vary depending on the complexity of your situation and services required. They are always clearly discussed and agreed upon at the first meeting, with no surprises. Transparency is at the heart of our approach.' },
  },
  {
    q: { fr: 'Faut-il avoir un patrimoine important pour faire appel à vous?', en: 'Do I need significant assets to work with you?' },
    a: { fr: 'Non. Nous accueillons des clients à différentes étapes de leur vie financière. Ce qui compte, c\'est votre volonté de planifier et de construire un avenir solide — peu importe où vous en êtes aujourd\'hui.', en: 'No. We welcome clients at different stages of their financial lives. What matters is your willingness to plan and build a solid future — regardless of where you are today.' },
  },
];

const PARTNERS = [
  'Manuvie', 'Canada Vie', 'Équitable', 'Union Vie', 'Empire', 'Sun Life',
  'Industrielle Alliance', 'Humania', 'Assomption', 'RBC Assurances',
  'BMO Assurances', 'Beneva', 'Croix Bleue', 'Ivari', 'Securiglobe',
];

const serviceIcons: Record<string, ReactElement> = {
  investissement: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" /></svg>),
  retraite: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
  risques: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>),
  fiscal: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>),
  succession: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimFade({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)', transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(Math.round((end * current) / 60));
      if (current >= 60) clearInterval(timer);
    }, 1600 / 60);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <div ref={ref}>{count}{suffix}</div>;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E7E5E0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="font-serif text-lg md:text-xl text-[#1C1917] font-medium pr-8 group-hover:text-[#C4A35A] transition-colors duration-200">
          {question}
        </span>
        <svg
          className={`w-4 h-4 text-[#C4A35A] shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p className="text-[#78716C] text-sm font-light leading-relaxed pb-6 pr-8">{answer}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const { lang } = useLang();
  const T = t[lang];
  const l = lang as Lang;

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2560&q=90)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(175deg, rgba(12,27,46,0.4) 0%, rgba(12,27,46,0.68) 45%, rgba(12,27,46,0.97) 100%)' }} />
        <div className="relative w-full max-w-6xl mx-auto px-8 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <p className="hero-fade delay-200 text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-5 font-light">OP Gestion Privée &nbsp;·&nbsp; Beloeil, Québec</p>
            <div className="hero-fade delay-400 h-[1px] bg-[#C4A35A] mb-7" style={{ width: '3rem' }} />
            <h1 className="hero-animate delay-400 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.05] mb-7">
              {lang === 'fr' ? <>Exploitez tout le potentiel<br className="hidden sm:block" /> de votre patrimoine.</> : <>Unlock the full potential<br className="hidden sm:block" /> of your wealth.</>}
            </h1>
            <p className="hero-animate delay-600 text-white/65 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10">
              {lang === 'fr' ? 'Solutions intégrées en investissement, retraite, fiscalité et planification successorale.' : 'Integrated solutions in investment, retirement, tax planning, and estate management.'}
            </p>
            <div className="hero-animate delay-800 flex flex-wrap gap-4">
              <Link href={BOOKING_URL} className="inline-block bg-[#C4A35A] text-[#1C1917] text-[11px] tracking-[0.2em] uppercase px-8 py-4 font-semibold hover:bg-[#D4B87A] transition-colors duration-200 cursor-pointer">
                {lang === 'fr' ? 'Consultation gratuite' : 'Free Consultation'}
              </Link>
              <Link href="/services" className="inline-block border border-white/30 text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 font-light hover:border-white/70 hover:bg-white/5 transition-all duration-200 cursor-pointer">
                {T.home.heroCtaSecondary}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 hero-fade delay-1000">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase rotate-90 mb-4">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/0 to-white/30" />
        </div>
      </section>

      {/* ─── PARTNERS STRIP ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E7E5E0]">
        <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
            <span className="text-[#78716C] text-[10px] tracking-[0.35em] uppercase shrink-0">Partenaires assureurs</span>
            <div className="w-[1px] h-4 bg-[#E7E5E0] hidden sm:block" />
            {PARTNERS.map((p, i) => (
              <span key={p} className={`text-xs tracking-wide font-light ${i % 2 === 0 ? 'text-[#78716C]/70' : 'text-[#78716C]/50'}`}>{p}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center border-t border-[#E7E5E0] pt-3">
            <span className="text-[#78716C] text-[10px] tracking-[0.35em] uppercase shrink-0">Épargne collective</span>
            <div className="w-[1px] h-4 bg-[#E7E5E0] hidden sm:block" />
            <a
              href="#"
              className="text-xs tracking-wide font-light text-[#C4A35A] hover:text-[#1C1917] transition-colors duration-200 flex items-center gap-1.5"
            >
              Cloutier Groupe Financier
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
            <span className="text-[#78716C]/50 text-[10px]">— Connexion investisseurs</span>
          </div>
        </div>
      </section>

      {/* ─── POURQUOI NOUS CHOISIR (dark section — breaks visual monotony) ── */}
      <section className="bg-[#1C1917] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Left */}
            <AnimFade>
              <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-4">
                {lang === 'fr' ? 'Nos engagements' : 'Our Commitments'}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-medium leading-tight mb-6">
                {lang === 'fr' ? <>Pourquoi choisir<br />Olivier Pastorel?</> : <>Why choose<br />Olivier Pastorel?</>}
              </h2>
              <div className="w-8 h-[1px] bg-[#C4A35A] mb-6" />
              <p className="text-white/50 text-sm font-light leading-relaxed max-w-sm mb-10">
                {lang === 'fr'
                  ? "Parce qu'un bon conseiller ne se contente pas de gérer vos actifs — il comprend votre vie, anticipe vos besoins et vous accompagne dans la durée."
                  : "Because a good advisor doesn't just manage your assets — they understand your life, anticipate your needs, and support you over time."}
              </p>
              <Link
                href={BOOKING_URL}
                className="inline-block bg-[#C4A35A] text-[#1C1917] text-[11px] tracking-[0.2em] uppercase px-8 py-4 font-semibold hover:bg-[#D4B87A] transition-colors duration-200 cursor-pointer"
              >
                {lang === 'fr' ? 'Consultation gratuite' : 'Free Consultation'}
              </Link>
            </AnimFade>

            {/* Right — 4 features */}
            <div className="space-y-0 divide-y divide-white/[0.07]">
              {WHY_US.map((item, i) => (
                <AnimFade key={i} delay={i * 100}>
                  <div className="flex gap-5 py-7 group">
                    <div className="text-[#C4A35A] mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-serif text-lg text-white font-medium mb-1.5 group-hover:text-[#C4A35A] transition-colors duration-200">
                        {item.title[l]}
                      </h3>
                      <p className="text-white/45 text-sm font-light leading-relaxed">{item.desc[l]}</p>
                    </div>
                  </div>
                </AnimFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────────── */}
      <section className="bg-[#F9F8F4] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <AnimFade>
            <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-4">Expertise</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917] font-medium leading-tight max-w-sm">{T.home.servicesTitle}</h2>
              <p className="text-[#78716C] max-w-xs text-sm leading-relaxed font-light">{T.home.servicesSub}</p>
            </div>
          </AnimFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E7E5E0]">
            {T.services.items.map((service, i) => (
              <AnimFade key={service.id} delay={i * 80}>
                <Link href={`/services#${service.id}`} className="group relative bg-[#F9F8F4] p-8 md:p-10 overflow-hidden flex flex-col gap-5 hover:bg-white transition-colors duration-300 cursor-pointer h-full">
                  <span className="absolute top-5 right-6 font-serif text-8xl font-bold text-[#1C1917]/[0.04] select-none pointer-events-none leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <div className="text-[#C4A35A]">{serviceIcons[service.id]}</div>
                  <h3 className="font-serif text-xl md:text-2xl text-[#1C1917] font-medium leading-tight">{service.title}</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed font-light flex-1">{service.short}</p>
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#1C1917] group-hover:text-[#C4A35A] transition-colors duration-200">
                    {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C4A35A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTRE APPROCHE ──────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <AnimFade>
            <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-4">{lang === 'fr' ? 'Notre approche' : 'Our approach'}</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917] font-medium leading-tight max-w-sm">
                {lang === 'fr' ? 'Une méthode claire, une vision durable.' : 'A clear method, a lasting vision.'}
              </h2>
              <p className="text-[#78716C] max-w-xs text-sm font-light leading-relaxed">
                {lang === 'fr' ? 'Chaque mandat suit le même processus rigoureux pour garantir des résultats alignés sur vos objectifs.' : 'Every mandate follows the same rigorous process to ensure results aligned with your goals.'}
              </p>
            </div>
          </AnimFade>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E7E5E0]">
            {APPROACH.map((step, i) => (
              <AnimFade key={i} delay={i * 150}>
                <div className={`p-10 md:p-12 flex flex-col gap-5 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-[#E7E5E0]' : ''}`}>
                  <span className="font-serif text-6xl font-bold text-[#C4A35A]/15 leading-none select-none">0{i + 1}</span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#1C1917] font-medium leading-tight">{step.title[l]}</h3>
                  <div className="w-6 h-[1px] bg-[#C4A35A]" />
                  <p className="text-[#78716C] text-sm font-light leading-relaxed">{step.desc[l]}</p>
                </div>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY QUOTE ────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0C1B2E 0%, #1C1917 100%)' }}>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-serif text-[20rem] font-bold text-white/[0.025] leading-none">OP</span>
        </div>
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <AnimFade>
            <span className="block font-serif text-8xl text-[#C4A35A]/40 leading-none mb-4 -mt-6">"</span>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium italic leading-snug mb-8">
              {lang === 'fr' ? "Exploitez tout le potentiel de votre patrimoine à l'aide de nos solutions intégrées." : "Unlock the full potential of your wealth through our integrated solutions."}
            </blockquote>
            <div className="w-10 h-[1px] bg-[#C4A35A] mx-auto mb-5" />
            <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase">Olivier Pastorel</p>
          </AnimFade>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────────────── */}
      <section className="bg-[#F9F8F4] border-b border-[#E7E5E0]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E7E5E0]">
            {STATS.map((stat, i) => (
              <AnimFade key={i} delay={i * 100}>
                <div className="flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
                  <div className="font-serif text-5xl md:text-6xl font-medium text-[#1C1917] leading-none">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[#78716C] text-[10px] tracking-[0.2em] uppercase font-light leading-relaxed max-w-[120px]">{stat.label[l]}</p>
                </div>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <AnimFade>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C4A35A]/40 z-0" />
              <div className="relative z-10 aspect-[3/4] overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=85)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1917]/80 to-transparent p-6">
                  <p className="font-serif text-white text-lg">Olivier Pastorel</p>
                  <p className="text-white/60 text-[11px] tracking-[0.15em] uppercase mt-0.5">{lang === 'fr' ? 'Conseiller en sécurité financière' : 'Financial Security Advisor'}</p>
                </div>
              </div>
            </div>
          </AnimFade>
          <AnimFade delay={200}>
            <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-4">{lang === 'fr' ? 'À propos' : 'About'}</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1917] font-medium leading-tight mb-6">{T.home.aboutTitle}</h2>
            <div className="space-y-1.5 mb-6 pl-4 border-l border-[#C4A35A]/40">
              {t[lang].about.olivierTitles.map((title) => (<p key={title} className="text-[#78716C] text-sm italic font-serif">{title}</p>))}
            </div>
            <p className="text-[#78716C] leading-relaxed text-sm font-light mb-8">{T.home.aboutText}</p>
            <Link href="/a-propos" className="inline-flex items-center gap-3 text-[#1C1917] text-[11px] tracking-[0.2em] uppercase font-medium group cursor-pointer">
              <span className="border-b border-[#1C1917] group-hover:border-[#C4A35A] group-hover:text-[#C4A35A] transition-colors duration-200 pb-0.5">{T.home.aboutCta}</span>
              <svg className="w-4 h-4 group-hover:text-[#C4A35A] group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </AnimFade>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="bg-[#F9F8F4] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <AnimFade className="mb-14">
            <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-4">{lang === 'fr' ? 'Témoignages' : 'Testimonials'}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917] font-medium leading-tight">{lang === 'fr' ? 'Ce que disent nos clients.' : 'What our clients say.'}</h2>
          </AnimFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {TESTIMONIALS.map((testimonial, i) => (
              <AnimFade key={i} delay={i * 120}>
                <div className="bg-white border border-[#E7E5E0] p-8 md:p-10 flex flex-col gap-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-[#C4A35A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <blockquote className="font-serif italic text-[#1C1917] text-lg leading-relaxed flex-1">"{testimonial.quote[l]}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-[#C4A35A]" />
                    <div>
                      <p className="text-[#1C1917] text-sm font-medium">{testimonial.name}</p>
                      <p className="text-[#78716C] text-xs tracking-wide mt-0.5">{testimonial.role[l]}</p>
                    </div>
                  </div>
                </div>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24">
            <AnimFade>
              <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-4">FAQ</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917] font-medium leading-tight mb-6">
                {lang === 'fr' ? 'Vos questions, nos réponses.' : 'Your questions, our answers.'}
              </h2>
              <p className="text-[#78716C] text-sm font-light leading-relaxed mb-8">
                {lang === 'fr' ? "Une question? Voici les réponses aux demandes les plus fréquentes. Pour toute autre question, n'hésitez pas à nous contacter." : "A question? Here are answers to the most common inquiries. For anything else, feel free to contact us."}
              </p>
              <Link href={BOOKING_URL} className="inline-flex items-center gap-2 text-[#1C1917] text-[11px] tracking-[0.2em] uppercase font-medium group cursor-pointer">
                <span className="border-b border-[#1C1917] group-hover:border-[#C4A35A] group-hover:text-[#C4A35A] transition-colors duration-200 pb-0.5">
                  {lang === 'fr' ? 'Poser une question' : 'Ask a question'}
                </span>
                <svg className="w-4 h-4 group-hover:text-[#C4A35A] group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </AnimFade>

            <AnimFade delay={150}>
              <div>
                {FAQ_ITEMS.map((item, i) => (
                  <FAQItem key={i} question={item.q[l]} answer={item.a[l]} />
                ))}
              </div>
            </AnimFade>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=80)', backgroundSize: 'cover', backgroundPosition: 'center 60%', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-[#0C1B2E]/88" />
        <div className="relative max-w-6xl mx-auto px-8 text-center">
          <AnimFade>
            <p className="text-[#C4A35A] text-[11px] tracking-[0.35em] uppercase mb-4">{lang === 'fr' ? 'Commençons' : "Let's Begin"}</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-5 leading-tight max-w-2xl mx-auto">{T.home.ctaBannerTitle}</h2>
            <p className="text-white/50 mb-4 max-w-sm mx-auto text-sm font-light leading-relaxed">{T.home.ctaBannerText}</p>
            <p className="text-[#C4A35A]/70 text-xs tracking-wide mb-10">
              {lang === 'fr' ? '— Première rencontre gratuite, sans engagement —' : '— First meeting free, no obligation —'}
            </p>
            <Link href={BOOKING_URL} className="inline-block bg-[#C4A35A] text-[#1C1917] text-[11px] tracking-[0.2em] uppercase px-10 py-4 font-semibold hover:bg-[#D4B87A] transition-colors duration-200 cursor-pointer">
              {lang === 'fr' ? 'Réserver ma consultation gratuite' : 'Book My Free Consultation'}
            </Link>
          </AnimFade>
        </div>
      </section>
    </>
  );
}
