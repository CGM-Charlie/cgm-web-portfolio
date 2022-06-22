import React, { Component } from 'react';
import { Text, Image } from '@chakra-ui/react';

import '../styles/AboutMe.scss';
import genusDashboard from '../images/genus-dashboard.png';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-content">
                <div className="section">
                    <Text
                        bgGradient="linear(to-r, #ee0979, #ff6a00)"
                        bgClip="text"
                        className="page-title">
                        Hi There! I am Charlie Mora
                    </Text>
                    <Text className="section-subtitle">Junior Software Engineer</Text>
                    <br />
                    <Text className="section-paragraph">
                        Hi, I am Charlie Mora and I am a Software Engineer. I am currently persuing
                        my Bachelor Degree in Computer Science @ Tec de Monterrey. I am a Design
                        Enthusiast with experience building Web and Mobile Applications
                    </Text>
                    <br />
                    <Text className="section-paragraph">
                        My work revolve arount Web development and Mobile Development on Android.
                        For web I use Javascript, HTML and CSS with the help of frameworks like
                        React or UI libraries like Chakra (used for this portfolio!) or Semi Design.
                        For Android Development work with Jetpack Compose with Kotlin. Also, I have
                        worked with other technologies like Express-JS and Graphql to build RESTful
                        APIs or MongoDB for desiging and managing databases.
                    </Text>
                    <br />
                    <Text className="section-paragraph">
                        On my free time I enjoy playing many videogames and play some music I enjoy
                        many genres of videogames, from the very simple Tetris to the more complex
                        JRPG like Xenoblade or Final Fantasy, I aspire to be soon a game developer
                        in the near future! I also enjoy to play the bass and saxophone to relax
                        after working on my projects.
                    </Text>
                </div>
                <br />
                <div className="section">
                    <Text
                        bgGradient="linear(to-r, #ee0979, #ff6a00)"
                        bgClip="text"
                        className="section-title">
                        Top Skills
                    </Text>
                    <ul className="section-list">
                        <li className="section-list-item">
                            <Text className="section-paragraph">Javascript</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">HMTL</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">CSS/SASS</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">React</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">Graphql</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">MongoDB</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">Git</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">Unity</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">Jetpack Compose</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">C++</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">Python</Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">Kotlin</Text>
                        </li>
                    </ul>
                </div>
                <br />
                <div className="section">
                    <Text
                        bgGradient="linear(to-r, #ee0979, #ff6a00)"
                        bgClip="text"
                        className="section-title">
                        Experience
                    </Text>
                    <Text className="section-subtitle">
                        Android Developer Intern @ Patio23 • Jan 2022 - present
                    </Text>
                    <ul className="section-list">
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Development of the Urbium Mobile Application for Android devices
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Developed application UI and UX components using Jetpack Compose
                                with Kotlin following an MVVC pattern
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Connected Urbium backend services with Apollo Graphql and Room
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Developed Unit Testing Routines for UI and Internal Services
                            </Text>
                        </li>
                    </ul>
                    <br />
                    <Text className="section-subtitle">
                        Web Developer Intern @ Patio23 • Sept 2021 - Jan 2022
                    </Text>
                    <ul className="section-list">
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Development and Maintenance of components for Intelligable Web
                                Portal using JavaScript, React, HTML, SASS and Graphql
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Developed a quote generator for the existing projects and purchase
                                orders available in the application
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Developed a dashboard to visualize and update the balance of ongoing
                                projects
                            </Text>
                        </li>
                    </ul>
                </div>
                <br />
                <div className="section">
                    <Text
                        bgGradient="linear(to-r, #ee0979, #ff6a00)"
                        bgClip="text"
                        className="section-title">
                        Major Projects
                    </Text>
                    <br />
                    <Image boxSize="50%" src={genusDashboard} />
                    <br />
                    <Text className="section-subtitle">
                        Genus Defect Clusterization Tool for Cemex • Feb 2022 - Jun 2022
                    </Text>
                    <ul className="section-list">
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Development of a fullstack application using JavaScript, React,
                                SASS, Express-JS, Graphql, Python and MongoDB
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Clusterization of defects encountered during CemexGo development
                                using natural language recognition with TF-IDF and non-supervized
                                learning with K-means on Python
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Developed Backend microservices with Express-JS and Graphql
                            </Text>
                        </li>
                        <li className="section-list-item">
                            <Text className="section-paragraph">
                                Developed Web clien File Management and Dashboard site with React
                            </Text>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AboutMe;
