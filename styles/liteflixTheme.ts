const desktopBreakpoint = '1280px';

export const theme = {
    styles: {
        global: {
            '*': {
                fontFamily: 'BebasNeue',
                fontWeight: 'normal',
            },
            b: {
                fontWeight: 'bold',
            },
            h2: {
                fontSize: { base: '76px', desktop: '120px' },
                lineSpacing: '12px',
                letterSpacing: '16px',
                fontWeight: 700,
                margin: 0,
                lineHeight: { base: '90px', desktop: '130px' },
            },
            'h1, h2, h3': {
                color: '#64EEBC',
                textTransform: 'uppercase',
            },
            'h4, h5': {
                color: '#ffffff',
                letterSpacing: '4px',
                fontWeight: 400,
                textTransform: 'uppercase',
                fontSize: '20px',
                marginBottom: 0,
                paddingLeft: 4,
                lineHeight: '20px',
            },
            'h4 b': {
                fontWeight: 700,
            },
            'h5': {
                fontSize: '16px',
                lineHeight: '16px',
            },
            '.brand': {
                color: '#64EEBC',
                fontWeight: 400,
                fontSize: 34,
                letterSpacing: 4,
            },
        }   
    },
    breakpoints: {
        desktop: desktopBreakpoint
    },
    transitionDefaults: {
        enter: {
            duration: 10
        }
    }
};