// src/components/Projects.js
import React from 'react';

import '../styles/animations.css';
import useFadeIn from '../hooks/useFadeIn.js';
import '../styles/project.css';
import ProjectsItem from '../itemComponents/ProjectItem.js'; // Đường dẫn tùy thuộc thư mục bạn chọn
import projectsData from '../data/projectData.js';

function Projects() {
  const fadeRef = useFadeIn({ threshold: 150 });
  return (
    <div className="project-bg d-flex justify-content-center ">
      <div ref={fadeRef} className="fade-in d-flex flex-column align-items-start justify-content-evenly z-2 project-wrap">
        <h1 className="project-title">Personal Project</h1>
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