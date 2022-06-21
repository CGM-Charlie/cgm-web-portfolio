import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Navbar from './Navbar';
import '../styles/Home.scss';

function Home() {
    return (
        <div className="home-content">
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
                <GridItem overflow={'scroll'} p="2" bg="green.300" area={'main'}>
                    Content
                </GridItem>
            </Grid>
        </div>
    );
}

export default Home;
