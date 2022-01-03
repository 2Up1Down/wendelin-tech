import React from 'react';
import Testimonial from '../../components/testimonial';
import SectionHeader from '../../components/section-header';

const SectionTestimonials = ({ slice }) => {
  return (
    <section className="bg-gray-100">
      <div className="container flex flex-col items-center">
        <div>
          <SectionHeader title={slice.primary.title} subtitle={slice.primary.description} />
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
