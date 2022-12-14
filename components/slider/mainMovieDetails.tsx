import { Box, Flex, Heading, SlideFade } from "@chakra-ui/react";
import Slide from "../ui/animations/slide";
import ButtonWithIcon from "../ui/buttonWithIcon";
import ImageIcon from "../ui/imageIcon";

export default function MainMovieDetails(
    { title } :
    { title : string }
) {
    return(
        <Box 
            paddingLeft={{ base: 0, desktop: 50 }} 
            paddingBottom={{ base: 50, desktop: 110 }}
            alignSelf={{ base: 'center', desktop: 'flex-end' }}
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

                    { title }

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
    )
}