import { Button, useTheme } from "@chakra-ui/react";

export default function BigButton(
    { text, onClick, disabled, variant } :
    { text: string, onClick: () => void, disabled: boolean, variant?: string }) {

    const theme = useTheme();

    return (
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
            disabled={disabled}
            onClick={onClick}
            minWidth={250}
            backgroundColor={variant === 'secondary' ? 'transparent' : '#fff'}
            border={variant === 'secondary' ? '1px solid #fff' : 'none'}
            color={variant === 'secondary' ? 'white' : theme.colors.grayDark }
            _hover={{
                color: theme.colors.grayDark,
                background: '#ddd'
            }}
        >
            { text }
        </Button>
    )
}