import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import ButtonWithIcon from "../ui/buttonWithIcon";
import NotificationsIcon from "../notificationsIcon";
import ProfileIcon from "../profileIcon";
import { AddIcon } from '@chakra-ui/icons';
import ImageIcon from "../ui/imageIcon";
import ModalContext from "../../context/modalContext";
import DrawerContext from "../../context/drawerContext";
import Slide from "../animations/slide";

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
            paddingTop={10}
            gap={40}>

                <Heading as='h1' className='brand'>
                    <b>Lite</b>flix
                </Heading>
                
                <Box display={{base: 'none', desktop: 'inline-block' }} justifySelf='flex-start' marginRight='auto'>
                    <Slide direction='left' delay={0.1}>
                        <ModalContext.Consumer>
                            { ({openModal})  => 
                                <ButtonWithIcon text='Agregar película' variant='secondary' icon={<AddIcon />} onClick={ () => openModal() } />
                            }
                        </ModalContext.Consumer>
                    </Slide>
                </Box>

                <Box order={{ base: -1, desktop: 'inherit' }}>
                    <DrawerContext.Consumer>
                        { ({openDrawer}) =>
                            <Button onClick={ () => openDrawer() }>
                                <ImageIcon boxSize={30} iconWidth={27} img='menu' />
                            </Button>
                        }
                    </DrawerContext.Consumer>
                </Box>

                <Box display={{base: 'none', desktop: 'inline-block' }} justifySelf='flex-end'>
                    <NotificationsIcon />
                </Box>

                <ProfileIcon />
        </Flex>
    )
}