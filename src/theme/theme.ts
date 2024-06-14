import { createTheme } from '@mui/material';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      'vazirmatn',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h5: {
      fontSize: 13,
    },
    h4: {
      fontSize: 23,
    },
  },
  palette: {
    primary: {
      main: '#FFC14D',
      dark: '#EFEFEF85',
    },
    secondary: {
      main: '#1A315A',
      light: '#004e75',
    },
  },
});

export default theme;
