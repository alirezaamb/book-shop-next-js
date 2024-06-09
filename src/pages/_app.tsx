import '@/styles/globals.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

// Define a custom type for pages with a layout function
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Extend AppProps to include pages with layout functions
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Create a custom theme with MUI's createTheme
const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Iransans, sans-serif',
  },
  direction: 'rtl',
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Retrieve the layout function from the component or use a default one
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={defaultTheme}>
      {/* Add CssBaseline for consistent styling */}
      <CssBaseline />
      {/* Render the current page with its props */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
