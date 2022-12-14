import { Box, Flex } from "@chakra-ui/react";
import ImageIcon from "../ui/imageIcon";

export default function RatingAndYear(
    { isHovered, stars, release_date } :
    { isHovered: boolean, stars?: number, release_date?: string }) {
    return(
        <Flex 
            position='absolute' 
            bottom={15} 
            left={0} 
            display={isHovered ? 'flex' : 'none'} 
            direction='row' 
            justifyContent='space-between' 
            w='100%' 
            alignItems='center' 
            color='white' 
            paddingLeft={10} 
            paddingRight={10}
        >
            
            {
                stars &&
                <Flex direction='row' fontSize={14} lineHeight={1} letterSpacing={4}>
                    <ImageIcon boxSize={12} img='star' />
                    <Box marginLeft={5}>
                        {stars}
                    </Box>
                </Flex>
            }
            
            { 
                release_date &&
                <Box display='inline-block' fontSize={14} lineHeight={1} letterSpacing={4}>
                    { new Date(release_date).getFullYear() }
                </Box>
            }
        </Flex>
    )
}