import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    ChakraProvider,
    Flex,
  } from '@chakra-ui/react'
import React from 'react'
import NotificationsIcon from '../notificationsIcon'
import ProfileIcon from '../profileIcon'
import MenuOptions from './menuOptions'

export default function SideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <ChakraProvider resetCSS={false}>
                <Button colorScheme='teal' onClick={onOpen}>
                    Open
                </Button>
                <Drawer
                    isOpen={true}
                    placement='right'
                    onClose={onClose}
                    size='lg'
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
            </ChakraProvider>
        </>
    )
}