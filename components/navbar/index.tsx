import { Flex, Heading, Spacer } from "@chakra-ui/react";
import ButtonWithIcon from "../buttonWithIcon";
import NotificationsIcon from "../notificationsIcon";
import ProfileIcon from "../profileIcon";
import { AddIcon } from '@chakra-ui/icons';
import ImageIcon from "../ui/imageIcon";

export default function Navbar() {
    return(
        <Flex 
            position={'absolute'} 
            zIndex={2} 
            alignItems='center' 
            justifyContent='space-between' 
            w='100%' 
            paddingRight={50} 
            paddingLeft={50} 
            paddingTop={10}>

            <Flex>
                <Heading as='h1' className='brand'>
                    <b>Lite</b>flix
                </Heading>

                <Spacer boxSize={60} />
                
                <ButtonWithIcon text='Agregar pelicula' variant='secondary' icon={<AddIcon />} />
            </Flex>

            <Flex alignItems={'center'}>
                <ImageIcon boxSize={30} iconWidth={27} img='menu' />

                <Spacer boxSize={30} />

                <NotificationsIcon />

                <Spacer boxSize={30} />

                <ProfileIcon />
            </Flex>
        </Flex>
    )
}