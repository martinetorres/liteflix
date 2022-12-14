import { Input } from "@chakra-ui/react";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export default function CustomInput(
    { onChangeCallback } :
    { onChangeCallback : Dispatch<SetStateAction<string>> }
) {

    const handleOnChange : ChangeEventHandler<HTMLInputElement> = (e) => {
        onChangeCallback(e.target.value);
        console.log({e})
    }

    return(
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
            onChange={ handleOnChange }
        />
    )
}