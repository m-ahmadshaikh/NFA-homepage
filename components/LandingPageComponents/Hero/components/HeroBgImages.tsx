import Image from 'next/image';
import React from 'react';

const HeroBgImages = () => {
  return (
    <>
      <Image
        src="/static/images/hero/bg-hero-sm.svg"
        fill
        className="absolute object-cover md:hidden -z-50"
        alt=""
      />
      <Image
        src="/static/images/hero/bg-hero-md.svg"
        fill
        className="absolute hidden object-cover md:block xl:hidden -z-50"
        alt=""
      />
      <Image
        src="/static/images/hero/bg-hero-lg.svg"
        fill
        className="absolute hidden object-cover xl:block -z-50"
        alt=""
      />
    </>
  );
};

export default HeroBgImages;
