import { BooksEntity } from '../../../types/types';
import CardOfBook from './card/Card';
import LoadingPage from '../../shared/loading/Loading';
import { useGetBooks } from '../hooks';

const Products = () => {
  const { data: books, isLoading } = useGetBooks();

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
