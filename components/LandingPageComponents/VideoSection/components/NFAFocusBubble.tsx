import Image from 'next/image';
import React, { useRef } from 'react';

const NFAFocusBubble = ({ text = 'NFA FOCUS', PartnersSectionRef }: any) => {
  const handleClick = () => {
    if (PartnersSectionRef.current) {
      PartnersSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };
  return (
    <div
      onClick={handleClick}
      className=" w-[133px] md:w-[191px]   gap-[11px] absolute -top-[20px] right-[19px] xl:right-[64px] xl:-top-[31px] cursor-pointer">
      <div className="relative w-full h-full bubble ">
        <Image
          className="absolute top-[1px] left-[1px] xl:left-[15px] flash"
          src="/static/images/hero/green-dot.svg"
          alt=""
          width="44"
          height="44"
        />
        <Image
          className="absolute top-[15px] left-[45px] xl:left-[59px] hidden md:block"
          src="/static/images/videoSection/wifiIcon.svg"
          alt=""
          width="14"
          height="14"
        />
        <div className="min-w-[60px] text-left pl-[11px] xl:pl-[37px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default NFAFocusBubble;
