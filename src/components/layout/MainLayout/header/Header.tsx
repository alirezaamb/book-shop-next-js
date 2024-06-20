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
import Tooltip from '@mui/material/Tooltip';
import { deleteCookie, getCookie, hasCookie } from 'cookies-next';
import { localStorageGetter, localStorageSetter } from '@/utils/localStorage';
import Avatar from '@mui/material/Avatar';
import { Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SearchBox from '../search-box/SearchBox';

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
  const [alignment, setAlignment] = React.useState('web');
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
  const handleChange = (event, newAlignment: string) => {
    console.log(event.target.value);
    setAlignment(newAlignment);
    if (event.target.value === 'home') {
      return router.push('/');
    } else if (event.target.value === 'about-us') {
      console.log('here');
      return router.push('/about-us');
    } else if (event.target.value === 'products') {
      return router.push('/products');
    }
  };

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
      <Link href="about-us">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          ></IconButton>
          <p>{localization.aboutUs}</p>
        </MenuItem>
      </Link>
    </Menu>
  );
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: 'gray',
      },
      children: ` ${name ? name[0] : ''}`,
    };
  }

  return (
    <Box sx={{ flexGrow: 1, mb: 20 }}>
      <AppBar
        sx={{
          bgcolor: '#FFC14D',
          color: 'black',
          position: 'fixed',
          right: '0',
        }}
      >
        <Container sx={{ maxWidth: '1600px' }}>
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              right: '0',
              top: '0',
              zIndex: '10',
            }}
          >
            <Box>
              <Link href="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      lg: 'block',
                      md: 'block',
                    },
                    fontSize: '25px',
                    fontWeight: '500',

                    ':hover': {
                      color: 'yellow',
                    },
                  }}
                >
                  فروشگاه کتاب
                </Typography>
              </Link>
            </Box>
            <SearchBox />
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
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                {name !== '' ? `${name},خوش آمدید` : 'لطفا وارد شوید'}
              </Typography>
            </Box>
          </Toolbar>
          <Toolbar>
            <Box sx={{ flexGrow: 0 }}>
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
                display: { xs: 'none', md: 'flex' },
                gap: '2%',
                justifyContent: 'flex-end',
                width: '100%',
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
                      borderBottom: '2px solid',
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
                      borderBottom: '2px solid',
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
                      borderBottom: '2px solid',
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
        </Container>
      </AppBar>
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-end', bgcolor: 'white' }}
      >
        {renderMobileMenu}
      </Box>
    </Box>
  );
}
