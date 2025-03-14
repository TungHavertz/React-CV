// src/subcomponents/ObjectItem.js (hoặc src/components/ObjectItem.js tùy bạn)
import React from 'react';

function ObjectItem({ number, title, description }) {
  return (
    <div className="timeline-item position-relative d-flex mb-5">
      <div className="number d-flex justify-content-center align-items-center position-relative">
        {number}
      </div>
      <div className="content ms-5 p-4 rounded">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default ObjectItem;