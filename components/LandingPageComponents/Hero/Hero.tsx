import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import HeroContent from './components/HeroContent';
import HeroBgImages from './components/HeroBgImages';
import HeroSideIcon from './components/HeroSideIcon';

function Hero() {
  return (
    <div className="h-[721px] xl:h-[669px] w-screen  relative">
      <HeroBgImages />
      <HeroContent />
      <HeroSideIcon />
    </div>
  );
}

export default Hero;
