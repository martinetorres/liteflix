import { Flex } from "@chakra-ui/react";
import MovieThumbnail from "../movieThumbnail";

export default function FeaturedMovies({popularMovies} : {popularMovies : any}) {
    return(
        <Flex direction='column' gap={15}>
            {
                popularMovies?.map( (movie: any, index: number) => {
                    return(
                        <MovieThumbnail 
                            title={movie.title}
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}
                            release_date={movie.release_date}
                            key={index}
                        />
                    )
                })
            }
            
        </Flex>
    )
}