import MainLayout from '@/components/layout/MainLayout/layout';
import Products from '@/components/products/Products';
import SingleCard from '@/components/single-card/SingleCard';
import { ReactElement } from 'react';

export default function SingleProductPage() {
  return <SingleCard />;
}

SingleProductPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
