// Nav.js
import React from 'react';

import '../styles/animations.css';
import useFadeIn from '../hooks/useFadeIn.js';
import '../styles/nav.css';
import NavItem from '../itemComponents/NavItem';
import { navData } from '../data/navData';

function Nav() {
  const fadeRef = useFadeIn({ threshold: 150 });

  return (
    <div id='nav' className='nav-wrap d-flex py-5 nav-img'>
      <div ref={fadeRef} className='fade-in-left d-flex flex-column align-items-start justify-content-evenly z-2'>
        <h1 className='text-white'>{navData.title}</h1>
        <h4 className='text-white'>{navData.subtitle}</h4>
        <div className='d-flex w-25'>
          {navData.buttons.map((button, index) => (
            <div key={index} className={index === 0 ? 'me-1' : ''}>
              <NavItem 
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

export default Nav;