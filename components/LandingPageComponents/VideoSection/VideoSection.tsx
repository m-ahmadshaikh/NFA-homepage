import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import VideoSectionContent from './components/VideoContentSection';
import NFAFocusBubble from './components/NFAFocusBubble';
import FAQBubble from './components/FAQBubble';
import ScrollBubble from './components/ScrollBubble';

function VideoSection({ PartnersSectionRef }: any) {
  return (
    <div className="relative h-[575px] md:h-[865px] xl:h-[790px] bg-cover bg-[#2A0E24] bg-[url('/static/images/videoSection/border.svg')]">
      <NFAFocusBubble PartnersSectionRef={PartnersSectionRef} />
      <FAQBubble />
      <ScrollBubble />
      <VideoSectionContent />
    </div>
  );
}

export default VideoSection;
