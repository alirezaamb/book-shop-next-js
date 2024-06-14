import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { localization } from '../../../../constants/localization';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import { deleteCookie, getCookie, hasCookie } from 'cookies-next';
import { localStorageGetter, localStorageSetter } from '@/utils/localStorage';
import Avatar from '@mui/material/Avatar';

//we should fix it the type
const signOutHandler = (router: any) => {
  deleteCookie('access', { path: '/' });
  deleteCookie('role', { path: '/' });
  localStorageSetter('name', '');

  router.push('/auth');
};

export default function Header() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const cookie = getCookie('role');
  const handleToAdminDashboard = () => {
    router.push('admin-dashboard');
  };

  React.useEffect(() => {
    const username = localStorageGetter('name');
    if (username) {
      setName(username);
    }
  }, []);

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link href="/">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          ></IconButton>
          <p>{localization.home}</p>
        </MenuItem>
      </Link>
      <Link href="products">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          ></IconButton>
          <p>{localization.products}</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <Link href="about-us">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          ></IconButton>
          <p>{localization.aboutUs}</p>
        </Link>
      </MenuItem>
    </Menu>
  );

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: 'gray',
      },
      children: `${name ? name[0] : ''}`,
    };
  }

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar
        sx={{
          bgcolor: '#FFC14D',
          color: 'black',
          fontFamily: 'iransans',
        }}
        position="static"
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box>
                    <Avatar {...stringAvatar(name)} />
                  </Box>
                </IconButton>
              </Tooltip>
              <Typography
                sx={{
                  textWrap: 'nowrap',
                  fontFamily: 'iransans',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {name !== '' ? `${name},خوش آمدید` : 'لطفا وارد شوید'}
              </Typography>
            </Box>
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
              {cookie === 'admin' && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="right"
                    onClick={handleToAdminDashboard}
                  >
                    داشبورد ادمین
                  </Typography>
                </MenuItem>
              )}

              <MenuItem onClick={() => signOutHandler(router)}>
                <Typography textAlign="right">
                  {hasCookie('access') ? 'خروج' : 'وارد شوید'}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // width: '100%',
            }}
          >
            <Link href="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'none', lg: 'block' },
                  fontSize: '25px',
                  fontWeight: '500',
                  fontFamily: 'iraniransans',
                }}
              >
                فروشگاه کتاب
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="about-us">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Typography
                  sx={{
                    fontFamily: 'iraniransans',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  {localization.aboutUs}
                </Typography>
              </IconButton>
            </Link>

            <Link href="/products">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Typography
                  sx={{
                    fontFamily: 'iraniransans',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  {localization.products}
                </Typography>
              </IconButton>
            </Link>
            <Link href="/">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Typography
                  sx={{
                    fontFamily: 'iraniransans',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  {localization.home}
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
