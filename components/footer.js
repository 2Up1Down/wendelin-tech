import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import SocialIcon from './social-icon';

const Footer = ({ logo, menu, info, social }) => {
  return (
    <footer>
      <div className="container flex flex-col place-items-center">
        <div className="h-16 w-64 relative">
          <Image
            src={logo.url}
            alt={logo.alt}
            layout="fill"
            objectFit="contain"
            className="object-center"
          />
        </div>
        <RichText render={info} />
        <div className="flex flex-row gap-2">
          {social &&
            Object.keys(social).map((item) => (
              <SocialIcon key={item} channel={item} url={social[item]} />
            ))}
        </div>
        <p>
          <small>&#169; {new Date().getFullYear()} Wendelin Steiner Technologies</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
