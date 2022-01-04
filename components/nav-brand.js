import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBrand = ({ logo }) => {
  return (
    <div>
      <Link href="/">
        <a className="">
          <div className="h-16 w-64 relative">
            <Image
              src={logo.url}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
              className="object-left"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavBrand;
