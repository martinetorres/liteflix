import { Box } from "@chakra-ui/react";
import ImageIcon from "../ui/imageIcon";

export default function PlayButton({size} : {size: number}) {
    return (
        <Box backgroundColor='#24242450' borderRadius='50%' border='1px solid #fff'>
            <ImageIcon boxSize={size} iconWidth={size/3.5} img='play' />
        </Box>
    )
}