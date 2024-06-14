import React, { useEffect, useState } from 'react';
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
import { getBooks } from '@/api/get/get';
import LoadingPage from '@/components/shared/loading/Loading';

export const BookSlider = () => {
  const [booksPhoto, setBooksPhoto] = useState<string[]>([]);

  useEffect(() => {
    getBooks().then((res) => {
      const books = res?.map((item: { imgURL: string }) => item?.imgURL);
      setBooksPhoto(books);
    });
  }, []);

  return (
    <Swiper
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {!!booksPhoto && booksPhoto?.length > 0 ? (
        booksPhoto?.map((bookPhoto: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={bookPhoto} alt="photo of book" />
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
