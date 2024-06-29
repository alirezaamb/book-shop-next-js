// import React, { useState } from 'react';
// import {
//   Box,
//   Slider,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   Typography,
// } from '@mui/material';

// const FilterBox = ({
//   setParams,
// }: {
//   setParams: React.Dispatch<React.SetStateAction<Record<string, string>>>;
// }) => {
//   const [priceRange, setPriceRange] = useState([0, 500_000]);
//   const [category, setCategory] = useState('');
//   const [age, setAge] = useState('');

//   const handlePriceChange = (
//     event: any,
//     newValue: React.SetStateAction<number[]>
//   ) => {
//     setPriceRange(newValue);
//   };

//   const handleCategoryChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setCategory(event.target.value);
//   };

//   const handleAgeChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setAge(event.target.value);
//   };

//   const handleSubmit = () => {
//     console.log('Price Range:', priceRange);

//     setParams((c) => ({
//       ...c,
//       age,
//       type: category,
//       price_gte: priceRange[0].toString(),
//       price_lte: priceRange[1].toString(),
//     }));
//   };

//   return (
//     <Box
//       sx={{ width: 300, padding: 2, border: '1px solid grey', borderRadius: 2 }}
//     >
//       <Typography variant="h6" gutterBottom>
//         Filter
//       </Typography>

//       <FormControl fullWidth margin="normal">
//         <InputLabel>Category</InputLabel>
//         <Select value={category} onChange={handleCategoryChange}>
//           <MenuItem value="roman">Roman</MenuItem>
//           <MenuItem value="dairy">Dairy</MenuItem>
//         </Select>
//       </FormControl>

//       <FormControl fullWidth margin="normal">
//         <InputLabel>Age</InputLabel>
//         <Select value={age} onChange={handleAgeChange}>
//           <MenuItem value="adult">Adult</MenuItem>
//           <MenuItem value="teenager">Teenager</MenuItem>
//           <MenuItem value="children">Children</MenuItem>
//         </Select>
//       </FormControl>

//       <Typography gutterBottom>Price Range</Typography>
//       <Slider
//         value={priceRange}
//         onChange={handlePriceChange}
//         valueLabelDisplay="auto"
//         min={0}
//         max={500000}
//       />

//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSubmit}
//         sx={{ marginTop: 2 }}
//       >
//         Apply Filters
//       </Button>
//     </Box>
//   );
// };

// export default FilterBox;

import React, { useState } from 'react';
import {
  Box,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import { newParamsType } from '@/types/types';

const FilterBox = ({
  setParams,
}: {
  setParams: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [category, setCategory] = useState('');
  const [age, setAge] = useState('');
  const [sort, setSort] = useState('');
  console.log(sort);

  const handlePriceChange = (
    value: any,
    newValue: React.SetStateAction<number[]>
  ) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCategory(event.target.value);
  };

  const handleAgeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAge(event.target.value);
  };

  const handleSortChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSort(event.target.value);
  };

  const handleSubmit = () => {
    const newParams: newParamsType = {
      price_gte: priceRange[0].toString(),
      price_lte: priceRange[1].toString(),
    };

    if (category) {
      newParams.type = category;
    }

    if (age) {
      newParams.age = age;
    }
    if (sort) {
      console.log('here');
      newParams._sort = 'price';
      newParams._order = sort;
    }

    setParams(newParams);
  };

  const handleReset = () => {
    setCategory('');
    setAge('');
    setPriceRange([0, 500000]);
    setParams({});
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          padding: 2,
          border: '1px solid grey',
          borderRadius: 2,
          width: 'fit-content',
        }}
        dir="rtl"
      >
        <Typography variant="h6" gutterBottom>
          فیلتر محصولات
        </Typography>

        <Box sx={{ display: 'flex', gap: 5 }}>
          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel>دسته بندی</InputLabel>
            <Select value={category} onChange={handleCategoryChange}>
              <MenuItem dir="rtl" value="">
                همه موارد
              </MenuItem>
              <MenuItem dir="rtl" value="roman">
                رمان
              </MenuItem>
              <MenuItem dir="rtl" value="dairy">
                خاطرات
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel>ترتیب</InputLabel>
            <Select value={sort} onChange={handleSortChange}>
              <MenuItem dir="rtl" value="">
                پیش فرض
              </MenuItem>
              <MenuItem dir="rtl" value="desc">
                قیمت زیاد به کم
              </MenuItem>
              <MenuItem dir="rtl" value="asc">
                قیمت کم به زیاد
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel>رده بندی سنی</InputLabel>
            <Select value={age} onChange={handleAgeChange}>
              <MenuItem dir="rtl" value="">
                همه سن ها
              </MenuItem>
              <MenuItem dir="rtl" value="adult">
                بزرگسال
              </MenuItem>
              <MenuItem dir="rtl" value="teenager">
                جوانان
              </MenuItem>
              <MenuItem dir="rtl" value="children">
                کودکان
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography gutterBottom>بازه قیمتی</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={500_000}
        />

        <Box display={'flex'} gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ marginTop: 2 }}
          >
            فیلتر
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            sx={{ marginTop: 2 }}
          >
            پاک کردن همه
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterBox;
