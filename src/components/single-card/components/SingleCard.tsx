import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  Avatar,
  Paper,
} from '@mui/material';
import { useGetBookById } from '../hooks';
import LoadingPage from '../../shared/loading/Loading';
import {
  localization,
  pageLevelLocalization,
} from '../../../constants/localization';

const SingleCard = () => {
  const router = useRouter();
  const { data: book, isLoading } = useGetBookById(router.query.bookId);

  if (isLoading) {
    return <LoadingPage />;
  }

  return book ? (
    <Container dir="rtl" sx={{ mt: 5, display: 'flex', gap: 4 }}>
      <Box
        component="img"
        sx={{ width: '30%' }}
        src={book.imgURL}
        alt={book.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" mt={5}>
          {book.name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="h6" color="text.secondary">
              {pageLevelLocalization.singleProduct.publisher}:
            </Typography>
            <Typography variant="h6" color="text.primary">
              {book.desc}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="h6" color="text.secondary">
              {pageLevelLocalization.singleProduct.writer}:
            </Typography>
            <Typography variant="h6" color="text.primary">
              {book.author}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="h6" color="text.secondary">
              {pageLevelLocalization.singleProduct.translator}:
            </Typography>
            <Typography variant="h6" color="text.primary">
              {book.translator}
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
      <Paper sx={{ width: '35%', p: 3, mx: 'auto', boxShadow: 3 }}>
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
              <Typography variant="body1">340/8 مگابایت</Typography>
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
                {book.price.toLocaleString('fa')}
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
            <Button variant="contained" color="primary">
              {localization.addToCart}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  ) : (
    <LoadingPage />
  );
};

export default SingleCard;
