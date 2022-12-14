import { Box, Image, useTheme } from "@chakra-ui/react";

export default function CoverImage(
    { isHovered, backdrop, img } :
    { isHovered: boolean, backdrop?: string, img?: string }) {

    const theme = useTheme();
    
    return(
        <Box w={220} h={146}>
            <Box 
                position='absolute' 
                boxSize='100%' 
                top={0} 
                left={0}
                background={ 
                    isHovered ?
                        `${theme.colors.grayDark}bb`:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%);'
                }
                transition='background 200ms ease-in'
            />

            <Image 
                objectFit='cover'
                src={
                    backdrop ?
                        `https://image.tmdb.org/t/p/w300/${backdrop}`
                    :
                    img
                }
                boxShadow={`0px 0px 12px ${theme.colors.grayDark}70`}
                borderRadius={4}
                w='100%'
                h='100%'
            />
        </Box>
)
}