import { Button } from "@chakra-ui/react";

export default function BigButton(
    { text, onClick, disabled, variant } :
    { text: string, onClick: () => void, disabled: boolean, variant?: string }) {

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
            color={variant === 'secondary' ? 'white' : '#242424'}
            _hover={{
                color: '#242424',
                background: '#ddd'
            }}
        >
            { text }
        </Button>
    )
}