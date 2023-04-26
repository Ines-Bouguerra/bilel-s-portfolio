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
    docker,
    idkids,
    ineas,
    medianet,
    idkidsIcon,
    ineasIcon,
    medianetIcon,
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
        name: "Vue JS",
        icon: vuejs,
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
        title: "React.js Developer",
        company_name: "Idkids",
        icon: idkids,
        iconBg: "#383E56",
        date: "February 2023 - April 2023",
        points: [
            "Contribution to the migration of the different payment methods of the IdKids site to React JS, using reusable React components and respecting good development practices",
            "Maintained the application by fixing bugs reported by users, updating dependencies, and optimizing performance.",
            "Followed development standards and best practices to ensure code quality and application scalability.",
            "Collaborated with the development team to resolve technical issues and share knowledge on new technologies and development best practices.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer (Node.js/React.js)",
        company_name: "MEDIANET-ATS",
        icon: medianet,
        iconBg: "#E6DEDD",
        date: "January 2023",
        points: [
            "Contribution to the design and development of new features of the application",
            "Monitoring and implementation of development standards and best practices.",
            "Implementation of technical tests: integration tests, unit tests",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Vue.js Developer",
        company_name: "INEAS National Health Accreditation Authority",
        icon: ineas,
        iconBg: "#383E56",
        date: "September 2021 - December 2022",
        points: [
            "Developing and maintaining web applications using Vue.js.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Ines is an outstanding talent who truly stood out for her ability to handle multiple tasks with ease. Her work had a significant impact on our team's productivity level, and I was impressed by her dedication to achieving results. Ines is an excellent communicator and a pleasure to work with, and I highly recommend her for any role she may be pursuing.",
        name: "Bilel Khadhraoui",
        designation: "Senior Software Engineer",
        company: "Numeryx",
        image: numeryx,
    },
];

const projects = [
    {
        name: "IDKIDS",
        description:
            "Migration of the different payment methods of the IdKids site to React JS, using reusable React components and respecting good development practices.",
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
        ],
        image: idkidsIcon,
        icon: idkids,
        source_code_link: "https://www.idkids.fr/",
    },
    {
        name: "MEDIANET-ATS",
        description:
            "Developing and maintaining applicant tracking system company witch organizes events where talents and recruiters can meet using Node.js and React.js.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "blue-text-gradient",
            }
        ],
        image: medianetIcon,
        icon: medianet,
        source_code_link: "https://app.atslik.com/",
    },
    {
        name: "INEAS",
        description:
            "Developing and maintaining web site of centralizing and exchanging data concerning the accreditation and management of visiting experts.",
        tags: [
            {
                name: "vuejs",
                color: "green-text-gradient",
            },
            {
                name: "vuex",
                color: "green-text-gradient",
            },
            {
                name: "vue-router",
                color: "green-text-gradient",
            },
        ],
        image: ineasIcon
    },
];

export { services, technologies, experiences, testimonials, projects };
