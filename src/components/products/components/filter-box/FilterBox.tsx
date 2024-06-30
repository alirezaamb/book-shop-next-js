import { pageLevelLocalization } from '@/constants/localization';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  SliderMark,
  Typography,
} from '@mui/material';
import React, { SetStateAction, useState } from 'react';

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
    const newParams: SetStateAction<Record<string, string>> = {
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
    // setParams((c) => ({
    //       ...c,
    //       age,
    //       type: category,
    //       price_gte: priceRange[0].toString(),
    //       price_lte: priceRange[1].toString(),
    //     }));
    //   };
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
          {pageLevelLocalization.products.filterProducts}
        </Typography>

        <Box sx={{ display: 'flex', gap: 5 }}>
          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel>{pageLevelLocalization.products.grouping}</InputLabel>
            <Select value={category} onChange={handleCategoryChange}>
              <MenuItem dir="rtl" value="">
                {pageLevelLocalization.products.allItems}
              </MenuItem>
              <MenuItem dir="rtl" value="roman">
                {pageLevelLocalization.products.roman}
              </MenuItem>
              <MenuItem dir="rtl" value="dairy">
                {pageLevelLocalization.products.diary}
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel>{pageLevelLocalization.products.order}</InputLabel>
            <Select value={sort} onChange={handleSortChange}>
              <MenuItem dir="rtl" value="">
                {pageLevelLocalization.products.dafault}
              </MenuItem>
              <MenuItem dir="rtl" value="desc">
                {pageLevelLocalization.products.highToLow}
              </MenuItem>
              <MenuItem dir="rtl" value="asc">
                {pageLevelLocalization.products.lowToHigh}
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: 200 }} margin="normal">
            <InputLabel>
              {pageLevelLocalization.products.groupingByAge}
            </InputLabel>
            <Select value={age} onChange={handleAgeChange}>
              <MenuItem dir="rtl" value="">
                {pageLevelLocalization.products.allAges}
              </MenuItem>
              <MenuItem dir="rtl" value="adult">
                {pageLevelLocalization.products.adults}
              </MenuItem>
              <MenuItem dir="rtl" value="teenager">
                {pageLevelLocalization.products.teenagers}
              </MenuItem>
              <MenuItem dir="rtl" value="children">
                {pageLevelLocalization.products.children}
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography gutterBottom>
          {pageLevelLocalization.products.priceRange}
        </Typography>

        <Slider
          aria-label="price"
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={500_000}
          step={10_000}
        />

        <Box display={'flex'} gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ marginTop: 2 }}
          >
            {pageLevelLocalization.products.filter}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            sx={{ marginTop: 2 }}
          >
            {pageLevelLocalization.products.eraseAll}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterBox;
