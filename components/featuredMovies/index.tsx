import { Flex } from "@chakra-ui/react";
import MovieThumbnail from "../movieThumbnail";

export default function FeaturedMovies() {
    return(
        <Flex position='absolute' direction='column' gap={10}>
            <MovieThumbnail />
            <MovieThumbnail />
            <MovieThumbnail />
            <MovieThumbnail />
        </Flex>
    )
}