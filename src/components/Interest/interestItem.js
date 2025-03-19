// src/subcomponents/HobbiesItem.js (hoặc src/components/HobbiesItem.js tùy bạn)
import React from 'react';

function interestItem({ icon, title, description }) {
  return (
    <div className="col col-lg-4 col-sm-12">
      <i className={icon}></i>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
}

export default interestItem;