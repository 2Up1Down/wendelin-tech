import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

const SectionTestimonials = ({ slice }) => (
  <section>
    <div>
      <h3 className="text-2xl">
        <RichText render={slice.primary.title} />
      </h3>

      <div>
        <RichText render={slice.primary.description} />
      </div>
    </div>
    <div className="flex flex-row">
      {slice?.items?.map((item, i) => (
        <div key={i} className="">
          <span>{item.heading}</span>
          <RichText render={item.citation} />
          <span>{item.author}</span>
          <span>{item.position}</span>

          <img src={item.image.url} alt={item.image.alt} />
          <div className="relative aspect-square w-full">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionTestimonials;
