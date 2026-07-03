import type { Metadata } from 'next';
import { Bodoni_Moda, Jost } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/AppShell';

const bodoni = Bodoni_Moda({
  variable: '--font-bodoni',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const SITE_URL = 'https://www.opgestionfinancierestrategique.ca';
const SITE_NAME = 'OP Gestion Financière Stratégique';
const OG_IMAGE = '/gallery/olivier-pastorel.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Olivier Pastorel — Conseiller financier | Belœil, Québec',
    template: '%s | Olivier Pastorel',
  },
  description: 'Conseiller en sécurité financière. Solutions intégrées en investissement, planification de la retraite, fiscalité et planification successorale — Belœil, Québec.',
  keywords: ['conseiller financier', 'gestion de patrimoine', 'planification retraite', 'Belœil', 'Québec', 'investissement'],
  alternates: { canonical: '/' },
  verification: { google: 'JI8InYqR9nq2-_Jf7ukVdL6YJ4Vfboz3V0fjvKnnzKY' },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Olivier Pastorel — Conseiller financier | Belœil, Québec',
    description: 'Conseiller en sécurité financière. Solutions intégrées en investissement, planification de la retraite, fiscalité et planification successorale.',
    images: [{ url: OG_IMAGE, width: 1200, height: 1500, alt: 'Olivier Pastorel, conseiller en sécurité financière' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olivier Pastorel — Conseiller financier | Belœil, Québec',
    description: 'Conseiller en sécurité financière. Solutions intégrées en investissement, planification de la retraite, fiscalité et planification successorale.',
    images: [OG_IMAGE],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE}`,
      telephone: '+1-514-443-2335',
      email: 'olivier.pastorel@opgestionprivee.ca',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1-45, rue Rémi Dansereau',
        addressLocality: 'Belœil',
        addressRegion: 'QC',
        postalCode: 'J3G 0N6',
        addressCountry: 'CA',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Québec, Canada',
      },
      priceRange: '$$',
      founder: { '@id': `${SITE_URL}/#olivier-pastorel` },
      employee: [
        { '@id': `${SITE_URL}/#olivier-pastorel` },
        {
          '@type': 'Person',
          name: 'Aurélie Bellet',
          jobTitle: 'Adjointe administrative',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#olivier-pastorel`,
      name: 'Olivier Pastorel',
      jobTitle: 'Conseiller en sécurité financière',
      telephone: '+1-514-443-2335',
      email: 'olivier.pastorel@opgestionprivee.ca',
      worksFor: { '@id': `${SITE_URL}/#business` },
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Conseiller en sécurité financière' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Représentant en épargne collective' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Représentant en assurances et rentes collectives' },
      ],
      identifier: { '@type': 'PropertyValue', name: 'Code AMF', value: '212465' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodoni.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#F9F8F4] text-[#1C1917] antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
