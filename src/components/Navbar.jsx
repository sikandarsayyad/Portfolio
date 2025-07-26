import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Leaf from "../assets/leaf-1.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-1 relative">
      <div className="leaf-1 absolute z-50 -left-20 top-0 opacity-50">
        <img
          src={Leaf}
          alt="leaf"
          width={250} 
        />
      </div>
      <div className="nav_logo flex flex-shrink-0 items-center ">
        <a
          href="/"
          aria-label="home"
          className="text-6xl font-DancingScript text-gradient ml-8"
        >
          SS
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sikandar-sayyad-69a23b20b/"
          target="_blank"
          rel="noopener nreferrer"
          aria-label="LinkedIn"
          className="hover:scale-120 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sikandarsayyad"
          target="_blank"
          rel="noopener nreferrer"
          aria-label="github"
          className="hover:scale-120 transition-all duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/918605027351?text=Hi%20I%20want%20to%20know%20more"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="whatsapp"
          className="hover:scale-120 transition-all duration-300"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/si_kandar4366/?igsh=YzljYTk1ODg3Zg%3"
          target="_blank"
          rel="noopener nreferrer"
          aria-label="instagram"
          className="hover:scale-120 transition-all duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
