import CartPage from '@/components/cart/CartPage';
import MainLayout from '@/components/layout/MainLayout/MainLayout';
import { ReactElement } from 'react';

export default function Cart() {
  return <CartPage />;
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
