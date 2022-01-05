import React from 'react';
import SectionHeader from '../../components/section-header';
import Partner from '../../components/partner';

const SectionPartners = ({ slice }) => {
  return (
    <section className="bg-gray-400">
      <div className="container flex flex-col items-center">
        <div>
          <SectionHeader title={slice.primary.title} subtitle={slice.primary.subtitle} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slice?.items?.map((partner, i) => (
            <Partner
              key={i}
              description={partner.description}
              name={partner.name}
              homepage={partner.homepage}
              logo={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
