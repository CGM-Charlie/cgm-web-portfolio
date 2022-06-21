import React from 'react';
import { useColorMode, Grid, GridItem, Button, IconButton, Link } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import '../styles/Navbar.scss';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="navbar-content">
            <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                <GridItem className="home-row" colSpan={1}>
                    <Link href="https://github.com/CGM-Charlie">
                        <Button className="home-row-content" variant="link">
                            @CGM-Charlie
                        </Button>
                    </Link>
                </GridItem>
                <GridItem className="menu-row" colStart={2} colEnd={8}>
                    <ul className="menu-row-options">
                        <li>
                            <Button variant="link">Home</Button>
                        </li>
                        <li>
                            <Button variant="link">About Me</Button>
                        </li>
                        <li>
                            <Button variant="link">Contact</Button>
                        </li>
                    </ul>
                </GridItem>
                <GridItem>
                    <IconButton
                        className="darkmode-row"
                        onClick={toggleColorMode}
                        icon={getIcon(colorMode)}
                    />
                </GridItem>
            </Grid>
        </div>
    );
}

function getIcon(colorMode) {
    return colorMode === 'light' ? <MoonIcon /> : <SunIcon />;
}

export default Navbar;
