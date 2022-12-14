import { Box, Flex, Heading } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Select from 'react-select';
import { dropdownStyles } from "./dropdownStyles";

export default function MoviesDropdown({onSelectCallback, selectedIndex} : {onSelectCallback: (newValue: any) => void, selectedIndex: number}) {

    const options = [
        { value: 'popular', label: 'Populares' },
        { value: 'mylist', label: 'Mi lista' },
      ];

    return(
        <Flex direction='row' justifyContent='center' alignItems='center' marginBottom={20} marginTop={120}>
            <Heading as='h4' marginTop={0} fontSize={18} paddingBottom={2}>
                Ver:
            </Heading>
            <Box>
                <Select 
                    options={options} 
                    defaultValue={options[selectedIndex]} 
                    styles={dropdownStyles} 
                    isSearchable={false} 
                    instanceId='select-movie-type'
                    onChange={ onSelectCallback }
                />
            </Box>
        </Flex>
    )
}