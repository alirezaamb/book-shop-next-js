import { Button } from '@mui/material';
import React from 'react';

const MainHome = () => {
  return (
    <div className="flex justify-between bg-[#fffbf7] px-20 py-10">
      <div className="flex flex-col justify-center items-start w-full">
        <h2 className="font-semibold text-8xl text-center">
          Discover the book treasure
        </h2>
        <Button variant="contained" color="error" sx={{ p: 2 }}>
          Explore Now
        </Button>
      </div>
      <img src="photo/photo.png" alt="picture of photo" className="pr-20" />
    </div>
  );
};

export default MainHome;
