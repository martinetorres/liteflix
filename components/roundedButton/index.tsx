import { Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function RoundedButton() {
    return (
        <Box>
            <AddIcon boxSize={40} borderRadius='50%' backgroundColor='#24242450' padding={12}  border='1px solid #fff' color='#fff' />
        </Box>
    )
}