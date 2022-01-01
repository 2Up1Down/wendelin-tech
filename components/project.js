import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

const Project = ({ project }) => {
  const { customer, title, extract, image, technologies, link } = project;
  return (
    <article>
      <div>
        {customer && <span>{customer}</span>}
        {title && <h3>{title}</h3>}
        {image?.url && (
          <div className="relative aspect-square w-1/2 mb-2">
            <Image
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}
        {extract && <RichText render={extract} />}
        {technologies && <p>{technologies}</p>}
        {link && <p>{link}</p>}
      </div>
    </article>
  );
};

export default Project;
