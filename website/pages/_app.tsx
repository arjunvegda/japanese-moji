import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';
import '@fontsource/jetbrains-mono/700.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode, useEffect } from 'react';
import { Header } from '../components/Header';
import { useRouter } from 'next/router';
import { analyticsPageWithPath } from '../utils/analytics';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      analyticsPageWithPath(router.asPath);
    }
  }, [router.isReady]);

  useEffect(() => {
    router.events.on('routeChangeComplete', analyticsPageWithPath);
    return () => {
      router.events.off('routeChangeComplete', analyticsPageWithPath);
    };
  }, [router.events]);

  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </StrictMode>
  );
}

export default MyApp;
