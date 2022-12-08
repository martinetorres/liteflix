import { Flex, Container, Heading, Image, Box } from "@chakra-ui/react";

export default function Slider() {
    return(
        <Container>
                <Image 
                    boxSize='100%'
                    objectFit='cover'
                    src='/img/main_background.png' 
                    alt='Featured movie'
                    position='absolute'
                    left={0}
                />

                <Flex position='absolute' direction={'column'} left={0} bottom={0} paddingBottom={50}>
                    <Box padding={50}>
                        <Heading as='h4'>
                            Original de <b>Liteflix</b>
                        </Heading>
                        <Heading as='h2' colorScheme={'brand'} textTransform={'uppercase'}>
                            La casa de papel
                        </Heading>
                    </Box>
                </Flex>
        </Container>
    )
}