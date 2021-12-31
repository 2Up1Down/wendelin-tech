import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';

const Testimonial = ({ testimonial }) => {
  const { image, citation, author, position } = testimonial;
  return (
    <figure className="flex flex-col items-center">
      <div className="relative aspect-square w-1/2 rounded-full overflow-hidden mb-2">
        <Image
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <blockquote className="text-sm text-center">
        <RichText render={citation} />
      </blockquote>
      <figcaption>
        <cite className="text-base text-gray-700">{author}</cite>
        <div className="text-xs relative text-gray-500">{position}</div>
      </figcaption>
    </figure>
  );
};

export default Testimonial;
