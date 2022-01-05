import React from 'react';
import { RichText } from 'prismic-reactjs';
import SectionHeader from '../../components/section-header';
import Image from 'next/image';

const Text = ({ slice }) => {
  return (
    <section className="py-12">
      <div className="container flex flex-col items-center">
        <div>
          <SectionHeader title={slice.primary.title} subtitle={slice.primary.subtitle} />
        </div>

        {slice.variation === 'text' && (
          <div className="">
            <RichText render={slice.primary.text} />
          </div>
        )}

        {['textImageRight', 'textImageLeft'].includes(slice.variation) && (
          <div
            className={`flex flex-row gap-4 ${
              slice.variation === 'textImageLeft' && 'flex-row-reverse'
            }`}
          >
            <div className="flex-1">
              <RichText render={slice.primary.text} />
            </div>

            {slice.primary.image.url && (
              <div className="flex-1 relative w-full">
                <Image
                  src={slice.primary.image.url}
                  alt={slice.primary.image.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Text;
