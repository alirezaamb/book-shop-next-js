import DeliveryOrdersIndex from '@/components/delivery-orders/DeliveryOrdersIndex';
import AdminLayout from '@/components/layout/adminLayout/AdminLayout';
import { ReactElement } from 'react';

export default function DeliveryOrders() {
  return <DeliveryOrdersIndex />;
}

DeliveryOrders.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
