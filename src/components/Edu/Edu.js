import React from 'react'
import styles from './edu.css'
import EduItem from './EduItem.js';
import eduData from './eduData.js'; 
function Edu() {
  return (
    <div className="edu-bg d-flex flex-column align-items-start justify-content-evenly ">
      <h1 className="text-white">Education</h1>
      <div className="row gy-5 d-flex justify-content-center">
        {eduData.map((item, index) => (
          <EduItem
            key={index}
            title={item.title}
            descriptions={item.descriptions}
          />
        ))}
      </div>
    </div>
  );
}
export default Edu