import Head from 'next/head'
import Slider from '../components/slider'
import Navbar from '../components/navbar'
import { CSSReset } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liteflix</title>
        <meta name="description" content="Liteflix - Litebox coding challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Slider />
      </main>
      
    </div>
  )
}
