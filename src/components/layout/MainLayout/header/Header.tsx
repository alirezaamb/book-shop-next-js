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
import { Badge, Container } from '@mui/material';
import SearchBox from '../search-box/SearchBox';
import MobileHeader from './MobileHeader';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useGetAllCartItems } from '@/api/cart/cart.queries';
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
  const [badgeCounter, setBadgeCounter] = React.useState(0);
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

  React.useEffect(() => {
    const username = localStorageGetter('name');
    if (username) {
      setName(username);
    }
  }, []);

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: 'gray',
      },
      children: ` ${name ? name[0] : ''}`,
    };
  }
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const { data: length } = useGetAllCartItems();
  React.useEffect(() => {
    setBadgeCounter(length?.data.length);
  }, [length]);

  return (
    <Box sx={{ flexGrow: 1, mb: 9 }}>
      <AppBar
        sx={{
          bgcolor: 'primary.main',
          color: 'black',
          position: 'absolute',
          right: '0',
          boxShadow: '0 0 0 0',
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
                  {localization.bookStore}
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
              <Link href={'/cart'}>
                <Box sx={{ cursor: 'pointer' }}>
                  <Badge color="secondary" badgeContent={badgeCounter}>
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </Box>
              </Link>
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
                  <Link href={'/admin-dashboard'}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="right">
                        {localization.adminDashboard}
                      </Typography>
                    </MenuItem>
                  </Link>
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
            ></Box>
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
        <MobileHeader
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
        />
      </Box>
    </Box>
  );
}
