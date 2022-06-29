import React from 'react';
import { useColorMode, Box, SimpleGrid, Text, Image } from '@chakra-ui/react';
import classNames from 'classnames';

import '../styles/AboutMe.scss';
import genusDashboard from '../images/genus-dashboard.png';
import { AboutMeData, TopSkillsData } from './data/AboutMeData.js';
// import charliePic from '../images/charlie-kun.png';

function AboutMe() {
    return (
        <div className="about-content">
            {AboutMeSection()}
            <br />
            {TopSkillsSection()}
            <br />
            {ExperienceSection()}
            <br />
            {MajorProjectsSection()}
            <br />
            {AwardsAndLeadershipSection()}
        </div>
    );
}

function AboutMeSection() {
    const data = AboutMeData();

    return (
        <div className="section">
            {SectionContent(data.title, false, data.subtitle, data.paragraphs)}
        </div>
    );
}

function TopSkillsSection() {
    const data = TopSkillsData();
    const { colorMode } = useColorMode();

    return (
        <div className="section">
            {SectionContent(data.title)}
            <br />
            <SimpleGrid minChildWidth="250px" spacing="20px">
                {SkillCards(data.skills, colorMode)}
            </SimpleGrid>
        </div>
    );
}

function ExperienceSection() {
    return (
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
                        Developed application UI and UX components using Jetpack Compose pattern
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
                        Development and Maintenance of components for Intelligable Web Graphql
                    </Text>
                </li>
                <li className="section-list-item">
                    <Text className="section-paragraph">
                        Developed a quote generator for the existing projects and purchase orders
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
    );
}

function MajorProjectsSection() {
    return (
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
                        Development of a fullstack application using JavaScript, React, Graphql,
                        Graphql, Python and MongoDB
                    </Text>
                </li>
                <li className="section-list-item">
                    <Text className="section-paragraph">
                        Clusterization of defects encountered during CemexGo development
                        non-supervized learning learning learning with K-means on K-means on K-means
                        K-means on Python
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
    );
}

function AwardsAndLeadershipSection() {
    return (
        <div className="section">
            <Text
                bgGradient="linear(to-r, #ee0979, #ff6a00)"
                bgClip="text"
                className="section-title">
                Awards and Leadership
            </Text>
            <br />
            <ul className="section-list">
                <li className="section-list-item">
                    <Text className="section-paragraph">
                        Organizer and Producer for GameJam Internacional Contest @ Tec de May 2021
                    </Text>
                </li>
                <li className="section-list-item">
                    <Text className="section-paragraph">
                        Third Place in Data Challenge 2020 of the Data Science Club @ Tec de
                        Monterrey, MTY MEX, October 2020
                    </Text>
                </li>
                <li className="section-list-item">
                    <Text className="section-paragraph">
                        Organizer and streaming Producer for SAITC Game Jam Contest @ Tec de
                        Monterrey, MTY MEX, August 2020
                    </Text>
                </li>
            </ul>
        </div>
    );
}

/* 
PARAGRAPH SECTION COMPONENTS:

All components are independent from the content, so in case you need to modify the style of components of the page, 
you can do it without altering the content of the page itself

The content is externalized into personalized objects that are called at from a different file. In case that you need
to modify the content of a specific section, refer to the AboutMeData.js file

A paragraph is composed by:
- Title: String
- Subtitle: String
- Paragraphs: [String]
*/

function SectionContent(title, isHeadline, subtitle, paragraphs) {
    const content = [];

    if (title) {
        content.push(
            <Text
                bgGradient="linear(to-r, #ee0979, #ff6a00)"
                bgClip="text"
                className={isHeadline ? 'page-title' : 'section-title'}>
                {title}
            </Text>
        );
    }

    if (subtitle) {
        content.push(
            <>
                <Text className="section-subtitle">{subtitle}</Text>
                <br />
            </>
        );
    }

    if (paragraphs) {
        paragraphs.forEach((paragraph) => {
            content.push(
                <>
                    <Text className="section-paragraph">{paragraph}</Text>
                    <br />
                </>
            );
        });
    }

    return content;
}

function SkillCards(skills, colorMode) {
    const cards = [];

    skills.forEach((skill) => {
        cards.push(
            <Box
                className={classNames('section-skill-card', {
                    light: colorMode == 'light',
                    dark: colorMode == 'dark'
                })}>
                {skill.icon}
                <Text className="card-label">{skill.label}</Text>
            </Box>
        );
    });

    return cards;
}

export default AboutMe;
