import { useEffect, useState } from 'react';
import { BooksEntity } from '../../types/types';
import CardOfBook from './card/Card';
import { getBooks } from '@/api/get/get';

const Products = () => {
  const [books, setBooks] = useState<BooksEntity[]>([]);

  useEffect(() => {
    getBooks().then((data) => {
      // console.log('Fetched data:', data); // Log the fetched data
      setBooks(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 mt-6 gap-4 text-center justify-items-center">
      {books.map((book: BooksEntity) => {
        return <CardOfBook key={book.id} data={book} />;
      })}
    </div>
  );
};

export default Products;
