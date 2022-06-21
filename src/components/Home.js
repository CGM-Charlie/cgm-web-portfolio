import React, { Component } from 'react';
import { Text } from '@chakra-ui/react';

import '../styles/Home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home-content">
                <Text className="main-title">Hi, My Name Is Charlie</Text>
                <Text className="main-subtitle">Frontend Developer, Gaming Enthusiast</Text>
                <Text className="main-subtitle">Currently working @ Patio23</Text>
                <br></br>
                <Text className="main-paragraph">
                    Currently pursuing my Bachelor Degree in Computer Science, Passionate about UI
                    and UX. Work experience making Web and Android Apps
                </Text>
            </div>
        );
    }
}

export default Home;
