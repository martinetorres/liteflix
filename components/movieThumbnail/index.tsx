import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import RoundedButton from "../roundedButton";

export default function MovieThumbnail() {
    return(
        <Container position='relative'>
            <Image 
                objectFit='cover'
                src='/img/main_background.png' 
                w={220}
                h={146}
            />

            <Flex position='absolute' top={0} left={0} boxSize='100%' alignItems='center' justifyContent='flex-end' direction='column'>
                <RoundedButton />

                <Heading as='h5' marginTop={20} marginBottom={15}>
                    House of cards
                </Heading>
            </Flex>
        </Container>
    )
}