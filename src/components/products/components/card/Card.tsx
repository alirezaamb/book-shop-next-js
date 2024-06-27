import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BooksEntity } from '@/types/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BasicModal from '@/components/shared/modal/Modal';
import { useGetAllCartItems, useUpdateCart } from '@/api/cart/cart.queries';
import { getCookie } from 'cookies-next';

export default function CardOfBook({ data }: { data: BooksEntity }) {
  const [modal, setModal] = useState({
    isOpen: false,
    message: 'محصول با موفقیت به سبد خرید افزوده شد',
  });
  const { name, price, imgURL, desc, id, author } = data;
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/products/${id}`);
  };

  const userId = getCookie('access')!;
  //post new item
  // const { mutate: addToCart, isSuccess, isError } = useAddToCart();

  const { mutate: updateCart, isSuccess, isError } = useUpdateCart();

  //get all item in cart
  const { data: getCartItems } = useGetAllCartItems(userId);
  // console.log(getCartItems);

  //update item
  // const { mutate: updateItem } = useUpdateItemOfCart();

  const addTocartHandler = () => {
    const cartItems = Array.isArray(getCartItems) ? getCartItems : [];

    const duplicate = cartItems.find((card) => card.id === id);
    if (!duplicate) {
      updateCart({
        id: userId,
        cart: [
          ...cartItems,
          { name, price, imgURL, desc, id, author, quantity: 1 },
        ],
      });
      // addToCart({ id, name, price, imgURL, desc, author, quantity: 1 });
    } else {
      duplicate.quantity++;
      updateCart({
        id: userId,
        cart: cartItems,
      });

      // updateItem({ id, quantity: duplicate.quantity + 1 });
    }
  };
  useEffect(() => {
    isSuccess &&
      setModal({
        isOpen: true,
        message: 'محصول با موفقیت به سبد خرید افزوده شد',
      });
    isError &&
      setModal({
        isOpen: true,
        message: 'محصول در سبد خرید وجود دارد',
      });
  }, [isError, isSuccess]);

  return (
    <Card
      sx={{ maxWidth: 345, borderRadius: '10px' }}
      className="flex flex-col justify-between"
    >
      <CardMedia
        sx={{ p: 2, borderRadius: '20px' }}
        component="img"
        alt="book"
        height="140"
        image={imgURL}
        onClick={handleNavigate}
        className="cursor-pointer"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between px-5 ">
        <Button
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            fontSize: '16px',
          }}
          onClick={addTocartHandler}
        >
          خرید
        </Button>
        <Typography fontSize={'large'}>
          {price.toLocaleString('FA')} تومان
        </Typography>
      </CardActions>
      <BasicModal setModal={setModal} modal={modal} />
    </Card>
  );
}
