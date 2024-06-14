import "@/styles/globals.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Iransans, sans-serif",
  },
  direction: "rtl",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
      refetchInterval: false,
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
