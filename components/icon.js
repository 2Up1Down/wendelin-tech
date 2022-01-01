import React from 'react';
import Image from 'next/image';

const Icon = ({ icon }) => {
  if (!icon.url) return <></>;

  return (
    <div className="relative aspect-square w-1/2 rounded-full overflow-hidden mb-2">
      <Image
        src={icon.url}
        alt={icon.alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default Icon;
