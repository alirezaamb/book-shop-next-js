import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey, red } from '@mui/material/colors';
import { useDeleteItemFromCart } from '@/api/cart/cart.queries';
import { BooksOfCartType } from '@/types/types';

const CardOfCart = ({
  book,
  updateQuantity,
}: {
  book: BooksOfCartType;
  updateQuantity: (id: string, newQuantity: number) => void;
}) => {
  const { name, price, imgURL, desc, author, quantity, id } = book;

  const [quantityOfBook, setQuantityOfBook] = useState(quantity);

  const { mutate: deleteItem } = useDeleteItemFromCart();

  const addHandler = () => {
    const newQuantity = quantityOfBook + 1;
    setQuantityOfBook(newQuantity);
    updateQuantity(id, newQuantity);
  };

  const removeHandler = () => {
    const newQuantity = quantityOfBook - 1;

    if (quantityOfBook > 1) {
      setQuantityOfBook(newQuantity);
      updateQuantity(id, newQuantity);
    }
  };

  const deleteHandler = () => {
    deleteItem(id);
  };

  const totalPrice = price * quantityOfBook;
  return (
    <Card
      sx={{ display: 'flex', maxWidth: 400, maxHeight: 300, gap: 2, p: 2 }}
      dir="rtl"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <CardMedia
          component="img"
          image={imgURL}
          alt={name}
          sx={{
            width: 155,
            height: 130,
            objectFit: 'cover',
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            قیمت:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {totalPrice.toLocaleString('fa')}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          تومان
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'space-between',
          gap: '22px',
        }}
        dir="rtl"
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="h5" component="h5" fontWeight="600">
            نام کتاب :
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="h5" component="h5" fontWeight="600">
            نویسنده :
          </Typography>
          <Typography variant="h5" component="div">
            {author}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="h5" component="h5" fontWeight="600">
            انتشارات :
          </Typography>
          <Typography variant="h5" component="div">
            {desc}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="h5" component="h5" fontWeight="600">
            قیمت واحد :
          </Typography>
          <Typography variant="h5" component="div">
            {price.toLocaleString('fa')} تومان
          </Typography>
        </Box>

        <Box
          sx={{ border: '1px solid', borderColor: grey[400], borderRadius: 1 }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            justifyContent="space-between"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <IconButton onClick={addHandler}>
                <AddIcon sx={{ fontSize: '20px' }} />
              </IconButton>
              <Typography>{quantityOfBook}</Typography>

              <IconButton onClick={removeHandler}>
                <RemoveIcon sx={{ fontSize: '20px' }} />
              </IconButton>
            </Box>
            <Box onClick={deleteHandler}>
              <DeleteIcon sx={{ color: red[600], cursor: 'pointer' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CardOfCart;
