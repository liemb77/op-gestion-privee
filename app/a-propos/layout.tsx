import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: "Olivier Pastorel, conseiller en sécurité financière fort de 25 ans d'expérience, accompagne particuliers et professionnels à Belœil, Québec. Rencontrez aussi notre équipe.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À propos | Olivier Pastorel',
    description: "Olivier Pastorel, conseiller en sécurité financière fort de 25 ans d'expérience, accompagne particuliers et professionnels à Belœil, Québec.",
    url: '/a-propos',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
