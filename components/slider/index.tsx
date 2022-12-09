import { Flex, Container, Heading, Image, Box, Spacer, Grid, GridItem } from "@chakra-ui/react";
import ButtonWithIcon from "../buttonWithIcon";
import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import FeaturedMovies from "../featuredMovies";

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

                <Grid position='absolute' templateColumns='repeat(12, 1fr)' templateRows='repeat(12, 1fr)' columnGap={50} left={0} bottom={0} paddingBottom={50} boxSize='100%'>
                    <GridItem colSpan={10} rowEnd={12}>
                        <Box padding={50}>
                            <Heading as='h4'>
                                Original de <b>Liteflix</b>
                            </Heading>
                            <Heading as='h2' colorScheme={'brand'} textTransform={'uppercase'}>
                                La casa de papel
                            </Heading>

                            <Flex direction='row' alignItems='flex-start' justifyContent='flex-start' gap={20} marginTop={10}>
                                <ButtonWithIcon text='Agregar pelicula' variant="primary" icon={<AddIcon />} />

                                <ButtonWithIcon text='Mi lista' variant="secondary" hasBorder={true} icon={<ArrowRightIcon />} />
                            </Flex>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={2} gridColumnEnd={12} rowEnd={6}>
                        <Box>
                            <FeaturedMovies />
                        </Box>
                    </GridItem>

                </Grid>
        </Container>
    )
}