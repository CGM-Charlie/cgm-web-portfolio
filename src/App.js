import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Theme from './Theme';
import Content from './components/Content';

function App() {
    return (
        <ChakraProvider theme={Theme}>
            <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
            <Content />
        </ChakraProvider>
    );
}

export default App;
