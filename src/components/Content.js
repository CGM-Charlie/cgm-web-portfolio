import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';

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
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </GridItem>
            </Grid>
        </div>
    );
}

export default Content;
