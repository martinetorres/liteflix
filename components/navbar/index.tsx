import { Flex, Heading } from "@chakra-ui/react";
import ButtonWithIcon from "../buttonWithIcon";

export default function Navbar() {
    return(
        <Flex position={'absolute'} zIndex={2} alignItems='center'>
            <Heading as='h1' className='brand'>
                <b>Lite</b>flix
            </Heading>
            
            <ButtonWithIcon variant='secondary' />
        </Flex>
    )
}