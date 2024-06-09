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
    router.push('add-product');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: '#FFC14D', color: 'black', fontFamily: 'iransans' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
