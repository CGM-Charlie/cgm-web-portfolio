import React, { Component } from 'react';
import { Text } from '@chakra-ui/react';

import '../styles/Home.scss';
import Background3D from './Background3D';

class Home extends Component {
    render() {
        return (
            <>
                <div className="home-content">
                    <Text
                        bgGradient="linear(to-r, #ee0979, #ff6a00)"
                        bgClip="text"
                        className="main-title">
                        Hi, My Name Is Charlie
                    </Text>
                    <Text className="main-subtitle">Software Engineer, Gaming Enthusiast</Text>
                    <Text className="main-subtitle">Currently working @ Patio23</Text>
                </div>
                <Background3D />
            </>
        );
    }
}

export default Home;
