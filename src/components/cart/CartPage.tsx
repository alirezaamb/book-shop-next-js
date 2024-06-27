import React from 'react';
import CardOfCart from './components/card/Card';
import { useGetAllCartItems } from '@/api/cart/cart.queries';
import { Box, Grid } from '@mui/material';
import { BooksOfCartType } from '@/types/types';
import TotalCard from './components/total-card/TotalCard';
import { getCookie } from 'cookies-next';

const CartPage = () => {
  const userId = getCookie('access')!;

  const { data, refetch } = useGetAllCartItems(userId);
  console.log(data);

  const totalPrice = data?.reduce(
    (sum: number, book: BooksOfCartType) => sum + book.quantity * book.price,
    0
  );

  return (
    <Box sx={{ mx: 'auto', display: 'flex', gap: 3, mt: 4 }}>
      <TotalCard totalPrice={totalPrice} />
      <Grid container rowGap={3}>
        {data?.map(
          (book: BooksOfCartType, index: React.Key | null | undefined) => {
            return (
              <Grid item key={index} xs={12} md={6}>
                <CardOfCart book={book} refetch={refetch} />
              </Grid>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default CartPage;
