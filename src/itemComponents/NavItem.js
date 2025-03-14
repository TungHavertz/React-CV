// NavItem.js
import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ text, to, className }) => {
  return (
    <Link to={to} smooth={true} duration={200}>
      <button 
        type="button" 
        className={`btn px-3 fw-medium ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default NavItem;