import React from 'react';
import { useColorMode, Box, SimpleGrid, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import classNames from 'classnames';

import '../styles/AboutMe.scss';
import {
    AboutMeData,
    TopSkillsData,
    ExperienceData,
    MajorProjectsData
} from './data/AboutMeData.js';
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
    const data = ExperienceData();
    const { colorMode } = useColorMode();

    return (
        <div className="section">
            {SectionContent(data.title)}
            <br />
            <SimpleGrid minChildWidth="500px" spacing="30px">
                {ProjectCards(data.experiences, colorMode)}
            </SimpleGrid>
        </div>
    );
}

function MajorProjectsSection() {
    const data = MajorProjectsData();
    const { colorMode } = useColorMode();

    return (
        <div className="section">
            {SectionContent(data.title)}
            <br />
            <SimpleGrid minChildWidth="500px" spacing="30px">
                {ProjectCards(data.projects, colorMode)}
            </SimpleGrid>
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

function ProjectCards(projects, colorMode) {
    const cards = [];

    projects.forEach((project) => {
        cards.push(
            <Box
                className={classNames('section-project-card', {
                    light: colorMode == 'light',
                    dark: colorMode == 'dark'
                })}>
                {project.image}
                {project.image ? <br /> : <></>}
                <Text className="card-title">{project.title}</Text>
                <Text className="card-subtitle">{project.subtitle}</Text>
                <br />
                <UnorderedList className="card-list">
                    <ListItem className="list-item">
                        <Text className="label">{ProjectCardListItems(project.bulletPoints)}</Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        );
    });

    return cards;
}

function ProjectCardListItems(items) {
    const listItems = [];

    items.forEach((listItem, index) => {
        listItems.push(
            <ListItem className="list-item" key={index}>
                <Text className="label">{listItem}</Text>
            </ListItem>
        );
    });

    return listItems;
}

export default AboutMe;
