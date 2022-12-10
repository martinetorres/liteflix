import { Box, Container } from "@chakra-ui/react";
import ImageIcon from "../ui/imageIcon";

export default function NotificationsIcon() {
    return(
        <Container position='relative'>
            <Box position='absolute' top={2} right={3} background='#64EEBC' boxSize={9} borderRadius='50%'></Box>
            <ImageIcon boxSize={30} iconWidth={26} img='bell' />
        </Container>
    )
}