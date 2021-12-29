import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

const SectionTestimonials = ({ slice }) => (
  <section className="bg-gray-100">
    <div>
      <h3 className="text-2xl">
        <RichText render={slice.primary.title} />
      </h3>

      <div>
        <RichText render={slice.primary.description} />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {slice?.items?.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="relative aspect-square w-1/2 rounded-full overflow-hidden mb-2">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="h2 text-lg text-center">{item.heading}</div>
          <div className="text-sm text-center">
            <RichText render={item.citation} />
          </div>
          <div className="text-base text-gray-700">{item.author}</div>
          <div className="text-xs relative text-gray-500">{item.position}</div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionTestimonials;
