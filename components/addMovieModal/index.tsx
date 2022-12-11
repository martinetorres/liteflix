import { ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ModalContext from "../../context/modalContext";

export default function AddMovieModal () {
    const { onClose } = useDisclosure();

    const handleClose = ( closeModalCallback : Function ) => {
        closeModalCallback();
        onClose();
    }

    return(
        <>
        <ChakraProvider resetCSS={false} >
            <ModalContext.Consumer>
                { ({modalIsOpen, openModal, closeModal}) => (
                    <>
                    <Modal isOpen={modalIsOpen} onClose={() => handleClose(closeModal)} id='modal1' useInert={false}>
                        <ModalOverlay bg='#00000070'/>
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                modal body
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                    </>
                )}
            </ModalContext.Consumer>
        </ChakraProvider>
        </>
    )
}