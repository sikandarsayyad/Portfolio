import project0 from "../assets/projects/project-0.webp";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1+ years of hands-on experience, I have honed my skills in front-end technologies like React and Angular, as well as back-end technologies like Node.js, Express.Js MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const EXPERIENCES = [
  {
    year: "Aug 2025 - Current",
    role: "Full Stack Developer",
    company: "Whizfortune Software Solution.",
    description: `Worked on diverse full-stack projects including e-commerce platforms, car selling websites, and ERP solutions. Built responsive frontends with React & Tailwind CSS and scalable backends using Node.js & MySQL. Implemented secure authentication, rolebased access, automated emails, and developed dashboards to enhance usability and business efficiency.

    `,
    technologies: ["React Js", "Tailwind","Bootstrap", "ExpressJs", "Mysql", "MongoDB"],
  },
  {
    year: "Aug 2024 - Feb 2025",
    role: "Full Stack Developer",
    company: " Borgword Technology Pvt Ltd.",
    description: `Built full-stack applications using React, Node.js, MySQL, and MongoDB, where I worked extensively on developing UI components with React (using Hooks and Props) and integrating them with backend APIs. My experience also includes writing SQL queries.

    `,
    technologies: ["React Js", "Angular", "MongoDB", "Tailwind","Bootstrap", "NodeJs"],
  },
];

export const PROJECTS = [
  {
    title: "Simian Training ERP (Live project)",
    image: project0,
    description:
      "Built full-stack ERP system for training centers with authentication, role-based access, and CRUD operations. Developed responsive UI in React + Tailwind; backend in Node.js + MySQL. Integrated Nodemailer for password reset & account communication.Added admin dashboard for real-time monitoring.",
    technologies: ["ExpressJs", "React Js", "Tailwind", "Mysql"],
    link: "https://simianinternational.com/international-scaffolder/",
  },
  {
    title: "E - Commerce Website",
    image: project1,
    description:
      "A modern, responsive E-Commerce Shop built with React, Vite, and Tailwind CSS. It features product listings, a detailed product page, and a functional shopping cart with dynamic updates. Fully responsive UI and smooth user experience.",
    technologies: ["HTML", "React Js", "Tailwind"],
    link: "https://e-commerce-shop-website.netlify.app/",
  },
  {
    title: "Celestia Perfume Website",
    image: project2,
    description:
      "The celestia perfume website is a responsive Angular app styled with Tailwind CSS. It features smooth scroll animations using ScrollReveal.js. Designed to showcase celestia perfume, the site offers a clean UI and is deployed on Netlify for fast, seamless performance.",
    technologies: ["HTML", "Angular", "Tailwind"],
    link: "https://celestiaperfume.netlify.app/",
  },
  {
    title: "Indoor Plant Website",
    image: project3,
    description:
      "The Indoor Plant Website is a responsive Angular app styled with Tailwind CSS. It features smooth scroll animations using ScrollReveal.js and interactive sliders with Swiper.js.",
    technologies: ["HTML", "Angular", "Tailwind"],
    link: "https://indoor-plant.netlify.app/",
  },
  {
    title: "To-Do List app",
    image: project4,
    description:
      "Built a responsive To-Do List app using Angular, TypeScript, and Bootstrap with a clean and modern UI. Users can add, complete, and delete tasks, with real-time updates and smart filtering (All / Active / Completed). Task data is stored locally in the browser using localStorage for offline access.",
    technologies: ["HTML", "Angular", "Bootstrap", "TypeScript"],
    link: "https://angular-bootstrap-todo-list.netlify.app/",
  },
];

export const CONTACT = {
  address: "Hadapsar, Pune, Maharashtra IN",
  phoneNo: "+91 8605027351 ",
  email: "sayyadsikandar475@gmail.com",
};
