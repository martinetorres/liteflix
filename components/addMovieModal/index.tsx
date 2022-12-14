import { 
    Button, ChakraProvider, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import ModalContext from "../../context/modalContext";
import FileUpload from "../fileUpload";

export default function AddMovieModal () {
    const { onClose } = useDisclosure();
    const [fileSelected, setFileSelected] : [string, Dispatch<SetStateAction<string>>] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [movieSaved, setMovieSaved] = useState(false);
    const [showDesktopVariant] = useMediaQuery('(min-width: 680px)');

    const handleClose = ( closeModalCallback : Function ) => {
        closeModalCallback();
        onClose();
        setFileSelected('');
        setMovieTitle('');
        setMovieSaved(false);
    }
    
    const handleSaveMovie = () => {
        const localMovies = localStorage.getItem('movies');
        const newMovie = {
            title: movieTitle,
            img: fileSelected, 
        }
        if (localMovies) {
            let localMoviesJson = JSON.parse(localMovies);
            localMoviesJson.localMovies.push(newMovie);
            localStorage.setItem('movies', JSON.stringify(localMoviesJson));
        } 
        else {
            let localMovies = [];
            localMovies.push(newMovie);
            localStorage.setItem('movies', JSON.stringify({ localMovies }));
        }
        setMovieSaved(true);
    }

    return(
        <>
        <ChakraProvider resetCSS={false}>
            <ModalContext.Consumer>
                { ({modalIsOpen, openModal, closeModal}) => (
                    <>
                    <Modal 
                        isOpen={modalIsOpen} 
                        onClose={() => handleClose(closeModal)} 
                        id='add-movie-modal' 
                        useInert={false}
                        size={ showDesktopVariant ? '3xl' : 'full' }
                        isCentered={true}>
                        
                        <ModalOverlay bg='#00000070'/>

                        <ModalContent bg='#242424' 
                        paddingTop={ showDesktopVariant ? 0 : 100 }>
                        {
                            !movieSaved ?
                            <>
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
                                <FileUpload onFileUpload={ setFileSelected } />

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
                                    onChange={ (e) => setMovieTitle(e.target.value) }
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
                                    disabled={ !fileSelected || !movieTitle }
                                    onClick={handleSaveMovie}
                                    minWidth={250}
                                >
                                    Subir película
                                </Button>

                                {   !showDesktopVariant &&
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
                                        onClick={ () => handleClose(closeModal)}
                                        background='none'
                                        border='1px solid #fff'
                                        color='#fff'
                                        minWidth={250}
                                    >
                                        Salir
                                    </Button>
                                }

                            </ModalBody>
                            </>
                            : 
                            <ModalBody color='white' textAlign='center' letterSpacing={4}>
                                <Heading as='h1' className='brand'>
                                    <Text><b>Lite</b>flix</Text>
                                </Heading>
                                <Text fontSize={24}>
                                    ¡Felicitaciones!
                                </Text>
                                <Text fontSize={20}>
                                    {movieTitle} fue correctamente subida.
                                </Text>

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
                                    onClick={ () => location.reload() }
                                    minWidth={250}
                                >
                                    Ir a home
                                </Button>
                            </ModalBody>
                        }
                        </ModalContent>
                    </Modal>
                    </>
                )}
            </ModalContext.Consumer>
        </ChakraProvider>
        </>
    )
}