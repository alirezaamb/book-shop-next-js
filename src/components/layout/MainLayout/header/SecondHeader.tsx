import { localization } from '@/constants/localization';
import {
  AppBar,
  Box,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const SecondHeader = () => {
  const [alignment, setAlignment] = React.useState('web');
  const router = useRouter();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    if (event.target.value === 'home') {
      return router.push('/');
    } else if (event.target.value === 'about-us') {
      return router.push('/about-us');
    } else if (event.target.value === 'products') {
      return router.push('/products');
    }
  };

  return (
    <AppBar
      sx={{
        bgcolor: 'primary.main',
        color: 'black',
        position: 'sticky',
        top: 0,
        width: '100%',
        py: 2,
        boxShadow: '0 0 0 0',
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Container>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '2%',
            justifyContent: 'flex-end',
            width: '100%',
            px: 3,
          }}
        >
          <ToggleButtonGroup
            color="standard"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              sx={{
                border: 'none',
                p: 0,
                mr: 3,
                fontSize: '16px',
                '&.Mui-selected': {
                  bgcolor: 'transparent',
                },
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
              value="about-us"
            >
              {localization.aboutUs}
            </ToggleButton>
            <ToggleButton
              sx={{
                border: 'none',
                p: 0,
                mr: 3,
                fontSize: '16px',
                '&.Mui-selected': {
                  bgcolor: 'transparent',
                },
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
              value="products"
            >
              {localization.products}
            </ToggleButton>
            <ToggleButton
              sx={{
                border: 'none',
                p: 0,
                mr: 3,
                fontSize: '16px',
                '&.Mui-selected': {
                  bgcolor: 'transparent',
                },
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
              value="home"
            >
              {localization.home}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Container>
    </AppBar>
  );
};

export default SecondHeader;
