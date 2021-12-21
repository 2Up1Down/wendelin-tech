import React from 'react';
import { RichText, Link } from 'prismic-reactjs';
import Image from 'next/image';

const SectionSnap = ({ slice }) => (
  <section className="bg-slate-100">
    <div className="container flex bg-slate-300 p-2">
      <div className="flex-1 flex flex-col justify-start">
        <div className="">
          <h1 className="text-center">
            <RichText render={slice.primary.title} />
          </h1>
        </div>
        <div>
          <RichText render={slice.primary.description} />
        </div>
        <div className="bg-black text-white  border-none rounded">
          <a href={Link.url(slice.primary.buttonLink)} className="text-white p-2">
            {slice.primary.button}
          </a>
        </div>
      </div>
      <div className="flex-1  ">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      </div>
    </div>
  </section>
);

export default SectionSnap;
