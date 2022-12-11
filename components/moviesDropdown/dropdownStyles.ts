import { StylesConfig } from 'react-select';

const mainFontColor = '#ffffff';
const mainBackgroundColor = '#242424';

export const dropdownStyles: StylesConfig = {
    control: (styles) => ({ 
        ...styles, 
        backgroundColor: 'transparent',
        color: mainFontColor,
        border: 'none',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 4,
        boxShadow: 'none',
    }),
    menu: (styles) => ({
        ...styles,
        backgroundColor: mainBackgroundColor,
        width: 180,
        left: -30,
    }),
    singleValue: (styles) => ({
        ...styles,
        color: mainFontColor,
        fontWeight: 'bold',
    }),
    placeholder: (styles) => ({
        ...styles,
        color: mainFontColor,
        outline: 'none',
    }),
    option: (styles, { isSelected }) => ({
        ...styles,
        color: mainFontColor,
        backgroundColor: mainBackgroundColor,
        letterSpacing: 4,
        backgroundImage: isSelected ? 'url(/img/dropdown_selected.png)' : 'none',
        backgroundSize: ['12px', '8px'],
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'calc(100% - 10px)',
        backgroundPositionY: '13px',
        fontWeight: isSelected ? 'bold' : 'normal',
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    dropdownIndicator: () => ({
        color: mainFontColor,
        paddingLeft: 0,
        width: 16,
        height: 16,
        paddingBottom: 24,
    }),
}
