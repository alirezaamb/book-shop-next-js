import MainLayout from '@/components/layout/MainLayout/MainLayout';
import { ReactElement } from 'react';

export default function ProductsPage() {
  return <div>khanom rezaei</div>;
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
