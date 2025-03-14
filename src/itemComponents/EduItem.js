// src/components/EduItem.js
import React from 'react';

function EduItem({ title, descriptions }) {
  return (
    <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-start">
      <h3 className="text-white">{title}</h3>
      {descriptions.map((desc, index) => (
        <h4 key={index} className="text-white">
          - {desc}
        </h4>
      ))}
    </div>
  );
}

export default EduItem;