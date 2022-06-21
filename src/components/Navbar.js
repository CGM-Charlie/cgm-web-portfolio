import React from 'react';
import { Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

function Navbar() {
    const { toggleColorMode } = useColorMode();

    return (
        <div>
            <Button onClick={toggleColorMode}> Darkmode Test </Button>
        </div>
    );
}

export default Navbar;
