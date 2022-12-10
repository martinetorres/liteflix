import { Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

export default function AddMovieModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        modal body
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}