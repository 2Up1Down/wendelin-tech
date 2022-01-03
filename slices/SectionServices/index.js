import React from 'react';
import Header from '../../components/header';
import Service from '../../components/service';

const SectionServices = ({ slice }) => {
  return (
    <section className="bg-gray-400">
      <div className="container flex flex-col items-center">
        <div>
          <Header title={slice.primary.title} subtitle={slice.primary.description} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slice?.items?.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
