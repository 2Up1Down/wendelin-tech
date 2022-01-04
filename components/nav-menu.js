import React from 'react';
import NavItem from './nav-item';

const NavMenu = ({ menu }) => {
  return (
    <div className="hidden sm:block">
      <ul className="flex space-x-4">
        {menu.map((item, i) => (
          <NavItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
