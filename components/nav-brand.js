import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBrand = ({ logo }) => {
  console.log(logo);
  return (
    <div>
      <Link href="/">
        <a className="flex place-items-center gap-2">
          <div className="h-8 w-24 relative">
            <Image src={logo.url} alt={logo.alt} layout="fill" objectFit="cover" />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavBrand;
