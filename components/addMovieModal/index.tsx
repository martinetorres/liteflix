import { 
    ChakraProvider, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent,
    ModalHeader, 
    ModalOverlay, 
    useDisclosure, 
    useMediaQuery, 
    useTheme} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import ModalContext from "../../context/modalContext";
import FileUpload from "../fileUpload";
import BigButton from "../ui/bigButton";
import CustomInput from "../ui/customInput";
import MovieUploadedMessage from './movieUploadedMessage';

export default function AddMovieModal () {
    const { onClose } = useDisclosure();
    const [fileSelected, setFileSelected] : [string, Dispatch<SetStateAction<string>>] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [movieSaved, setMovieSaved] = useState(false);
    const [showDesktopVariant] = useMediaQuery('(min-width: 680px)');
    const theme = useTheme();

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

                        <ModalContent bg={ theme.colors.grayDark } 
                        paddingTop={ showDesktopVariant ? 0 : 100 }>
                        {
                            !movieSaved ?
                            <>
                            <ModalHeader 
                                color={ theme.colors.main } 
                                letterSpacing={4} 
                                textAlign='center'
                                marginTop={5}
                            >    
                                    Agregar Película
                            </ModalHeader>

                            <ModalCloseButton color='white' />
                            <ModalBody>
                                <FileUpload onFileUpload={ setFileSelected } />

                                <CustomInput onChangeCallback={ setMovieTitle } />

                                <BigButton 
                                    text='Subir pelicula'
                                    disabled={ !fileSelected || !movieTitle }
                                    onClick={handleSaveMovie}
                                />

                                {   !showDesktopVariant &&

                                    <BigButton 
                                        text='Salir'
                                        onClick={ () => handleClose(closeModal)}
                                        disabled={false}
                                        variant='secondary'
                                    />
                                }

                            </ModalBody>
                            </>
                            : 
                            <ModalBody color='white' textAlign='center' letterSpacing={4}>
                                
                                <MovieUploadedMessage movieTitle={movieTitle} />

                                <BigButton 
                                    text='Ir a home'
                                    onClick={ () => location.reload() }
                                    disabled={false}
                                />
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