import React from "react";
import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="pb-4 overflow-x-hidden">
      <h2 className="project_top my-20 text-center text-4xl font-DancingScript">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-10 flex flex-wrap gap-8 lg:justify-center w-full">
              <div className="project_image w-full lg:w-1/3 p-3">
              <a href={project.link} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded-3xl"
                />
              </a>
              </div>
              <div className="project_content w-full max-w-xl lg:w-2/3 p-3">
                <a href={project.link} target="_blank">
                  <h3 className="mb-2 font-semibold text-2xl text-green-400">{project.title}</h3>
                </a>
                <p className="mb-4 text-stone-400">{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      key={index}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
