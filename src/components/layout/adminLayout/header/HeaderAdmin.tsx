import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { localStorageSetter } from '@/utils/localStorage';

export default function HeaderAdmin() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();
  // const handleAddProducts = () => {
  //   router.push('/admin-dashboard/add-product');
  // };

  const handleToDashboard = () => {
    // router.push('/admin-dashboard');
    location.href = '/admin-dashboard';
  };
  const handleToHomePage = () => {
    router.push('/');
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logOutHandler = () => {
    router.push('/auth');
    deleteCookie('access', { path: '/' });
    deleteCookie('role', { path: '/' });
    localStorageSetter('name', '');
  };
  return (
    <Box sx={{ flexGrow: 1, direction: 'rtl' }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: '#FFC14D',
          color: 'black',
          fontFamily: 'iransans, sans-serif',
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="right" onClick={handleAddProducts}>
                  ثبت محصول جدید
                </Typography>
              </MenuItem> */}
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="right" onClick={handleToHomePage}>
                  خانه
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="right" onClick={logOutHandler}>
                  خروج
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            onClick={handleToDashboard}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, mx: 2, cursor: 'pointer', fontWeight: '600' }}
          >
            داشبورد
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
