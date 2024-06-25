import { localization } from '@/constants/localization';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

const MobileHeader = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
}: {
  mobileMoreAnchorEl: any;
  isMobileMenuOpen: any;
  handleMobileMenuClose: any;
}) => {
  const mobileMenuId = 'primary-search-account-menu-mobile';
  return (
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
};

export default MobileHeader;
