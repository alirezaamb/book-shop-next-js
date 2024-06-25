import { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import SecondHeader from './header/secondHeader';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen  mx-auto">
      <Header />
      <SecondHeader />
      <main className="container flex-grow mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
