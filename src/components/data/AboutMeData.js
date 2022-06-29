import React from 'react';
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
