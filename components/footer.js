import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';

import SocialIcon from './social-icon';
import { CustomLink } from '../utils/prismicHelpers';

const Footer = ({ logo, menu, info, social }) => {
  return (
    <footer>
      <div className="container flex flex-col place-items-center">
        {logo.url && (
          <div className="h-16 w-64 relative">
            <Image
              src={logo.url}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
              className="object-center"
            />
          </div>
        )}
        {info && <RichText render={info} />}
        {info && <RichText render={info} serializeHyperlink={CustomLink} />}

        {social && (
          <div className="flex flex-row gap-2">
            {Object.keys(social).map((item) => (
              <SocialIcon key={item} channel={item} url={social[item]} />
            ))}
          </div>
        )}

        <p>
          <small>&#169; {new Date().getFullYear()} Wendelin Steiner Technologies</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
