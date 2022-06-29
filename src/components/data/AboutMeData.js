import React from 'react';
import { Image } from '@chakra-ui/react';
import {
    SiHtml5,
    SiJavascript,
    SiSass,
    SiReact,
    SiGraphql,
    SiMongodb,
    SiGit,
    SiNodedotjs,
    SiAndroid,
    SiCplusplus,
    SiPython,
    SiKotlin
} from 'react-icons/si';
import genusDashboard from '../../images/genus-dashboard.png';

export function AboutMeData() {
    const aboutMeData = {
        title: 'Hi There, I am Charlie Mora',
        subtitle: 'Junior Software Engineer',
        paragraphs: [
            `
            Hi, I am Charlie Mora and I am a Software Engineer. I am currently persuing
            Bachelor Degree in Computer Science @ Tec de Monterrey. I am a Design Enthusiast
            Enthusiast with experience building Web and Mobile Applications
            `,

            `
            My work revolve arount Web development and Mobile Development on Android.
            Javascript, HTML and CSS with the help of frameworks like React or UI React
            React or UI libraries like Chakra (used for this portfolio!) or Semi Design.
            Android Development work with Jetpack Compose with Kotlin. Also, I have worked
            worked with other technologies like Express-JS and Graphql to build RESTful
            MongoDB for desiging and managing databases.
            `,

            `
            On my free time I enjoy playing many videogames and play some music I enjoy
            genres of videogames, from the very simple Tetris to the more complex Fantasy, I
            aspire to be soon a game developer in the near in the near in the near future! I
            also enjoy to play the bass and saxophone to relax after working after working
            on my projects.
            `
        ]
    };

    return aboutMeData;
}

export function TopSkillsData() {
    const topSkillsData = {
        title: 'Top Skills',
        skills: [
            {
                icon: <SiJavascript className="icon" />,
                label: 'JavaScript'
            },
            {
                icon: <SiHtml5 className="icon" />,
                label: 'HTML'
            },
            {
                icon: <SiSass className="icon" />,
                label: 'CSS/SASS'
            },
            {
                icon: <SiReact className="icon" />,
                label: 'React'
            },
            {
                icon: <SiGraphql className="icon" />,
                label: 'Graphql'
            },
            {
                icon: <SiMongodb className="icon" />,
                label: 'MongoDB'
            },
            {
                icon: <SiGit className="icon" />,
                label: 'Git'
            },
            {
                icon: <SiNodedotjs className="icon" />,
                label: 'Node.js'
            },
            {
                icon: <SiAndroid className="icon" />,
                label: 'Jetpack Compose'
            },
            {
                icon: <SiCplusplus className="icon" />,
                label: 'C++'
            },
            {
                icon: <SiPython className="icon" />,
                label: 'Python'
            },
            {
                icon: <SiKotlin className="icon" />,
                label: 'Kotlin'
            }
        ]
    };

    return topSkillsData;
}

export function ExperienceData() {
    const experienceData = {
        title: 'Experience',
        experiences: [
            {
                title: 'Android Developer Intern @ Patio23',
                subtitle: 'Jan 2022 - present',
                image: null,
                bulletPoints: [
                    'Development of the Urbium Mobile Application for Android devices',
                    'Developed application UI and UX components using Jetpack Compose pattern',
                    'Connected Urbium backend services with Apollo Graphql and Room',
                    'Developed Unit Testing Routines for UI and Internal Services'
                ]
            },
            {
                title: 'Web Developer Intern @ Patio23',
                subtitle: 'Sept 2021 - Jan 2022',
                image: null,
                bulletPoints: [
                    'Development and Maintenance of components for Intelligable Web Graphql',
                    'Developed a quote generator for the existing projects and purchase orders orders available in the application',
                    'Developed a dashboard to visualize and update the balance of ongoing projects'
                ]
            }
        ]
    };

    return experienceData;
}

export function MajorProjectsData() {
    const majorProjectsData = {
        title: 'Major Projects',
        projects: [
            {
                title: 'Genus Defect Clusterization Tool for Cemex',
                subtitle: 'Feb 2022 - Jun 2022',
                image: <Image src={genusDashboard} />,
                bulletPoints: [
                    'Development of a fullstack application using JavaScript, React, Graphql, Python and MongoDB',
                    `Clusterization of defects encountered during CemexGo development non-supervized learning learning learning with K-means on Python`,
                    `Developed Web clien File Management and Dashboard site with React`,
                    `Developed Backend microservices with Express-JS and Graphql `
                ]
            }
        ]
    };

    return majorProjectsData;
}
