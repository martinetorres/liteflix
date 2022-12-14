import { Flex, Container, Box } from "@chakra-ui/react";
import AddMovieModal from "../addMovieModal";
import FeaturedMovies from "../featuredMovies";
import MoviesDropdown from "../moviesDropdown";
import Slide from "../ui/animations/slide";
import { useState } from "react";
import MainMovieCover from "./mainMovieCover";
import MainMovieDetails from "./mainMovieDetails";

export default function Slider({movie, popularMovies, localMovies} : {movie: any, popularMovies: any, localMovies: any}) {
    const [movieType, setMovieType] = useState('popular');

    return(
        <Container>
            { movie &&
            <>
            <MainMovieCover backdrop={movie.backdrop_path} />
            
            <Flex  
                justifyContent='space-between'
                alignItems={{base: 'center', desktop: 'flex-end'}}
                paddingTop={{base: '40vh', desktop: 0}}
                direction={{base: 'column', desktop: 'row'}}
                textAlign={{base: 'center', desktop: 'left'}}
                position='absolute'
                boxSize='100%'
            >

                <MainMovieDetails title={ movie.title } />
                
                <Box 
                    paddingRight={{ base: 0, desktop: 50 }} 
                    alignSelf={{ base: 'center', desktop: 'flex-start' }}
                >
                    <Slide direction='down' delay={0.8}>
                        <MoviesDropdown onSelectCallback={(newValue: any) => setMovieType(newValue.value) } selectedIndex={movieType === 'popular' ? 0 : 1} />
                        <FeaturedMovies movies={movieType === 'popular' ? popularMovies : localMovies} />
                    </Slide>
                </Box>

                <AddMovieModal />

            </Flex>
            </>
            }
        </Container>
    )
}