import { Box, Text, useTheme } from "@chakra-ui/react";
import { theme } from "../../styles/liteflixTheme";
import styles from './styles.module.css';

export default function UploadProgress(
    { progress } : 
    { progress: number }) {
    
    return(
        <Box className={styles.fileUploadProgressContainer} color='white' fontSize={18} letterSpacing={4}>
            Cargando: { `${Math.round(progress * 100) / 100}%` }
            <Box w='100%' h='4px' bg='#fff' position='relative' marginTop={4}>
                <Box w={`${progress}%`} h='10px' position='absolute' bg={ theme.colors.main } top='-3px' transition='width 500ms linear' />
            </Box>

            <Box textAlign='right' marginTop={4}>
                {
                    progress < 100 ?
                    <Text>Cancelar</Text> :
                    <Text color={ theme.colors.main }>¡Listo!</Text>
                }
            </Box>
        </Box>
    )
}