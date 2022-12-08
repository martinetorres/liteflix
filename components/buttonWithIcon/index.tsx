import { AddIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import styles from './styles.module.css';

export default function ButtonWithIcon({ variant, border } : { variant: string, border?: boolean }) {
    switch (variant) {
        case 'secondary': {

        }
    }

    return( 
        <Flex className={styles.iconButton} alignItems='center'>
            <AddIcon color={'#fff'} />
            <Text color={'#fff'} paddingLeft={10}>
                Agregar Pelicula
            </Text>
        </Flex>
    )
}