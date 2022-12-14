import { Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import PlayButton from "../playButton";
import CoverImage from "./coverImage";
import RatingAndYear from "./ratingAndYear";

export default function MovieThumbnail(
    {
        backdrop_path,
        title,
        vote_average,
        release_date,
        img,
    } :
    {
        backdrop_path?: string,
        title: string,
        vote_average?: number,
        release_date?: string,
        img?: string,
    }
) {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <Container 
            position='relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor='pointer'>
            
            <CoverImage isHovered={isHovered} backdrop={backdrop_path} img={img} />

            <Flex 
            position='absolute' 
            top={0}
            left={0} 
            boxSize='100%' 
            alignItems='center' 
            justifyContent={isHovered ? 'center' : 'flex-end'} 
            direction={isHovered ? 'row' : 'column'}
            flexWrap={'nowrap'}
            textAlign={isHovered ? 'left' : 'center'}
            paddingLeft={5}
            paddingRight={5}>

                <PlayButton size={isHovered ? 28 : 40} />

                <Heading as='h5' marginTop={20} marginBottom={15} marginLeft={isHovered ? 5 : 0}>
                    {title}
                </Heading>

            </Flex>

            <RatingAndYear isHovered={isHovered} stars={vote_average} release_date={release_date} />
        </Container>
    )
}