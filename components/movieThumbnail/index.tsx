import { Box, Container, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import RoundedButton from "../roundedButton";
import ImageIcon from "../ui/imageIcon";

export default function MovieThumbnail() {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <Container position='relative'>
            <Image 
                objectFit='cover'
                src='/img/main_background.png' 
                w={220}
                h={146}
            />

            <Flex 
            position='absolute' 
            paddingTop={isHovered ? 55 : 50} 
            top={0}
            left={0} 
            boxSize='100%' 
            alignItems='center' 
            justifyContent={isHovered ? 'center' : 'flex-end'} 
            direction={isHovered ? 'row' : 'column'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            flexWrap={isHovered ? 'wrap' : 'nowrap'}
            cursor='pointer'>

                <RoundedButton size={isHovered ? 28 : 40} />

                <Heading as='h5' marginTop={20} marginBottom={15} marginLeft={isHovered ? 5 : 0}>
                    House of cards
                </Heading>

                <Box position='relative' boxSize='100%'>
                    <Flex position='absolute' top={5} left={0} display={isHovered ? 'flex' : 'none'} direction='row' justifyContent='space-between' w='100%' alignItems='center' color='white' paddingLeft={10} paddingRight={10}>
                        <Flex direction='row' fontSize={14}>
                            <ImageIcon boxSize={12} img='star' />
                            <Box marginLeft={5}>
                                7
                            </Box>
                        </Flex>
                        <Box display='inline-block' fontSize={14}>
                            2020
                        </Box>
                    </Flex>
                </Box>

            </Flex>
        </Container>
    )
}