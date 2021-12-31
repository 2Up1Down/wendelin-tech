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
        <p className="">
          <RichText render={subtitle} />
        </p>
      )}
    </header>
  );
};

export default Header;
