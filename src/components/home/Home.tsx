import { Button } from '@mui/material';
import React from 'react';
import { BookSlider } from './swiper/BookSlider';
import { pageLevelLocalization } from '@/constants/localization';

const MainHome = () => {
  return (
    <>
      <div className="flex justify-between bg-[#fffbf7] px-10 py-10 sm:flex-col-reverse lg:flex-row ">
        <div className="flex flex-col justify-center lg:items-start xs:items-center w-full">
          <h2 className="font-semibold text-8xl text-center">
            Discover the book treasure
          </h2>
          <Button variant="contained" color="error" sx={{ p: 2 }}>
            Explore Now
          </Button>
        </div>
        <img
          src="photo/photo.png"
          alt="picture of photo"
          className="hidden pr-20 sm:hidden lg:block "
        />
      </div>
      <div>
        <h3 className="flex justify-center items-center text-2xl font-semibold my-5">
          {pageLevelLocalization.homePage.bestSellers}
        </h3>
        <BookSlider />
      </div>
    </>
  );
};

export default MainHome;
