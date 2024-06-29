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
import { localStorageSetter } from '@/utils/localStorage';
import Link from 'next/link';
import { pageLevelLocalization } from '@/constants/localization';

export default function HeaderAdmin() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();

  const handleToDashboard = () => {
    location.href = '/admin-dashboard';
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
    <AppBar
      position="static"
      sx={{
        bgcolor: 'primary.main',
        color: 'black',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            onClick={handleToDashboard}
            variant="h6"
            component="div"
            sx={{ mx: 2, cursor: 'pointer', fontWeight: '600' }}
          >
            {pageLevelLocalization.adminHeader.dashboard}
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '45px',
              }}
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
              <Link href={'/'}>
                <MenuItem
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  onClick={handleCloseUserMenu}
                >
                  <Typography>
                    {pageLevelLocalization.adminHeader.home}
                  </Typography>
                </MenuItem>
              </Link>
              <MenuItem
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
                onClick={handleCloseUserMenu}
              >
                <Typography onClick={logOutHandler}>
                  {pageLevelLocalization.adminHeader.exit}
                </Typography>
              </MenuItem>
              <Link href={'/admin-dashboard/product-inventory'}>
                <MenuItem
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  onClick={handleCloseUserMenu}
                >
                  <Typography>
                    {pageLevelLocalization.adminHeader.inventory}
                  </Typography>
                </MenuItem>
              </Link>
              <Link href={'/admin-dashboard/delivery-orders'}>
                <MenuItem
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  onClick={handleCloseUserMenu}
                >
                  <Typography>
                    {pageLevelLocalization.adminHeader.delivery}
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
