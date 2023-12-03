import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    vuejs,
    nodejs,
    mongodb,
    git,
    figma,
    nestjsIcon,
    angularIcon,
    expressjsIcon,
    nextjsIcon,
    storybookIcon,
    docker,
    airbus,
    airbusIcon,
    wevioo,
    weviooIcon,
    numeryx,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    // {
    //     id: "article",
    //     title: "Blog",
    // },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Nest JS",
        icon: nestjsIcon,
    },
    {
        name: "Angular",
        icon: angularIcon,
    },
    {
        name: "Express JS",
        icon: expressjsIcon,
    },
    {
        name: "Vue JS",
        icon: vuejs,
    },
    {
        name: "Next JS",
        icon: nextjsIcon,
    },
    {
        name: "Storybook",
        icon: storybookIcon,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },


];

const experiences = [
    {
        title: "Senior React.js Developer",
        company_name: "Airbus",
        icon: airbusIcon,
        iconBg: "#383E56",
        date: "October 2022 - Present",
        points: [
            "This is a web-based Gantt chart solution customized for Airbus.",
            "Collaborated with a team of 3 developers to design, develop and deploy a custom Gantt for Airbus, allowing the company to effectively plan and monitor ongoing projects.",
            "Using HTML, CSS, JavaScript and React to develop the application UI and frontend.",
            "Successfully identified and resolved several critical application issues, such as performance and security issues, using advanced debugging tools and working closely with the Airbus IT Security team.",
            "Completion of a project delivered on time and meeting customer requirements, while respecting Airbus quality and safety standardss.",
        ],
    },
    {
        title: "Senior Full Stack Developer (Node.js/React.js)",
        company_name: "OCR",
        icon: weviooIcon,
        iconBg: "#E6DEDD",
        date: "January 2022 - October 2022",
        points: [
            "Participation in technical documentation",
            "Implementation of the front-end architecture.",
            "Contribution to the design and development of new features",
            "Monitoring and implementation of development standards and best practices.",
            "Ensure the maintenance of the application and the correction of bugs.",
        ],
    },
    {
        title: "Senior Full Stack Developer (Node.js/React.js)",
        company_name: "TLF-NET",
        icon: weviooIcon,
        iconBg: "#383E56",
        date: "January 2021 - January 2022",
        points: [
            "Contribution to the design of the application.",
            "Participation in technical documentation.",
            "Forecast of time costing and distribution of tasks for my team.",
            "Implementation of the front-end and backend architecture.",
            "Integration of graphic charters in the front-end part.",
            "Contribute to the implementation of the integration chain (Jenkins and Docker).",
            "Development of the frontend application (React) and the backend application (nodejs).",
            "Monitoring and implementation of development standards and best practices.",
            "Coach, train and integrate a team of junior developers.",
            "Ensure the maintenance of the application and the correction of bugs.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Bilel is an outstanding talent who truly stood out for her ability to handle multiple tasks with ease. Her work had a significant impact on our team's productivity level, and I was impressed by her dedication to achieving results. Bilel is an excellent communicator and a pleasure to work with, and I highly recommend her for any role she may be pursuing.",
        name: "Ines Bouguerra",
        designation: "Software Engineer",
        company: "Numeryx",
        image: numeryx,
    },
];

const projects = [
    {
        name: "Airbus",
        description:
            "Development of a web-based Gantt chart application for Airbus, this is a web- based Gantt chart solution customized for Airbus.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "context",
                color: "pink-text-gradient",
            },
            {
                name: "Storybook,",
                color: "pink-text-gradient",
            },
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "sonarQube",
                color: "green-text-gradient",
            },
        ],
        image: airbus,
        icon: airbusIcon,
        source_code_link: "#",
    },
];

const articles = [];


export { services, technologies, experiences, testimonials, projects, articles};
