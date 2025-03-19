// src/subcomponents/ProjectsItem.js (hoặc src/components/ProjectsItem.js tùy bạn)
import React from 'react';

function ProjectsItem({ title, description, link }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 project-item">
      <h3 className="project-text">{title}</h3>
      <h4 className="project-text">
        {link ? (
          <a href={link} className="project-text text-decoration-none">
            {description}
          </a>
        ) : (
          description
        )}
      </h4>
    </div>
  );
}

export default ProjectsItem;