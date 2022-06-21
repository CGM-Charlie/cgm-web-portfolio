import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles: {
        global: (props) => ({
            body: {
                fontFamily: 'body',
                color: mode('gray.800', 'whiteAlpha.900')(props),
                bg: mode('purple.50', 'purple.900')(props),
                lineHeight: 'base'
            }
        })
    }
};

export default extendTheme(theme);
