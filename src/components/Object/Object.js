// src/components/Object.js
import React from 'react';

import './object.css';
import '../../styles/animations.css';
import useFadeIn from '../../hooks/useFadeIn.js';
import ObjectItem from './ObjectItem.js'; // Đường dẫn tùy thuộc thư mục bạn chọn
import objectData from './objectData.js';

function Object() {
  const fadeLeftRef = useFadeIn({ threshold: 150 }); // Ref cho div bên trái
  const fadeRightRef = useFadeIn({ threshold: 150 }); 

  return (
    <div className="p-5">
      <div className='d-flex justify-content-center'>
        <h1 className="obj-tilte">Object</h1>
      </div>
      <div className="row d-flex justify-content-evenly mx-5 px-5">
        <div className="col-lg-6 col-md-6 col-sm-12 ps-5">
          <div ref={fadeLeftRef} className="fade-in-left obj-img d-none d-sm-block"></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div ref={fadeRightRef} className= "fade-in-right timeline w-100 position-relative ">
            {objectData.map((item, index) => (
              <ObjectItem
                
                key={index}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <h1 className="obj-tilte mt-4">Maxim: When you want to give up, remember why you started</h1>
      </div>
    </div>
  );
}

export default Object;