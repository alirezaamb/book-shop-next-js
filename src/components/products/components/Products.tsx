import { BooksEntity } from '../../../types/types';
import CardOfBook from './card/Card';
import LoadingPage from '../../shared/loading/Loading';
import { useGetBooks } from '@/api/products/products.queries';
import FilterBox from './filter-box/FilterBox';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Products = () => {
  const [params, setParams] = useState<Record<string, string>>({});
  const {
    data: books,
    isLoading,
    refetch,
  } = useGetBooks(new URLSearchParams(params));

  useEffect(() => {
    refetch();
  }, [params]);

  if (isLoading) {
    return <LoadingPage />;
  }

  console.log(params);

  return (
    <Box sx={{ mt: 5 }}>
      <FilterBox setParams={setParams} />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 mt-6 gap-3 text-center justify-items-center">
        {books?.map((book: BooksEntity) => {
          return <CardOfBook key={book.id} data={book} />;
        })}
      </div>
    </Box>
  );
};

export default Products;
