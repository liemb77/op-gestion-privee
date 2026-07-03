import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos services',
  description: 'Des solutions intégrées pour protéger, faire fructifier et transmettre votre patrimoine : investissement, retraite, assurances, fiscalité et planification successorale.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Nos services | Olivier Pastorel',
    description: 'Des solutions intégrées pour protéger, faire fructifier et transmettre votre patrimoine : investissement, retraite, assurances, fiscalité et planification successorale.',
    url: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
