'use client';
import { LanguageProvider, useLang } from '@/contexts/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

function PageContent({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <main className="flex-1" key={lang}>
      {children}
    </main>
  );
}

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <PageContent>{children}</PageContent>
      <Footer />
    </LanguageProvider>
  );
}
