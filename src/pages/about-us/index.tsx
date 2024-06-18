import AboutUs from '@/components/about-us/AboutUs';
import MainLayout from '@/components/layout/MainLayout/MainLayout';
import { ReactElement } from 'react';

export default function ProductsPage() {
  return <AboutUs/>;
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
