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
import { Box, Typography } from '@mui/material';
import { Publisher } from '@/types/types';
import { useGetPublisher } from '../../hooks';

export const PublisherSlider = () => {
  const { data: publisherPhotos } = useGetPublisher();
  console.log(publisherPhotos);

  return (
    <Swiper
      autoplay={{ delay: 4000 }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="custom-swiper"
    >
      {!!publisherPhotos && publisherPhotos?.length > 0 ? (
        publisherPhotos?.map((publisher: Publisher) => (
          <SwiperSlide key={publisher.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pb: 8,
              }}
            >
              <Box
                sx={{
                  height: 142,
                  width: 142,
                  borderRadius: '50%',
                  boxShadow: '0 .25rem .75rem rgba(0,0,0,.05)',
                  backgroundImage: `url(${publisher.image})`,
                  backgroundSize: 'cover',
                  mb: 2,
                }}
              ></Box>
              <Typography variant="body1">{publisher.name}</Typography>
            </Box>
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
