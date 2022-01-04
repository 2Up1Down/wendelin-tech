import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <header>
      {title && <h2 className="text-2xl">{title}</h2>}
      {subtitle && <h4 className="">{subtitle}</h4>}
    </header>
  );
};

export default SectionHeader;
