import MainHome from "@/components/home/Home";
import MainLayout from "@/components/layout/MainLayout/MainLayout";
import Products from "@/components/products/components/Products";
import { ReactElement } from "react";

export default function ProductsPage() {
  return <Products />;
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
