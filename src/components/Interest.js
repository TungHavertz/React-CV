// src/components/Hobbies.js
import React, { useEffect, useRef } from 'react';

import '../styles/interest.css';

import interestData from '../data/interestData.js';
import InterestItem from '../itemComponents/interestItem.js';

function Interest() {

  return (
    <div  className=" interest-bg  d-flex justify-content-center p-5">
      <div  className=" bg-white w-75 rounded-4">
          <div className="d-flex flex-column align-items-start p-5">
            <h1 className="px-5">My Interesting</h1>
            <div className="d-flex row px-4">
              {interestData.map((interest, index) => (
                <InterestItem
                  key={index}
                  icon={interest.icon}
                  title={interest.title}
                  description={interest.description}
                />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export default Interest;