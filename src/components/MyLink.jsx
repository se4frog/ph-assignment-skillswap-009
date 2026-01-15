import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLink = ({ children, className = '', to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex justify-center items-center gap-1.5 hover:text-[#f8eb6060] ${className} ${
          isActive ? 'text-[#fae502]!' : ''
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
