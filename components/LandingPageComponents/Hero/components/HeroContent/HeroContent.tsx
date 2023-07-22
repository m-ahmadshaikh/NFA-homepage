import React from 'react';
import ContentText from './components/ContentText';
import CardContent from './components/CardContent';
const HeroContent = () => {
  return (
    <div className="z-50 py-[33px] md:py-[51px] md:pt-[51px] xl:pt-[115px] px-[20px]   text-center">
      <div className="xl:flex">
        <ContentText />
        <CardContent />
      </div>
    </div>
  );
};

export default HeroContent;
