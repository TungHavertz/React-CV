// Nav.js
import React from 'react';

import useFadeIn from '../../hooks/useFadeIn.js';
import '../../styles/animations.css';
import styles from './header.css'
import HeaderItem from './HeaderItem.js';
import { headerData } from './headerData.js';

function Header() {
  const fadeRef = useFadeIn({ threshold: 150 });

  return (
    <div id='nav' className='nav-wrap d-flex py-5 nav-img'>
      <div ref={fadeRef} className='fade-in-left d-flex flex-column align-items-start justify-content-evenly z-2'>
        <h1 className='text-white'>{headerData.title}</h1>
        <h4 className='text-white'>{headerData.subtitle}</h4>
        <div className='d-flex w-25'>
          {headerData.buttons.map((button, index) => (
            <div key={index} className={index === 0 ? 'me-1' : ''}>
              <HeaderItem  
                text={button.text}
                to={button.to}
                className={button.className}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Header;