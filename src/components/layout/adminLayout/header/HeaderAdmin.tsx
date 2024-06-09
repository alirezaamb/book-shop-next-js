import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

export default function HeaderAdmin() {
  const router = useRouter();
  const handleAddProducts = () => {
    router.push('admin-dashboard/add-product');
  };

  const handleToDashboard = () => {
    router.push('/admin-dashboard');
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
          <Button onClick={handleAddProducts} color="inherit">
            اضافه کردن
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
