import NextLink from 'next/link';
import React from 'react';
import { linkResolver } from '../prismicConfiguration';

const AltLangs = ({ altLangs = [] }) =>
  altLangs.map((altLang) => {
    return (
      <li className="" key={altLang.id}>
        <NextLink locale={altLang.lang} href={linkResolver(altLang)}>
          <a className="">{altLang.lang}</a>
        </NextLink>
        <style jsx>{``}</style>
      </li>
    );
  });

const LanguageSwitcher = ({ altLangs }) => <AltLangs altLangs={altLangs} />;

export default LanguageSwitcher;
