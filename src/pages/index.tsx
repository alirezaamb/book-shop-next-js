import MainHome from '@/components/home/components/Home';
import MainLayout from '@/components/layout/MainLayout/MainLayout';
import { ReactElement } from 'react';

export default function Home() {
  return <MainHome />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
