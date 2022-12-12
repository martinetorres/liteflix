import { Flex, Container, Heading, Image, Box, SlideFade } from "@chakra-ui/react";
import AddMovieModal from "../addMovieModal";
import ButtonWithIcon from "../ui/buttonWithIcon";
import FeaturedMovies from "../featuredMovies";
import MoviesDropdown from "../moviesDropdown";
import ImageIcon from "../ui/imageIcon";
import Slide from "../animations/slide";

export default function Slider() {

    return(
        <Container>
            
            <Flex  
                boxSize='100%'
                minH='100vh'
                justifyContent='space-between'
                alignItems={{base: 'center', desktop: 'flex-end'}}
                paddingTop={{base: '40vh', desktop: 0}}
                direction={{base: 'column', desktop: 'row'}}
                textAlign={{base: 'center', desktop: 'left'}}
                backgroundImage='url(img/main_background.png)' 
                className="scaleBackgroundDown"
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
                            La casa de papel
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

                <Box 
                    background='linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);' 
                    position='absolute' width='100%' height='190px' bottom={0}
                    display={{ base: 'block', desktop: 'none' }}
                />
                
                    <Box paddingRight={{ base: 0, desktop: 50 }} alignSelf='center'>
                        <Slide direction='down' delay={0.8}>
                            <MoviesDropdown />
                            <FeaturedMovies />
                        </Slide>
                    </Box>

                <AddMovieModal />

            </Flex>
        </Container>
    )
}