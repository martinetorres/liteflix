import { Flex, Image } from "@chakra-ui/react";

export default function 
    ImageIcon(
        { boxSize, iconWidth, iconHeight, img } : 
        { boxSize: number, iconWidth?: number, iconHeight?: number, img: string}
    ) 
{
    return (
        <Flex boxSize={boxSize} justifyContent='center' alignItems='center'>
            <Image w={iconWidth} h={iconHeight} src={`/img/icons/${img}.png`} />
        </Flex>
    )
}