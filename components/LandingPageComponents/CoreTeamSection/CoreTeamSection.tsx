import Image from 'next/image';
import React from 'react';
import CoreTeamHeader from './components/CoreTeamHeader';
import CoreTeamContent from './components/CoreTeamContent';
import CoreTeamCredits from './components/CoreTeamCredits';

function CoreTeamSection() {
  return (
    <div className="h-[1951px] md:h-[1046px] xl:h-[1126px] bg-[#2A0E24] relative xl:p-1 z-0">
      <CoreTeamHeader />
      <CoreTeamContent />
      <CoreTeamCredits />
    </div>
  );
}

export default CoreTeamSection;
