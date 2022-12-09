import { Flex } from "@chakra-ui/react";
import MovieThumbnail from "../movieThumbnail";

export default function FeaturedMovies() {
    return(
        <Flex direction='column' gap={15}>
            <MovieThumbnail />
            <MovieThumbnail />
            <MovieThumbnail />
            <MovieThumbnail />
        </Flex>
    )
}