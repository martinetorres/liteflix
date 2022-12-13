import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import PlayButton from "../playButton";
import ImageIcon from "../ui/imageIcon";

export default function MovieThumbnail(
    {
        poster_path,
        title,
        vote_average,
        release_date,
    } :
    {
        poster_path: string,
        title: string,
        vote_average: number,
        release_date: string,
    }
) {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <Container 
            position='relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor='pointer'>
            
            <Image 
                objectFit='cover'
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                w={220}
                h={146}
                boxShadow='0px 0px 12px #24242470'
                borderRadius={4}
            />

            <Flex 
            position='absolute' 
            top={0}
            left={0} 
            boxSize='100%' 
            alignItems='center' 
            justifyContent={isHovered ? 'center' : 'flex-end'} 
            direction={isHovered ? 'row' : 'column'}
            flexWrap={'nowrap'}
            textAlign={isHovered ? 'left' : 'center'}
            paddingLeft={5}
            paddingRight={5}>

                <PlayButton size={isHovered ? 28 : 40} />

                <Heading as='h5' marginTop={20} marginBottom={15} marginLeft={isHovered ? 5 : 0}>
                    {title}
                </Heading>

            </Flex>

            <Flex position='absolute' bottom={15} left={0} display={isHovered ? 'flex' : 'none'} direction='row' justifyContent='space-between' w='100%' alignItems='center' color='white' paddingLeft={10} paddingRight={10}>
                <Flex direction='row' fontSize={14} lineHeight={1} letterSpacing={4}>
                    <ImageIcon boxSize={12} img='star' />
                    <Box marginLeft={5}>
                        {vote_average}
                    </Box>
                </Flex>
                <Box display='inline-block' fontSize={14} lineHeight={1} letterSpacing={4}>
                    2020
                </Box>
            </Flex>
        </Container>
    )
}