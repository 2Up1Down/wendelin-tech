import React from 'react';
import SectionHeader from '../../components/section-header';
import Project from '../../components/project';

const SectionProjects = ({ slice }) => {
  return (
    <section>
      <div className="container flex flex-col items-center">
        <div>
          <SectionHeader title={slice.primary.title} subtitle={slice.primary.subtitle} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slice?.items?.map((item, i) => {
            const {
              project: { data: projectData },
            } = item;

            return <Project key={i} project={projectData} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
