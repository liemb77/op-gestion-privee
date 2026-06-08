'use client';
import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function ContactPage() {
  const { lang } = useLang();
  const T = t[lang].contact;
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  }

  return (
    <>
      {/* Page Header */}
      <section
        className="relative h-64 md:h-72 flex items-end"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-[#0C1B2E]/65" />
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="text-[#C4A35A] text-xs tracking-[0.3em] uppercase mb-2">OP Gestion Privée</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-medium">{T.pageTitle}</h1>
          <p className="text-white/60 mt-2">{T.pageSub}</p>
        </div>
      </section>

      {/* Contact Body */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-14">
        {/* Form */}
        <div>
          <h2 className="font-serif text-2xl text-[#162B4A] font-medium mb-8">{T.formTitle}</h2>

          {sent ? (
            <div className="p-8 bg-[#162B4A] text-white">
              <svg className="w-8 h-8 text-[#C4A35A] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-serif text-xl mb-2">{lang === 'fr' ? 'Message envoyé!' : 'Message sent!'}</p>
              <p className="text-white/70 text-sm">{T.submitSuccess}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#162B4A] text-xs tracking-wider uppercase mb-2 font-medium">
                    {T.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={T.namePlaceholder}
                    className="w-full px-4 py-3 border border-[#EDEBE4] bg-white text-[#0C1B2E] text-sm placeholder:text-[#5A6A7A]/50 focus:outline-none focus:border-[#162B4A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#162B4A] text-xs tracking-wider uppercase mb-2 font-medium">
                    {T.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={T.emailPlaceholder}
                    className="w-full px-4 py-3 border border-[#EDEBE4] bg-white text-[#0C1B2E] text-sm placeholder:text-[#5A6A7A]/50 focus:outline-none focus:border-[#162B4A] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#162B4A] text-xs tracking-wider uppercase mb-2 font-medium">
                  {T.phoneLabel}
                </label>
                <input
                  type="tel"
                  placeholder={T.phonePlaceholder}
                  className="w-full px-4 py-3 border border-[#EDEBE4] bg-white text-[#0C1B2E] text-sm placeholder:text-[#5A6A7A]/50 focus:outline-none focus:border-[#162B4A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#162B4A] text-xs tracking-wider uppercase mb-2 font-medium">
                  {T.messageLabel}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={T.messagePlaceholder}
                  className="w-full px-4 py-3 border border-[#EDEBE4] bg-white text-[#0C1B2E] text-sm placeholder:text-[#5A6A7A]/50 focus:outline-none focus:border-[#162B4A] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#162B4A] text-white text-xs tracking-wider uppercase px-8 py-4 font-semibold hover:bg-[#C4A35A] hover:text-[#0C1B2E] transition-colors disabled:opacity-60"
              >
                {loading ? '...' : T.submitBtn}
              </button>
            </form>
          )}
        </div>

        {/* Info Panel */}
        <div>
          <h2 className="font-serif text-2xl text-[#162B4A] font-medium mb-8">{T.infoTitle}</h2>
          <div className="space-y-8">
            <div>
              <p className="text-[#C4A35A] text-[10px] tracking-[0.3em] uppercase mb-3">
                {lang === 'fr' ? 'Adresse' : 'Address'}
              </p>
              <address className="not-italic text-[#5A6A7A] text-sm leading-relaxed whitespace-pre-line">
                {T.address}
              </address>
            </div>

            <div className="w-full h-0.5 bg-[#EDEBE4]" />

            <div>
              <p className="text-[#C4A35A] text-[10px] tracking-[0.3em] uppercase mb-3">{T.olivierLabel}</p>
              <div className="space-y-1.5 text-sm text-[#5A6A7A]">
                <p>
                  <a href="tel:5144432335" className="text-[#162B4A] hover:text-[#C4A35A] transition-colors">
                    514 443-2335
                  </a>
                </p>
                <p>
                  <a href="mailto:olivier.pastorel@opgestionprivee.ca" className="text-[#162B4A] hover:text-[#C4A35A] transition-colors break-all">
                    olivier.pastorel@opgestionprivee.ca
                  </a>
                </p>
              </div>
            </div>

            <div className="w-full h-0.5 bg-[#EDEBE4]" />

            <div>
              <p className="text-[#C4A35A] text-[10px] tracking-[0.3em] uppercase mb-3">{T.aurelieLabel}</p>
              <div className="space-y-1.5 text-sm text-[#5A6A7A]">
                <p>
                  <a href="tel:5143778143" className="text-[#162B4A] hover:text-[#C4A35A] transition-colors">
                    514 377-8143
                  </a>
                </p>
                <p>
                  <a href="mailto:aurelie.bellet@opgestionprivee.ca" className="text-[#162B4A] hover:text-[#C4A35A] transition-colors break-all">
                    aurelie.bellet@opgestionprivee.ca
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
