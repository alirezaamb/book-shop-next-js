import { ReactNode } from 'react';
import HeaderAdmin from './header/HeaderAdmin';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderAdmin />
      <main>{children}</main>
    </>
  );
}
