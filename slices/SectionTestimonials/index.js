import React from 'react';
import { RichText } from 'prismic-reactjs';

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
        </div>
      ))}
    </div>
  </section>
);

export default SectionTestimonials;
