import React from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Image from 'next/image';

const CallToAction = ({ slice }) => {
  return (
    <section className="background-cta">
      <div className="container flex flex-col h-screen text-white justify-center items-center">
        <div className="h-64 w-64 relative">
          <Image
            src={slice.primary.iconImage.url}
            alt={slice.primary.iconImage.alt}
            layout="fill"
            objectFit="contain"
            className="caret-amber-400 text-green-500 bg-green-300"
          />
        </div>
        <RichText render={slice.primary.title} />
        <RichText render={slice.primary.description} />
        <button>
          <Link href={slice.primary.buttonLink}>
            <a>{slice.primary.buttonLabel}</a>
          </Link>
        </button>
      </div>
      <style jsx>{`
        .background-cta {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${slice.primary.backgroundImage.url}) no-repeat center;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
