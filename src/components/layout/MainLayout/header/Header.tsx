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
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Container } from '@mui/material';
import SearchBox from '../search-box/SearchBox';
//ُsearch
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  direction: 'rtl',
  borderRadius: '50px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  // width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '35%',
  },
  // [theme.breakpoints.up('xl')]: {
  // marginRiht: theme.spacing(0),
  // marginLeft: 0,
  // },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  direction: 'rtl',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  direction: 'rtl',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: calc(1em +` ${theme.spacing(4)}`),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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

            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: '2%',
                justifyContent: 'flex-end',
                width: '100%',
              }}
            >
              <Link href={'/about-us'}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.5s',
                    ':hover': { borderBottomColor: 'primary.light' },
                  }}
                >
                  {localization.aboutUs}
                </Typography>
              </Link>

              <Link href="/products">
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.5s',
                    ':hover': { borderBottomColor: 'primary.light' },
                  }}
                >
                  {localization.products}
                </Typography>
              </Link>
              <Link href="/">
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.5s',
                    ':hover': { borderBottomColor: 'primary.light' },
                  }}
                >
                  {localization.home}
                </Typography>
                {/* </IconButton> */}
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
