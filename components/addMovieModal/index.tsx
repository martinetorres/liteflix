import { Button, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

const AddMovieModal : React.FunctionComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <ChakraProvider resetCSS={false} >
            <Button onClick={onOpen} >open</Button>
            <Modal isOpen={isOpen} onClose={onClose} id='modal1' useInert={false}>
                <ModalOverlay bg='#00000030'/>
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        modal body
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ChakraProvider>
        </>
    )
}

export default AddMovieModal;