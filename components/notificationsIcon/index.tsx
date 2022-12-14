import { Box, useTheme } from "@chakra-ui/react";
import { theme } from "../../styles/liteflixTheme";
import ImageIcon from "../ui/imageIcon";

export default function NotificationsIcon() {
    return(
        <Box position='relative'>
            <Box position='absolute' top='2px' right='3px' background={ theme.colors.main } boxSize='9px' borderRadius='50%'></Box>
            <ImageIcon boxSize={30} iconWidth={26} img='bell' />
        </Box>
    )
}