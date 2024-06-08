import MainHome from '@/components/home/Home';
import MainLayout from '@/components/layout/MainLayout/layout';
// import { useParams } from 'next/navigation';
import { ReactElement } from 'react';

export default function Home() {
  // const params = useParams;
  // console.log(params);
  return <MainHome />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
