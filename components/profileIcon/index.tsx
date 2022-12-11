import { Box, Image } from "@chakra-ui/react";

export default function ProfileIcon() {
    return(
        <Box>
            <Image 
                src='/img/profile_icon.png'
                alt='profile'
                borderRadius='50%'
                cursor='pointer'
            />
        </Box>
    )
}