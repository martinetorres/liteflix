import { Flex, Container, Heading, Image, Box } from "@chakra-ui/react";
import AddMovieModal from "../addMovieModal";
import ButtonWithIcon from "../buttonWithIcon";
import FeaturedMovies from "../featuredMovies";
import MoviesDropdown from "../moviesDropdown";
import ImageIcon from "../ui/imageIcon";

export default function Slider() {

    return(
        <Container>
            <Image 
                boxSize='100%'
                objectFit='cover'
                src='/img/main_background.png' 
                alt='Featured movie'
                position='absolute'
                left={0}
            />

            <Flex position='absolute' 
                boxSize='100%'
                justifyContent='space-between'
                alignItems={{base: 'center', desktop: 'flex-end'}}
                paddingTop={{base: '40vh', desktop: 0}}
                direction={{base: 'column', desktop: 'row'}}
                textAlign={{base: 'center', desktop: 'left'}}
            >

                <Box 
                    paddingLeft={{ base: 0, desktop: 50 }} 
                    paddingBottom={{ base: 50, desktop: 110 }}
                >

                    <Heading as='h4'>
                        Original de <b>Liteflix</b>
                    </Heading>

                    <Heading 
                        as='h2' 
                        colorScheme={'brand'} 
                        textTransform={'uppercase'}
                    >
                        La casa de papel
                    </Heading>

                    <Flex 
                        direction='row' 
                        justifyContent={{base: 'center', desktop: 'flex-start'}} 
                        alignItems='flex-start' 
                        gap={20} 
                        marginTop={10}
                        flexWrap='wrap'
                    >
                        
                        <ButtonWithIcon 
                            text='Reproducir' 
                            variant="primary" 
                            icon={<ImageIcon boxSize={25} img='play' />} 
                        />

                        <ButtonWithIcon 
                            text='Mi lista' 
                            variant="secondary" 
                            hasBorder={true} 
                            icon={<ImageIcon boxSize={25} img='plus' />} 
                        />
                    </Flex>
                </Box>

                <Box 
                    background='linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);' 
                    position='absolute' width='100%' height='190px' bottom={0}
                    display={{ base: 'block', desktop: 'none' }}
                />
                
                <Box paddingRight={{ base: 0, desktop: 50 }} alignSelf='center'>
                    <MoviesDropdown />
                    <FeaturedMovies />
                </Box>

                <AddMovieModal />

            </Flex>
        </Container>
    )
}