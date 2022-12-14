import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    ChakraProvider,
    Flex,
    theme,
  } from '@chakra-ui/react'
import React from 'react'
import DrawerContext from '../../context/drawerContext'
import NotificationsIcon from '../notificationsIcon'
import ProfileIcon from '../profileIcon'
import MenuOptions from './menuOptions'

export default function SideMenu() {
    const { onClose } = useDisclosure();

    const handleClose = ( closeModalCallback : Function ) => {
        closeModalCallback();
        onClose();
    }

    return (
        <>
            <ChakraProvider resetCSS={false} theme={theme}>
                <DrawerContext.Consumer>
                    { ({drawerIsOpen, openDrawer, closeDrawer}) => (
                    <>
                        <Drawer
                            isOpen={drawerIsOpen}
                            placement='right'
                            onClose={() => handleClose(closeDrawer)}
                            size={{ base:'full', sm:'md' }}
                        >
                            <DrawerOverlay color='#00000070' />
                            <DrawerContent bg='#242424E5'>
                                <DrawerHeader>
                                    <DrawerCloseButton color='white' left={5} top={5} />

                                    <Flex direction='row' justifyContent='flex-end' gap={10} alignItems={'center'}>
                                        <NotificationsIcon />

                                        <ProfileIcon />
                                    </Flex>
                                </DrawerHeader>

                                <DrawerBody>
                                    <MenuOptions />
                                </DrawerBody>

                            </DrawerContent>
                        </Drawer>
                    </> 
                    ) }
                </DrawerContext.Consumer>
            </ChakraProvider>
        </>
    )
}