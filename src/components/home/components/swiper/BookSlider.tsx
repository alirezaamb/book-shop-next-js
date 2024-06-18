import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LoadingPage from "@/components/shared/loading/Loading";
import { Box } from "@mui/material";
import { useGetBooks } from "../../hooks";
import { BooksEntity } from "@/types/types";

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
      scrollbar={{ draggable: true }}
    >
      {!!books && books?.length > 0 ? (
        books
          ?.filter((book: BooksEntity) => book.salesAmount >= 10)
          ?.map((book: BooksEntity) => (
            <SwiperSlide key={book.id}>
              <Box sx={{ pb: 8 }}>
                <img src={book.imgURL} alt="photo of book" className="h-56" />
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
