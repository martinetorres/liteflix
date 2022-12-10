import { Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ImageIcon from "../ui/imageIcon";

export default function RoundedButton({size} : {size: number}) {
    return (
        <Box backgroundColor='#24242450' borderRadius='50%' border='1px solid #fff'>
            <ImageIcon boxSize={size} iconWidth={size/3.5} img='play' />
        </Box>
    )
}