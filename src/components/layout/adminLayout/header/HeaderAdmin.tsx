import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

export default function HeaderAdmin() {
  const router = useRouter();
  const handleAddProducts = () => {
    router.push('admin-dashboard/add-product');
  };

  const handleToDashboard = () => {
    router.push('/admin-dashboard');
  };
  const handleToHomePage = () => {
    router.push('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: '#FFC14D',
          color: 'black',
          fontFamily: 'iransans, sans-serif',
        }}
      >
        <Toolbar>
          <Typography
            onClick={handleToDashboard}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            داشبورد
          </Typography>
          <Typography
            onClick={handleToHomePage}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            <HomeIcon />
          </Typography>
          <Button onClick={handleAddProducts} color="inherit">
            اضافه کردن
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
