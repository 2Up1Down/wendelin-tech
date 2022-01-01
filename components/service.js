import React from 'react';
import Icon from './icon';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

const Service = ({ service }) => {
  const { title, description, image, icon, buttonText } = service;
  return (
    <article>
      <div>
        {icon && <Icon icon={icon} />}
        {title && <h3>{title}</h3>}
        {image.url && (
          <div className="relative aspect-square w-1/2 rounded-full overflow-hidden mb-2">
            <Image
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}
        {description && <RichText render={description} />}
        {buttonText && <button>{buttonText}</button>}
      </div>
    </article>
  );
};

export default Service;
