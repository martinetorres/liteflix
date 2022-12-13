import Head from 'next/head'
import Slider from '../components/slider'
import Navbar from '../components/navbar'
import SideMenu from '../components/sideMenu'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getFeaturedMovie, getPopularMovies } from '../api/movies'

export default function Home({featuredMovie, popularMovies} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Liteflix</title>
        <meta name="description" content="Liteflix - Litebox coding challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Slider movie={featuredMovie} popularMovies={popularMovies} />

        <SideMenu />
      </main>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
      props: {
        featuredMovie: await getFeaturedMovie(),
        popularMovies: await getPopularMovies(),
      }, 
  }
}