import { Box, Flex, Text, Button } from "@chakra-ui/react";
import styles from './styles.module.css';

export default function ButtonWithIcon({ text, variant, hasBorder, icon } : { text: string, variant: string, hasBorder?: boolean, icon?: React.ReactNode }) {
    const background = variant === 'primary' ? '#242424' : 'none';

    return( 
        <Flex className={styles.iconButton} 
            alignItems='center' 
            backgroundColor={background}
            border={ hasBorder ? '1px solid #fff' : undefined }
            justifyContent='center'
            minWidth={250}
        >

            { icon && 
                <Box color={'#fff'}>
                    { icon }
                </Box>
            }

            <Text color={'#fff'} paddingLeft={10}>
                { text }
            </Text>

        </Flex>
    )
}