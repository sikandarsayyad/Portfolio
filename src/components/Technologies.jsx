import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import {
  RiAngularjsLine,
  RiCss3Line,
  RiHtml5Line,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandJavascript, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="technology_top my-20 text-center text-4xl font-DancingScript">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="tech_item">
          <RiReactjsLine
            className="text-7xl text-cyan-400 hover:scale-120 transition-all duration-300"
            title="ReactJs"
          />
        </div>
        <div className="tech_item p-4">
          <RiAngularjsLine
            className="text-7xl text-amber-300 hover:scale-120 transition-all duration-300"
            title="AnularJs"
          />
        </div>
        <div className="tech_item p-4">
          <SiMongodb
            className="text-7xl text-cyan-500 hover:scale-120 transition-all duration-300"
            title="MongoDB"
          />
        </div>
        <div className="tech_item p-4">
          <RiTailwindCssFill
            className="text-7xl text-red-700 hover:scale-120 transition-all duration-300"
            title="Tailwind"
          />
        </div>
        <div className="tech_item p-4">
          <FaNodeJs
            className="text-7xl text-green-500 hover:scale-120 transition-all duration-300"
            title="NodeJs"
          />
        </div>
        <div className="tech_item p-4">
          <TbBrandMysql
            className="text-7xl text-sky-700 hover:scale-120 transition-all duration-300"
            title="MySQL"
          />
        </div>
        <div className="tech_item p-4">
          <RiHtml5Line
            className="text-7xl text-sky-700 hover:scale-120 transition-all duration-300"
            title="HTML5"
          />
        </div>
        <div className="tech_item p-4">
          <RiCss3Line
            className="text-7xl text-sky-700 hover:scale-120 transition-all duration-300"
            title="CSS3"
          />
        </div>
        <div className="tech_item p-4">
          <TbBrandJavascript
            className="text-7xl text-sky-700 hover:scale-120 transition-all duration-300"
            title="JavaScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
