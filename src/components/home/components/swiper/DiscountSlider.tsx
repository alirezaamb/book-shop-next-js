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
import { useGetBooks } from "../../hooks";
import { Badge, Box, Divider, Typography } from "@mui/material";
import { localization } from "@/constants/localization";
import { BooksEntity } from "@/types/types";

export const DiscountSlider = () => {
  const { data: books } = useGetBooks();

  return (
    <Swiper
      autoplay={{ delay: 4000 }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {!!books && books?.length > 0 ? (
        books
          ?.filter((book: BooksEntity) => book.discount > 0)
          ?.map((book: BooksEntity) => (
            <SwiperSlide key={book.id}>
              <Badge
                color="primary"
                badgeContent={`${book.discount}%`}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                overlap="circular"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "12px",
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
                    mb: 8,
                    mt: 2,
                    pl: 4,
                    px: 2,
                    width: "fit-content",
                  }}
                >
                  <Box sx={{ pt:2 ,pb:4 }}>
                    <img src={book.imgURL} alt="photo of book" className="h-56"/>
                  </Box>
                  <Divider sx={{ width: "80%" }} />
                  <Typography variant="body1">{book.name}</Typography>

                  <Box sx={{ display: "flex", gap: 4, py: 2 }}>
                    <Typography
                      sx={{
                        alignSelf: "flex-end",
                        textDecoration: "line-through",
                      }}
                    >
                      {book.price.toLocaleString()}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        gap: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        {(
                          book.price -
                          (book.price * book.discount) / 100
                        ).toLocaleString()}
                      </Typography>
                      <Typography>{localization.toman}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Badge>
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
