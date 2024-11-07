import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconCode} from "@tabler/icons-react";


const Info = {
    name: "Akshit Gupta",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer"],
    bio: "IT professional skilled in full-stack development and C++, with a CGPA of 8.96. Experienced in data structures, algorithms, competitive programming, and proficient in front-end and back-end technologies for building efficient systems."
}


const socialLinks = [
    { link: "https://github.com/akshit-1313", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/13akshit/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/akshit_gupta_13/", icon: IconBrandInstagram }, 
    { link: "https://leetcode.com/u/13Akshit/", icon: IconBrandLeetcode },
    { link: "https://www.codechef.com/users/akshitgupta13", icon: IconCode }
];
const ProjectInfo = [
    {
        title: "WorkLoom",
        desc: "Implemented a MERN stack-based job portal that features a secure login and signup system utilizing JWT authentication and bcrypt for enhanced security. Developed dynamic user interfaces and custom dashboards to facilitate seamless user interactions. Streamlined engagement by automating job notifications via email with NodeMailer, while building a scalable backend to support efficient job postings and application processes. This project highlights my proficiency in creating robust, secure web applications tailored to user needs.",
        image: "workloom.png",
        live: false,
        technologies: ["Node","React","MongoDB","HTML","CSS"],
        link: "https://github.com/akshit-1313/Workloom-site",
        github: "https://github.com/akshit-1313/Workloom-site"
    },
    {
        title: "PortFolio",
        desc: "Created a responsive portfolio utilizing React & Tailwind to effectively showcase technical skills and project work. The portfolio serves as a comprehensive overview of my capabilities, highlighting my professional achievements and providing contact information for prospective opportunities",
        image: "PortFolio.png",
        live: true,
        technologies: ["React",  "Tailwind", "Tabler-Icons","Mantine.dev"],
        link: "https://akshit-1313.github.io/Akshit-Portfolio/",
        github: "https://github.com/akshit-1313/Akshit-Portfolio"
    },
    {
        title: "BidBash",
        desc: "Developed the frontend of a dynamic IPL auction simulator using the MERN stack, enabling an interactive, real-time bidding experience for users to create custom cricket teams. Designed a responsive and visually engaging interface that facilitates seamless, live updates during the auction process.",
        image: "BidBash.png",
        live: false,
        technologies: ["HTML", "CSS", "JavaScript","React", "Node" ],
        link: "https://github.com/akshit-1313/",
        github: "https://github.com/akshit-1313/"
    },
    {
        title: "Excel Clone",
        desc: "Developed an Excel Clone using HTML, CSS and JavaScript",
        image: "Excel.png",
        live: false,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/akshit-1313/",
        github: "https://github.com/akshit-1313/"

    }
    
]
const SkillInfo = [
    {
        title: "Languages & Frameworks",
        skills: ["C", "C++", "JavaScript", "Node JS", "Express JS", "HTML", "CSS", "React JS", "Tailwind CSS", "Redux","TypeScript"]
    },
    {
        title: "Databases & Tools",
        skills: ["MySQL", "MongoDB", "Git", "Github", "VS Code", "Postman"]
    }
];

const ExperienceInfo = [
    {
        role: "Software Engineer Intern",
        company: "VVDN",
        date: "Jun 2024 - Aug 2024",
        desc: "I worked on Low Power Radio Units (LPRU) and Mid Power Radio Units (MPRU) developed by VVDN. My role involved setting up and configuring the boards, flashing firmware images, and optimizing the booting process for faster startups. I also conducted thorough testing to ensure performance and functionality. These efforts significantly improved the operational efficiency and reliability of the radio units.",
    },
    {
        role: "ML Intern",
        company: "Infowiz",
        date: "Jun 2023 - Aug 2023",
        desc: "Worked on a deep learning model for early mortality risk prediction using the MIMIC-III dataset. Leveraging Python and SQL, We achieved an 88% accuracy rate and an ROC AUC score of 60 by optimizing an artificial neural network through hyperparameter tuning."
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };
