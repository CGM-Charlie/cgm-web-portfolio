import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Navbar from './Navbar';
import Home from './Home';

import '../styles/Content.scss';

function Content() {
    return (
        <div className="page-content">
            <Grid
                templateAreas={`
                    "header"
                    "main"
                `}
                gridTemplateRows={'70px 100%'}
                height="100%">
                <GridItem area={'header'}>
                    <Navbar />
                </GridItem>
                <GridItem overflow={'scroll'} p="5" area={'main'}>
                    <Home />
                </GridItem>
            </Grid>
        </div>
    );
}

export default Content;
