import { Flex } from "@chakra-ui/react";
import MovieThumbnail from "../movieThumbnail";

export default function FeaturedMovies({movies} : {movies? : any}) {
    return(
        <Flex direction='column' gap={15}>
            {
                movies &&
                movies?.map( (movie: any, index: number) => {
                    return(
                        <MovieThumbnail 
                            { ...movie }
                            key={index}
                        />
                    )
                })
            }
            
        </Flex>
    )
}