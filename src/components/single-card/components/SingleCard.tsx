import { useState } from "react";
import {
  localization,
  pageLevelLocalization,
} from "../../../constants/localization";
import { useRouter } from "next/router";
import LoadingPage from "../../shared/loading/Loading";
import { useGetBookById } from "../hooks";
import {
  Container,
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SingleCard = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  /*   const [book, setBook] = useState<BooksEntity>(); */
  const router = useRouter();

  const { data: book, isLoading } = useGetBookById(router.query.bookId);
  if (isLoading) {
    return <LoadingPage />;
  }

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % book.pictures.length);
  };

  const handlePrev = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + book.pictures.length) % book.pictures.length
    );
  };

  return book ? (
    <Container
      dir="rtl"
      sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        {/* <Box component="img" sx={{ width: '30%' }} src={book.imgURL} alt={book.name} /> */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", height: "80%" }}>
            <Carousel
              index={carouselIndex}
              autoPlay={false}
              navButtonsAlwaysInvisible
            >
              {book.pictures.map((url:string, index:number) => (
                <Box
                  key={index}
                  component="img"
                  src={url}
                  alt={`Picture ${index + 1}`}
                  sx={{ width: "100%", height: "100%" }}
                />
              ))}
            </Carousel>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handlePrev}>
              <ArrowForwardIosIcon />
            </IconButton>
            <Box sx={{ display: "flex", overflow: "hidden", width: "80%" }}>
              {book.pictures.map((url:string, index:number) => (
                <Box
                  key={index}
                  component="img"
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    mx: 1,
                    cursor: "pointer",
                    border: carouselIndex === index ? "2px solid blue" : "none",
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <Typography variant="h4" component="h2" fontWeight="bold">
            {book.name}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography variant="h6" color="text.secondary">
                ناشر:
              </Typography>
              <Typography variant="h6" color="text.primary">
                {book.desc}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography variant="h6" color="text.secondary">
                نویسنده:
              </Typography>
              <Typography variant="h6" color="text.primary">
                {book.author}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography variant="h6" color="text.secondary">
                مترجم:
              </Typography>
              <Typography variant="h6" color="text.primary">
                {book.translator}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography variant="h6" color="text.secondary">
                امتیاز:
              </Typography>
              <Typography variant="h6" color="text.primary">
                <Avatar sx={{ bgcolor: "green", mx: 1 }}>2.6</Avatar>
                {pageLevelLocalization.singleProduct.scoreDescription}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
            <Typography variant="h6">
              قیمت: {book.price.toLocaleString()} {localization.toman}
            </Typography>
            <Button variant="contained" color="primary">
              {localization.addToCart}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  ) : (
    <LoadingPage />
  );
};

export default SingleCard;
