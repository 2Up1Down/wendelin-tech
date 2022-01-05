import NextLink from 'next/link';
import React from 'react';
import { linkResolver } from '../prismicConfiguration';

const LanguageSwitcher = ({ altLangs = [] }) => {
  return (
    <ul>
      {altLangs.map((altLang) => (
        <li className="" key={altLang.id}>
          <NextLink locale={altLang.lang} href={linkResolver(altLang)}>
            <a className="">{altLang.lang}</a>
          </NextLink>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitcher;
