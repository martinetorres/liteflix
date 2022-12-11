import { Button, ChakraProvider, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import ModalContext from "../../context/modalContext";
import FileUpload from "../fileUpload";

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
                    <Modal 
                        isOpen={modalIsOpen} 
                        onClose={() => handleClose(closeModal)} 
                        id='add-movie-modal' 
                        useInert={false}
                        size='3xl'
                        isCentered={true}>
                        
                        <ModalOverlay bg='#00000070'/>
                        <ModalContent bg='#242424'>
                            <ModalHeader 
                                color='#64EEBC' 
                                letterSpacing={4} 
                                textAlign='center'
                                marginTop={5}
                            >
                                    
                                    Agregar Película

                            </ModalHeader>

                            <ModalCloseButton color='white' />
                            <ModalBody>
                                <FileUpload />

                                <Input 
                                    placeholder='Título' 
                                    textAlign='center' 
                                    fontSize={16} 
                                    letterSpacing={4} 
                                    border='none' 
                                    borderBottom='2px solid white'
                                    color='white' 
                                    boxShadow='none'
                                    borderRadius={0}
                                    maxWidth={300}
                                    margin='auto'
                                    display='block'
                                />

                                <Button
                                    fontSize={18}
                                    letterSpacing={4}
                                    padding='35px 50px'
                                    borderRadius={0}
                                    margin='auto'
                                    display='block'
                                    marginBottom={10}
                                    marginTop='60px'
                                    paddingTop={5}
                                    disabled
                                >
                                    Subir película
                                </Button>

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