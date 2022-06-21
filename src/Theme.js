import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const variantLink = (props) => {
    const { colorScheme: c } = props;
    if (c === 'gray') {
        return {
            fontWeight: 'italic',
            color: mode('gray.800', 'whiteAlpha.900')(props),
            _hover: {
                color: mode('gray.800', 'whiteAlpha.900')(props)
            }
        };
    }
};

const theme = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles: {
        global: (props) => ({
            body: {
                fontFamily: 'body',
                color: mode('gray.800', 'whiteAlpha.900')(props),
                bg: mode('gray.50', 'gray.900')(props),
                lineHeight: 'base'
            }
        })
    },
    components: {
        Button: {
            variants: {
                link: variantLink
            }
        }
    }
};

export default extendTheme(theme);
