import React from 'react';
import { RichText } from 'prismic-reactjs';
import Testimonial from '../../components/testimonial';

const SectionTestimonials = ({ slice }) => {
  console.log(slice.items[0].image.url);
  return (
    <section className="bg-gray-100">
      <div className="container flex flex-col items-center">
        <div>
          <h3 className="text-2xl">
            <RichText render={slice.primary.title} />
          </h3>

          <div>
            <RichText render={slice.primary.description} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slice?.items?.map((testimonial, i) => (
            <Testimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
