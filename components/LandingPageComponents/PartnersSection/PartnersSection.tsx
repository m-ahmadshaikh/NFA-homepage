import Image from 'next/image';
import React from 'react';
import Carousel from './components/Carousel';
import { useWindowSize } from '../../../hooks/useWindowSize';

function PartnersSection({ PartnersSectionRef }: any) {
  return (
    <div
      ref={PartnersSectionRef}
      className="h-[547px] md:h-[532px] xl:h-[549px] bg-cover bg-[url('/static/images/partnersSection/headerImg.png')] md:bg-[url('/static/images/partnersSection/headerImg-md.png')] lg:bg-[url('/static/images/partnersSection/headerImg-xl.png')] relative">
      <PartnersSectionImages />
      <PartnersSectionContent />
      <PartnersSectionSlick />
      <div className="font-Bitcrusher text-[20px] leading-[22px] font-bold uppercase mt-[80px] md:mt-[18px] text-center">
        (DRAg/Swipe for more)
      </div>
    </div>
  );
}

function PartnersSectionSlick() {
  return (
    <div className="pt-[59px] pb-[23px]">
      <Carousel />
    </div>
  );
}

function PartnersSectionContent() {
  return (
    <div className="flex items-start gap-[12px]  px-[20px] md:pl-[124px] xl:pl-[470px] relative z-10 font-Bitcrusher">
      <div className="relative z-10 text-[30px] leading-[36px] pt-[63px] md:pt-[90px] xl:pt-[93px]">
        /06
      </div>
      <div className="relative z-10 text-[60px] md:text-[80px] leading-[56px] md:leading-[87px] pt-[63px] md:pt-[83px] xl:pt-[85px]">
        PARTNERS & BACKERS
      </div>
    </div>
  );
}
function PartnersSectionImages() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const size = useWindowSize();

  const handleScroll = () => {
    console.log(window.scrollY);
    if (size.width && size.width < 600) {
      setScrollPosition(window.scrollY - 5800);
      return;
    }
    setScrollPosition(window.scrollY - 5400);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translationY = scrollPosition * 0.2;

  return (
    <Image
      className="z-0 absolute top-[14px] left-[59px] md:top-[57px] xl:top-[63px] xl:left-[450px] h-[288px] w-[234px] "
      width={274}
      height={138}
      src="/static/images/partnersSection/triangle.png"
      alt=""
      style={{ transform: `translateY(${-translationY}px)` }}
    />
  );
}

export default PartnersSection;
