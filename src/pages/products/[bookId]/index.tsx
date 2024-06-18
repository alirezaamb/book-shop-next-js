import MainLayout from "@/components/layout/MainLayout/MainLayout";
import Products from "@/components/products/components/Products";
import { SingleCard } from "@/components/single-card/components/SingleCard";

import { ReactElement } from "react";

export default function SingleProductPage() {
  return <SingleCard />;
}

SingleProductPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
