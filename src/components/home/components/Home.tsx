import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { BookSlider } from './swiper/BookSlider';
import { pageLevelLocalization } from '@/constants/localization';
import { PublisherSlider } from './swiper/PublisherSlider';
import { DiscountSlider } from './swiper/DiscountSlider';
import Link from 'next/link';

const MainHome = () => {
  return (
    <>
      <Link href={'/products'}>
        <Box
          sx={{
            backgroundImage: `url('https://cdn.snappshop.co/components/a4/7b/9c20320e-d537-419b-8366-ca920b41a47b.jpg?w=2048&q=75')`,
            backgroundSize: 'cover',
            my: 4,
          }}
          height="385px"
        ></Box>
      </Link>
      <Box sx={{ px: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            my: 5,
          }}
        >
          <Box
            sx={{
              borderBottom: '1px solid gray',
              width: '85%',
              alignSelf: 'flex-end',
            }}
          ></Box>
          <Typography
            variant="h6"
            component={'h6'}
            sx={{
              backgroundColor: 'gray',
              width: 'fit-content',
              color: 'white',
              p: 2,
              borderRadius: '2px 24px 2px 24px',
            }}
          >
            {pageLevelLocalization.homePage.bestSellers}
          </Typography>
        </Box>
        <BookSlider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            my: 5,
          }}
        >
          <Box
            sx={{
              borderBottom: '1px solid gray',
              width: '90%',
              alignSelf: 'flex-end',
            }}
          ></Box>
          <Typography
            variant="h6"
            component={'h6'}
            sx={{
              backgroundColor: 'gray',
              width: 'fit-content',
              color: 'white',
              p: 2,
              borderRadius: '2px 24px 2px 24px',
            }}
          >
            {pageLevelLocalization.homePage.discount}
          </Typography>
        </Box>
        <DiscountSlider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            my: 5,
          }}
        >
          <Box
            sx={{
              borderBottom: '1px solid gray',
              width: '90%',
              alignSelf: 'flex-end',
            }}
          ></Box>
          <Typography
            variant="h6"
            component={'h6'}
            sx={{
              backgroundColor: 'gray',
              width: 'fit-content',
              color: 'white',
              p: 2,
              borderRadius: '2px 24px 2px 24px',
            }}
          >
            {pageLevelLocalization.homePage.publishers}
          </Typography>
        </Box>
        <PublisherSlider />
      </Box>
    </>
  );
};

export default MainHome;
