import { useEffect, useState } from 'react';
import { BooksEntity } from '../../types/types';
import CardOfBook from './card/Card';
import { getBooks } from '@/api/get/get';
import LoadingPage from '../shared/loading/Loading';

const Products = () => {
  const [books, setBooks] = useState<BooksEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="grid grid-cols-3 mt-6 gap-4 text-center justify-items-center">
      {books?.map((book: BooksEntity) => {
        return <CardOfBook key={book.id} data={book} />;
      })}
    </div>
  );
};

export default Products;
