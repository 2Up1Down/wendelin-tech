import React from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Image from 'next/image';

const SectionSnap = ({ slice }) => {
  // console.log(slice.items.description);
  return (
    <section className="max-h-screen overflow-y-scroll snap-y snap-mandatory container-snap">
      <div className="">
        {slice?.items?.map((snap, i) => (
          <article key={i} className="h-screen snap-center odd:bg-gray-100 even:bg-white">
            <div className="container flex place-items-center h-full">
              <div className="flex-1 flex flex-col justify-start">
                {snap.title && <h2 className="">{snap.title}</h2>}
                {snap.subtitle && <h4 className="">{snap.subtitle}</h4>}
                {snap.description && <RichText render={snap.description} />}
                {snap.buttonLink && (
                  // <Link href={snap.buttonLink}>
                  //   <a className="">{snap.buttonText}</a>
                  // </Link>
                  <a>--here comes the button link--</a>
                )}
              </div>
              <div className="flex-1">
                <img src={snap.image.url} alt={snap.image.alt} />
              </div>
            </div>
          </article>
        ))}
      </div>
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .container-snap::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .container-snap {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default SectionSnap;
