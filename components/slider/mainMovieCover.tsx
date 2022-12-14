import { Box, Image } from "@chakra-ui/react";

export default function MainMovieCover(
    { backdrop } :
    { backdrop: string }
) {
    return(
        <Box w='100vw' h='100vh' overflow='hidden' position='absolute'>
            <Image 
                src={`https://image.tmdb.org/t/p/w1280/${backdrop}`}
                boxSize='100%'
                objectFit='cover'
                objectPosition='top'
                className='animateBackground'
                opacity={0.8}
            />

            <Box 
                background='linear-gradient(180deg, rgba(36, 36, 36, 0) 20%, #242424 100%);' 
                position='absolute' width='100%' height='190px' bottom={0}
            />
        </Box>
    )
}