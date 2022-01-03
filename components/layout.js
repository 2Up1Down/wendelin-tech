import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ data, children }) => {
  const { headerLogo, menuLinks, footerLinks, footerLogo, footerText } = data;
  console.log(menuLinks);

  return (
    <>
      <Header menu={menuLinks} logo={headerLogo} />
      <main>{children}</main>
      <Footer logo={footerLogo} menu={footerLinks} info={footerText} />
    </>
  );
};

export default Layout;
