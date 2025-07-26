import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Angular, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const EXPERIENCES = [
  {
    year: "Nov 2024 - Apr 2025",
    role: "Full Stack Developer",
    company: " Borgword Technology",
    description: `Developed and deployed modern web applications using Angular, React, TypeScript, Tailwind CSS, and Bootstrap.

    Built a full-featured E-Commerce website with dynamic cart functionality and a responsive UI.

    Created product showcase websites with ScrollReveal.js animations and Swiper.js sliders for interactive user experiences.

    Built and integrated Node.js backend APIs to handle dynamic data and RESTful services.

    Ensured all apps were mobile-responsive, performance-optimized, and followed clean code practices with Git-based version control.

`,
    technologies: ["React Js", "Angular", "MongoDB", "Tailwind","Bootstrap", "Node"],
  },
];

export const PROJECTS = [
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
