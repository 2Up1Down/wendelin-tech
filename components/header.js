import React, { useState } from 'react';
import NavBrand from './nav-brand';
import MobileNavIcon from './mobile-nav-icon';
import NavMenu from './nav-menu';
import LanguageSwitcher from './language-switcher';

const Header = ({ altLangs, menu, logo }) => {
  const [visibleNav, setVisibleNav] = useState(true);

  const handleNavVisibility = () => setVisibleNav(!visibleNav);

  return (
    <header>
      <nav className="bg-white shadow-lg">
        <div className="container">
          <div className="flex justify-between py-4 place-items-center">
            <NavBrand logo={logo} />
            <LanguageSwitcher altLangs={altLangs} />
            <MobileNavIcon isVisible={visibleNav} onClick={handleNavVisibility} />
            <NavMenu menu={menu} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
