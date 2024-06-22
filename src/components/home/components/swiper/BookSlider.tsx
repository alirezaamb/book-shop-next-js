import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LoadingPage from '@/components/shared/loading/Loading';
import { Box, Divider, Typography } from '@mui/material';
import { useGetBooks } from '@/api/products/products.queries';
import { BooksEntity } from '@/types/types';
import Link from 'next/link';
import { localization } from '@/constants/localization';

export const BookSlider = () => {
  const { data: books } = useGetBooks();

  return (
    <Swiper
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true, hide: true }}
      className="custom-swiper"
    >
      {!!books && books?.length > 0 ? (
        books
          ?.filter((book: BooksEntity) => book.salesAmount >= 10)
          ?.map((book: BooksEntity) => (
            <SwiperSlide key={book.id}>
              <Link href={`/products/${book?.id}`}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '12px',
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.3)',
                    mb: 8,
                    mt: 2,
                    pl: 4,
                    px: 2,
                    width: 'fit-content',
                  }}
                >
                  <Box sx={{ pt: 2, pb: 4 }}>
                    <img
                      src={book?.imgURL}
                      alt="photo of book"
                      className="h-56"
                    />
                  </Box>
                  <Divider sx={{ width: '80%' }} />
                  <Typography variant="body1">{book?.name}</Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 4,
                      py: 2,
                      flexDirection: 'row-reverse',
                    }}
                  >
                    <Typography
                      sx={{
                        alignSelf: 'flex-end',
                      }}
                    >
                      {book?.price.toLocaleString()}
                    </Typography>
                    <Typography>{localization.toman}</Typography>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
          ))
      ) : (
        <SwiperSlide>
          <LoadingPage />
        </SwiperSlide>
      )}
    </Swiper>
  );
};
