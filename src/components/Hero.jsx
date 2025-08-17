import React from "react";
import profilePic from "../assets/profile.png";
import { HERO_CONTENT } from "../constants";
import Resume from '../assets/resume.pdf'

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="hero_image flex justify-center lg:p-8">
            <img
              src={profilePic}
              width={350}
              alt="sikandar sayyad"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="hero_content w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-7xl text-blue-200">
              Sikandar Sammad Sayyad
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-green-300 rounded-full p-4 text-sm text-stone-800 mb-10 hover:scale-110 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
