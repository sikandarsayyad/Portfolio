import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollReveal from "scrollreveal";
import ScrollUpBtn from "./components/ScrollUpBtn";




function App() {
  // Run ScrollReveal when component mounts
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: true,
    });

    sr.reveal(".nav_logo, .leaf-1", {
      origin: "left",
      delay: 200,
    });

    sr.reveal(".technology_top, .project_top, .experience_top, .contact_top", {
      delay: 300,
    });

    sr.reveal(".tech_item", {
      origin: "bottom",
      interval: 150,
      delay: 400,
    });

    sr.reveal(".hero_image", {
      scale: 0.5,
      delay: 200,
    });

    sr.reveal(".hero_content", {
      origin: "right",
      delay: 300,
    });

    sr.reveal(".project_image", {
      origin: "left",
      delay: 200,
    });

    sr.reveal(".project_content, .leaf-2", {
      origin: "right",
      delay: 400,
    });

    sr.reveal(".experience_content", {
      scale: 0.5,
      delay: 300,
    });

    sr.reveal(".contact", {
      origin: "bottom",
      delay: 400,
    });
  }, []);

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8 font-Jost">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        <ScrollUpBtn />
      </div>

    </div>
  );
}

export default App;
