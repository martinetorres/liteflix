import { Heading, Text } from "@chakra-ui/react";

export default function MovieUploadedMessage(
    { movieTitle } :
    { movieTitle: string }
) {
    return(
        <>
            <Heading as='h1' className='brand'>
                <Text><b>Lite</b>flix</Text>
            </Heading>
            <Text fontSize={24}>
                ¡Felicitaciones!
            </Text>
            <Text fontSize={20}>
                {movieTitle} fue correctamente subida.
            </Text>
        </>
    );
}