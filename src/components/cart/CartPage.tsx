import React, { useEffect, useState } from 'react';
import CardOfCart from './components/card/Card';
import { useGetAllCartItems } from '@/api/cart/cart.queries';
import { Box, Grid } from '@mui/material';
import { BooksOfCartType } from '@/types/types';
import TotalCard from './components/total-card/TotalCard';

const CartPage = () => {
  const [books, setBooks] = useState<BooksOfCartType[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const { data } = useGetAllCartItems();

  useEffect(() => {
    setBooks(data?.data);
  }, [data]);

  const updateQuantity = (id: string, newQuantity: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, quantity: newQuantity } : book
      )
    );
  };

  useEffect(() => {
    const total = books?.reduce(
      (sum, book) => sum + book.quantity * book.price,
      0
    );
    setTotalAmount(total);
  }, [books]);

  console.log(totalAmount);
  return (
    <Box sx={{ mx: 'auto', display: 'flex', gap: 3, mt: 4 }}>
      <TotalCard totalPrice={totalAmount} />
      <Grid container rowGap={3}>
        {books?.map((book, index) => {
          return (
            <Grid item key={index} xs={12} md={6}>
              <CardOfCart book={book} updateQuantity={updateQuantity} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CartPage;
