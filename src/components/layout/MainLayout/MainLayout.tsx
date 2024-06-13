import { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      <Header />
      <main className="container flex-grow max-w-[1440px] mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
