import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/liteflixTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme} resetCSS={false}>
      <main>
          <Component {...pageProps} />
      </main>
      </ChakraProvider>
  )
}