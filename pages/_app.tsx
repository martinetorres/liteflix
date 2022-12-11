import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset, Portal } from '@chakra-ui/react';
import { theme } from '../styles/liteflixTheme';
import '../styles/globals.css';
import ModalProvider from '../context/modalContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme} resetCSS={false}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ChakraProvider>
  )
}