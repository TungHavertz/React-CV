// src/components/Projects.js
import React from 'react';
import useFadeIn from '../../hooks/useFadeIn.js';

import '../../styles/animations.css';
import './projects.css';
import ProjectsItem from './ProjectsItem.js';
import projectsData from './projectsData.js';

function Projects() {
  const fadeRef = useFadeIn({ threshold: 150 });
  return (
    <div className="project-bg d-flex justify-content-center ">
      <div ref={fadeRef} className="fade-in d-flex flex-column align-items-start justify-content-evenly z-2 project-wrap">
        <h1 className="project-title">Projects</h1>
        <div className=" row gy-5">
          {projectsData.map((project, index) => (
            <ProjectsItem
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;