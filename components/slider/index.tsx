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

            <Flex direction='row' 
                position='absolute' 
                alignItems='flex-end' 
                boxSize='100%'
                justifyContent='space-between'>

                <Box paddingLeft={50} paddingBottom={80}>
                    <Heading as='h4'>
                        Original de <b>Liteflix</b>
                    </Heading>
                    <Heading as='h2' colorScheme={'brand'} textTransform={'uppercase'}>
                        La casa de papel
                    </Heading>

                    <Flex direction='row' alignItems='flex-start' justifyContent='flex-start' gap={20} marginTop={10}>
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
                
                <Box paddingRight={50} alignSelf='center'>
                    <MoviesDropdown />
                    <FeaturedMovies />
                </Box>

<AddMovieModal />

            </Flex>
        </Container>
    )
}