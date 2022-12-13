import { Box, Button, Flex, Text } from "@chakra-ui/react";
import styles from './styles.module.css';

export default function ButtonWithIcon(
        { text, variant, hasBorder, icon, onClick } 
        : 
        { text: string, variant: string, hasBorder?: boolean, icon?: React.ReactNode, onClick?: any }) 
    
    {

    let background = 'none';
    if (variant === 'primary') {
        background = '#242424';
    } else
    if (variant === 'secondary' && hasBorder) {
        background = '#24242460';
    }

    return( 
        <Button onClick={onClick} variant='link'>
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
        </Button>
    )
}