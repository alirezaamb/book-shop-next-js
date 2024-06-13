import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getBooksPhotoSlider } from '@/api/get/get';
import LoadingPage from '@/components/shared/loading/Loading';

export const BookSlider = () => {
  const [booksPhoto, setBooksPhoto] = useState<string[]>([]);

  useEffect(() => {
    getBooksPhotoSlider().then((res) => {
      return setBooksPhoto(res);
    });
  }, []);

  return (
    <Swiper
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {booksPhoto.length > 0 ? (
        booksPhoto.map((bookPhoto: any, index: number) => (
          <SwiperSlide key={index}>
            <img src={bookPhoto.image} alt="photo of book" />
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
