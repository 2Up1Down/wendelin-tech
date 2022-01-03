import React from 'react';
import { RichText, Link } from 'prismic-reactjs';
import Image from 'next/image';

const SectionSnap = ({ slice }) => {
  console.log(slice.items);
  return (
    <section className="bg-slate-100">
      <div className="container flex bg-slate-300 p-2">
        {slice?.items?.map((snap, i) => (
          <div key={i}>
            <div className="flex-1 flex flex-col justify-start">
              <div className="">
                <h1 className="text-center">
                  <RichText render={snap.title} />
                </h1>
              </div>
              <div>
                <RichText render={snap.description} />
              </div>
              <div className="bg-black text-white  border-none rounded">
                <a href={Link.url(snap.buttonLink)} className="text-white p-2">
                  {snap.buttonText}
                </a>
              </div>
            </div>
            <div className="flex-1  ">
              <img src={snap.image.url} alt={snap.image.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSnap;
