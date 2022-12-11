import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/liteflixTheme';
import '../styles/globals.css';
import ModalProvider from '../context/modalContextProvider';
import DrawerProvider from '../context/drawerContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme} resetCSS={false}>
        <ModalProvider>
          <DrawerProvider>
            <Component {...pageProps} />
          </DrawerProvider>
        </ModalProvider>
      </ChakraProvider>
  )
}