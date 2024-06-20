/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SingInType, UserType } from '@/types/types';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { localStorageSetter } from '@/utils/localStorage';
import { Alert, Snackbar } from '@mui/material';
import { useGetUsers } from '../../hooks';

export default function SignIn({ setSearchParams }: SingInType) {
  const router = useRouter();
  const [toastState, setToastState] = React.useState({
    isOpen: false,
    message: 'UserName or Password is incorrect',
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const { data: allUsers } = useGetUsers();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setIsLoading(true);
    if (allUsers) {
      const foundedUser = allUsers.find(
        (user: UserType) =>
          user.email === data.get('email') &&
          user.password === data.get('password')
      );

      if (foundedUser) {
        setCookie('access', true);
        setCookie('role', foundedUser.role);
        localStorageSetter('name', JSON.stringify(foundedUser.firstName));
        setIsLoading(false);

        router.push(foundedUser.role === 'admin' ? '/admin-dashboard' : '/');
      } else {
        setToastState((prev) => ({ ...prev, isOpen: true }));
        setIsLoading(false);
      }
    }
  };

  const handleSignUpLinkClick = () => {
    setSearchParams({ action: 'signup' });
  };
  const handleClose = () => {
    setToastState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            Sign In
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="#" variant="body2">
              <Box onClick={handleSignUpLinkClick}>
                "Don't have an account? Sign Up"
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={toastState.isOpen}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toastState.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
