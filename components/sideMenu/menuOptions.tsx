import { AddIcon } from "@chakra-ui/icons";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import ModalContext from "../../context/modalContext";
import ButtonWithIcon from "../buttonWithIcon";
import styles from './menuOptions.module.css';

export default function MenuOptions() {
    const menuOptions = [
        'Inicio',
        'Series', 
        'Películas',
        'Agregadas recientemente',
        'Populares',
        'Mis películas',
        'Mi lista',
    ];

    return(
        <UnorderedList color='white' fontSize={22} letterSpacing={4} padding={0} listStyleType='none' lineHeight='60px'>
            {
                menuOptions.map( (item: string) => {
                    return(
                        <ListItem className={styles.listItem}>
                            {item}
                        </ListItem>
                    )
                })
            }

            <ListItem className={styles.addMovieButton}>
                <ModalContext.Consumer>
                    { ({openModal})  => 
                        <ButtonWithIcon text='Agregar película' variant='secondary' icon={<AddIcon />} onClick={ () => openModal() } />
                    }
                </ModalContext.Consumer>
            </ListItem>

            
            <ListItem className={styles.listItem}>Cerrar sesión</ListItem>
        </UnorderedList>
    )
}