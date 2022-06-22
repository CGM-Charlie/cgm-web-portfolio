import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Theme from './Theme';
import Content from './components/Content';

function App() {
    return (
        <ChakraProvider theme={Theme}>
            <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
            <Routes>
                <Route path="/home" element={<Content></Content>} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
