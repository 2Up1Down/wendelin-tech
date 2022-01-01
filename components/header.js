import React from 'react';
import { RichText } from 'prismic-reactjs';

const Header = ({ title, subtitle }) => {
  return (
    <header>
      {title && (
        <h2 className="text-2xl">
          <RichText render={title} />
        </h2>
      )}
      {subtitle && (
        <h4 className="">
          <RichText render={subtitle} />
        </h4>
      )}
    </header>
  );
};

export default Header;
