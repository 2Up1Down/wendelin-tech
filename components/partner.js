import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

const Partner = ({ name, description, logo, homepage }) => {
  return (
    <article>
      <div>
        {name && <h3>{name}</h3>}
        {logo?.url && (
          <div className="relative aspect-square w-1/2 overflow-hidden mb-2">
            <Image
              src={logo.url}
              alt={logo.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}
        {description && <RichText render={description} />}
      </div>
    </article>
  );
};

export default Partner;
