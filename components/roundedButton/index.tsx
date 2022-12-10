import { Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function RoundedButton({size} : {size: number}) {
    return (
        <Box>
            <AddIcon
                boxSize={size} 
                borderRadius='50%' 
                backgroundColor='#24242450' 
                padding={size / 4}  
                border='1px solid #fff' 
                color='#fff' 
            />
        </Box>
    )
}