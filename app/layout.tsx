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

export const metadata: Metadata = {
  title: 'Olivier Pastorel — Conseiller financier',
  description: 'Conseiller en sécurité financière. Solutions intégrées en investissement, planification de la retraite, fiscalité et planification successorale — Beloeil, Québec.',
  keywords: ['conseiller financier', 'gestion de patrimoine', 'planification retraite', 'Beloeil', 'Québec', 'investissement'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodoni.variable} ${jost.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#F9F8F4] text-[#1C1917] antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
