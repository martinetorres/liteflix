import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

export default function MoviesDropdown() {
    return(
        <Flex direction='row' justifyContent='center' marginBottom={30}>
            <Heading as='h4'>
                Ver:
            </Heading>
            <Heading as='h4' fontWeight='bold'>
                Populares
            </Heading>
        </Flex>
    )
}