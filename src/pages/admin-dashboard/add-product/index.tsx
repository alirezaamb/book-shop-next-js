import AddProduct from '@/components/admin-dashboard/add-product-form/AddProduct';
import AdminLayout from '@/components/layout/adminLayout/AdminLayout';
import { ReactElement } from 'react';

export default function AdminDashboard() {
  return <AddProduct />;
}

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
