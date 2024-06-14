
import TableProducts from '@/components/admin-dashboard/components/table-products/TableProducts';
import AdminLayout from '@/components/layout/adminLayout/AdminLayout';
import { ReactElement } from 'react';

export default function AdminDashboard() {
  return <TableProducts />;
}

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
