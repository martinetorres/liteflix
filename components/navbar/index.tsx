import { Flex, Heading, Spacer } from "@chakra-ui/react";
import ButtonWithIcon from "../buttonWithIcon";
import MenuIcon from "../menuIcon";
import NotificationsIcon from "../notificationsIcon";
import ProfileIcon from "../profileIcon";

export default function Navbar() {
    return(
        <Flex position={'absolute'} zIndex={2} alignItems='center' justifyContent='space-between' w='100%'>

            <Flex>
                <Heading as='h1' className='brand'>
                    <b>Lite</b>flix
                </Heading>

                <Spacer boxSize={60} />
                
                <ButtonWithIcon variant='secondary' />
            </Flex>

            <Flex alignItems={'center'}>
                <MenuIcon />

                <Spacer boxSize={30} />

                <NotificationsIcon />

                <Spacer boxSize={30} />

                <ProfileIcon />
            </Flex>
        </Flex>
    )
}