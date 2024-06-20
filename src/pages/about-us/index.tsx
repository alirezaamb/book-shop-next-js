import AboutUs from '@/components/about-us/components/AboutUs';
import MainLayout from '@/components/layout/MainLayout/MainLayout';
import { ReactElement } from 'react';

export default function AboutUsPage() {
  return <AboutUs />;
}

AboutUsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
