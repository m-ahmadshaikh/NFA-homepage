import Image from 'next/image';
import React from 'react';

const CustomAccordian = ({
  isOpen,
  buttonText,
  panelText,
  onClick,
  id,
}: any) => {
  return (
    <>
      <button
        style={{ textShadow: '2px 2px 0px #FFFFFF' }}
        className={`flex  font-bold font-BPdots uppercase items-center leading-[24px] text-[26px] text-[#50C5FB]   justify-between w-full bg-[#000]  h-[64px] ${
          isOpen ? ' border-b-2 border-[#404040]' : ''
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
        {...(isOpen && { 'aria-controls': id })}>
        {buttonText}
        {isOpen ? (
          <Image
            src="/static/images/roadmapPage/upArrow.svg"
            alt=""
            width={30}
            height={18}
          />
        ) : (
          <Image
            src="/static/images/roadmapPage/downArrow.svg"
            alt=""
            width={30}
            height={18}
          />
        )}
      </button>
      {isOpen && (
        <div className="bg-[#000000]  w-full h-full py-[20px] font-ProximaNova text-[16px] leading-[29px]">
          {panelText}
        </div>
      )}
    </>
  );
};

export default CustomAccordian;
