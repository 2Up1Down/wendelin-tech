import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ data, altLangs, children }) => {
  const { headerLogo, menuLinks, footerLinks, footerLogo, footerText } = data;

  return (
    <>
      <Header menu={menuLinks} logo={headerLogo} altLangs={altLangs} />
      <main>{children}</main>
      <Footer logo={footerLogo} menu={footerLinks} info={footerText} />
    </>
  );
};

export default Layout;
