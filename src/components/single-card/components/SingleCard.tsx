import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  Avatar,
  Paper,
  IconButton,
} from '@mui/material';
import { useGetBookById } from '@/api/products/products.queries';
import LoadingPage from '../../shared/loading/Loading';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  localization,
  pageLevelLocalization,
} from '../../../constants/localization';
import Carousel from 'react-material-ui-carousel';
import {
  useAddToCart,
  useGetAllCartItems,
  useUpdateItemOfCart,
} from '@/api/cart/cart.queries';
import BasicModal from '@/components/shared/modal/Modal';

export const SingleCard = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const router = useRouter();
  const { data, isLoading } = useGetBookById(router.query.bookId as string);
  const [modal, setModal] = useState({
    isOpen: false,
    message: 'محصول با موفقیت به سبد خرید افزوده شد',
  });
  const { mutate: addToCart } = useAddToCart();
  //get all item in cart
  const { data: getCartItems } = useGetAllCartItems();
  //update item
  const { mutate: updateItem } = useUpdateItemOfCart();

  useEffect(() => {
    if (data) {
      setCarouselIndex(0);
    }
  }, [data]);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % (data?.pictures?.length || 1));
  };

  const handlePrev = () => {
    setCarouselIndex(
      (prev) =>
        (prev - 1 + (data?.pictures?.length || 1)) %
        (data?.pictures?.length || 1)
    );
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!data) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  const addToCartHandler = () => {
    const cartItems = Array.isArray(getCartItems?.data)
      ? getCartItems.data
      : [];

    const duplicate = cartItems.find((card) => card.id === data.id);
    if (!duplicate) {
      addToCart({ ...data, quantity: 1 });
    } else {
      updateItem({ id: data.id, quantity: duplicate.quantity + 1 });
    }
  };

  return (
    <Container dir="rtl" sx={{ mt: 3, display: 'flex', gap: 4 }}>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', height: '80%' }}>
          <Carousel
            index={carouselIndex}
            autoPlay={false}
            navButtonsAlwaysInvisible
          >
            {data?.pictures?.map((url: string, index: number) => (
              <Box
                key={index}
                component="img"
                src={url}
                alt={`Picture ${index + 1}`}
                sx={{ width: '100%', height: '25rem', objectFit: 'cover' }}
              />
            ))}
          </Carousel>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton onClick={handlePrev}>
            <ArrowForwardIosIcon />
          </IconButton>
          <Box sx={{ display: 'flex', overflow: 'hidden', width: '80%' }}>
            {data?.pictures?.map((url: string, index: number) => (
              <Box
                key={index}
                component="img"
                src={url}
                alt={`Thumbnail ${index + 1}`}
                sx={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  mx: 1,
                  cursor: 'pointer',
                  border: carouselIndex === index ? '2px solid blue' : 'none',
                }}
                onClick={() => setCarouselIndex(index)}
              />
            ))}
          </Box>
          <IconButton onClick={handleNext}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" mt={5}>
          {data.name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="h6" color="text.secondary">
              {pageLevelLocalization.singleProduct.publisher}:
            </Typography>
            <Typography variant="h6" color="text.primary">
              {data.desc}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="h6" color="text.secondary">
              {pageLevelLocalization.singleProduct.writer}:
            </Typography>
            <Typography variant="h6" color="text.primary">
              {data.author}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="h6" color="text.secondary">
              {pageLevelLocalization.singleProduct.translator}:
            </Typography>
            <Typography variant="h6" color="text.primary">
              {data.translator}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <Typography variant="h6" color="text.secondary">
              {pageLevelLocalization.singleProduct.score}:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                sx={{
                  bgcolor: 'green',
                  mx: 1,
                  fontSize: '18px',
                }}
              >
                2.6
              </Avatar>
              <Typography variant="h6" color="text.primary">
                {pageLevelLocalization.singleProduct.scoreDescription}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Paper
        sx={{ width: '35%', maxHeight: 350, p: 3, mx: 'auto', boxShadow: 3 }}
      >
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography
            variant="h5"
            color="primary"
            fontWeight="bold"
            fontSize={20}
          >
            الکترونیکی
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#00a1a4' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                حجم
              </Typography>
              <Typography variant="body1">
                {(340 / 8).toLocaleString('fa')} مگابایت
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: 'gray.200' }}
            />
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                قابلیت انتقال
              </Typography>
              <Typography variant="body1">دارد</Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Typography variant="h6" color="primary">
              {localization.price}:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" fontWeight="bold" color="primary">
                {data.price.toLocaleString('fa')}
              </Typography>
              <Typography variant="body1" color="primary" fontWeight={600}>
                {localization.toman}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button variant="outlined" sx={{ mr: 2 }}>
              هدیه به دیگری
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addToCartHandler}
            >
              {localization.addToCart}
            </Button>
          </Box>
        </Box>
      </Paper>
      <BasicModal setModal={setModal} modal={modal} />
    </Container>
  );
};
