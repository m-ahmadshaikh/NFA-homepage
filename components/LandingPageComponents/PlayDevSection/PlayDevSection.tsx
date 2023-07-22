import Image from 'next/image';
import React from 'react';
import LeftPlayDevSection from './components/LeftPlayDevSection';
import RightPlayDevSection from './components/RightPlayDevSection';
import PlayDevBGImages from './components/PlayDevBGImages';

function PlayDevSection() {
  return (
    <div className="h-[1400px] md:h-[981px] xl:h-[1014px]  flex flex-col md:flex-row font-Bitcrusher relative">
      <LeftPlayDevSection />
      <RightPlayDevSection />
      <PlayDevBGImages />
    </div>
  );
}

export default PlayDevSection;
