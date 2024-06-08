import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'Iransans, sans-serif',
    },
    direction: 'rtl',
  });
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
