import { Flex, Heading } from "@chakra-ui/react";
import ButtonWithIcon from "../buttonWithIcon";
import MenuIcon from "../menuIcon";
import NotificationsIcon from "../notificationsIcon";
import ProfileIcon from "../profileIcon";

export default function Navbar() {
    return(
        <Flex position={'absolute'} zIndex={2} alignItems='center'>
            <Heading as='h1' className='brand'>
                <b>Lite</b>flix
            </Heading>
            
            <ButtonWithIcon variant='secondary' />

            <MenuIcon />

            <NotificationsIcon />

            <ProfileIcon />
        </Flex>
    )
}