import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Prenez rendez-vous avec Olivier Pastorel pour une première consultation gratuite, sans engagement. Bureau situé à Belœil, Québec.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Olivier Pastorel',
    description: 'Prenez rendez-vous avec Olivier Pastorel pour une première consultation gratuite, sans engagement.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
