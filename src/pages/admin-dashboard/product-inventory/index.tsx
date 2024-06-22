import AdminLayout from '@/components/layout/adminLayout/AdminLayout';
import ProductInventoryTable from '@/components/product-inventory/components/ProductInventory';
import { ReactElement } from 'react';

export default function ProductInventory() {
  return <ProductInventoryTable />;
}

ProductInventory.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
