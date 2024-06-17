import { useEffect, useState } from "react";
import { BooksEntity } from "../../../types/types";
import CardOfBook from "./card/Card";
import { getBooks } from "@/api/get/get";
import LoadingPage from "../../shared/loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useGetBooks } from "../hooks";

const Products = () => {
/*   const [books, setBooks] = useState<BooksEntity[]>([]); */
 /*  const [isLoading, setIsLoading] = useState(true); */

  const { data:books, isLoading } = useGetBooks();

  /*   useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
      })
      .finally(() => setIsLoading(false));
  }, []);
 */
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 mt-6 gap-3 text-center justify-items-center">
      {books?.map((book: BooksEntity) => {
        return <CardOfBook key={book.id} data={book} />;
      })}
    </div>
  );
};

export default Products;
