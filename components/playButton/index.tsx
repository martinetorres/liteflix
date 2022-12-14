import { Box, useTheme } from "@chakra-ui/react";
import ImageIcon from "../ui/imageIcon";

export default function PlayButton({size} : {size: number}) {

    const theme = useTheme();

    return (
        <Box backgroundColor={`${theme.colors.grayDark}50`} borderRadius='50%' border='1px solid #fff'>
            <ImageIcon boxSize={size} iconWidth={size/3.5} img='play' />
        </Box>
    )
}