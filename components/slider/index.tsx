import { Flex, Container, Heading, Image, Box, SlideFade } from "@chakra-ui/react";
import AddMovieModal from "../addMovieModal";
import ButtonWithIcon from "../ui/buttonWithIcon";
import FeaturedMovies from "../featuredMovies";
import MoviesDropdown from "../moviesDropdown";
import ImageIcon from "../ui/imageIcon";
import Slide from "../animations/slide";

export default function Slider({movie} : {movie: any}) {
    return(
        <Container>
            { movie &&
            <>
            <Box w='100vw' h='100vh' overflow='hidden' position='absolute'>
                <Image 
                    src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                    boxSize='100%'
                    objectFit='cover'
                    objectPosition='top'
                    className='animateBackground'
                    opacity={0.8}
                />

                <Box 
                    background='linear-gradient(180deg, rgba(36, 36, 36, 0) 20%, #242424 100%);' 
                    position='absolute' width='100%' height='190px' bottom={0}
                    display={{ base: 'block', desktop: 'none' }}
                />
            </Box>
            
            <Flex  
                justifyContent='space-between'
                alignItems={{base: 'center', desktop: 'flex-end'}}
                paddingTop={{base: '40vh', desktop: 0}}
                direction={{base: 'column', desktop: 'row'}}
                textAlign={{base: 'center', desktop: 'left'}}
                backgroundImage='url()' 
                position='absolute'
                boxSize='100%'
            >

                <Box 
                    paddingLeft={{ base: 0, desktop: 50 }} 
                    paddingBottom={{ base: 50, desktop: 110 }}
                >

                    <SlideFade in delay={0.5}>
                        <Heading as='h4'>
                            Original de <b>Liteflix</b>
                        </Heading>
                    </SlideFade>

                    <Slide direction='right'>
                        <Heading 
                            as='h2' 
                            colorScheme={'brand'} 
                            textTransform={'uppercase'}
                        >
                            { movie.title }
                        </Heading>
                    </Slide>

                    <Flex 
                        direction='row' 
                        justifyContent={{base: 'center', desktop: 'flex-start'}} 
                        alignItems='flex-start' 
                        gap={20} 
                        marginTop={10}
                        flexWrap='wrap'
                    >
                        
                        <Slide direction='up' delay={0.1}>
                            <ButtonWithIcon 
                                text='Reproducir' 
                                variant="primary" 
                                icon={<ImageIcon boxSize={25} img='play' />} 
                            />
                        </Slide>

                        <Slide direction='up' delay={0.6}>
                            <ButtonWithIcon 
                                text='Mi lista' 
                                variant="secondary" 
                                hasBorder={true} 
                                icon={<ImageIcon boxSize={25} img='plus' />} 
                            />
                        </Slide>
                    </Flex>
                </Box>
                
                <Box paddingRight={{ base: 0, desktop: 50 }} alignSelf='center'>
                    <Slide direction='down' delay={0.8}>
                        <MoviesDropdown />
                        <FeaturedMovies />
                    </Slide>
                </Box>

                <AddMovieModal />

            </Flex>
            </>
            }
        </Container>
    )
}