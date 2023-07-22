import Image from 'next/image';
import React from 'react';

type RoadMapContentCardProps = {
  quarter: number;
  year: number;
  phase: 'passed' | 'active' | 'upcoming';
  children: any;
};

function RoadMapContentCard({
  quarter = 2,
  year = 2022,
  phase = 'upcoming',
  children,
}: RoadMapContentCardProps) {
  const style =
    phase === 'active'
      ? 'bg-[#00FFC2] text-[#0E2D25]'
      : phase === 'passed'
      ? 'bg-transparentBG text-white'
      : phase === 'upcoming'
      ? 'bg-darkBG text-white'
      : '';

  return (
    <div className="flex flex-col items-center justify-center  w-[276px]">
      {quarter % 2 !== 0 && (
        <Image
          className="w-[23px] h-[17px] "
          src={`/static/images/roadmapSection/${
            phase === 'active'
              ? 'greenDiamond'
              : phase === 'upcoming'
              ? 'pinkDiamond'
              : 'tick'
          }.svg`}
          width={23}
          height={17}
          alt=""
        />
      )}
      <div className="w-[276px] mt-[15px]">
        <div
          className={`flex gap-[10px] font-minimum_wide text-[18px] items-center text-center w-full  justify-center ${
            phase === 'active' ? 'text-[#00FFC2]' : ''
          }`}>
          <Image
            className="w-[9.6px] h-[14.4px]"
            src={`/static/images/roadmapSection/headerTriangle${
              phase === 'active' ? '-green' : ''
            }.svg`}
            width={9.6}
            height={14.4}
            alt=""
          />
          <span>Q{quarter}</span>
          <span>{year}</span>
        </div>
        <div className={' font-BPdots mt-[13px] py-[10px] px-[15px] ' + style}>
          <ul className="list-disc list-outside pl-[15px] marker:text-white leading-[17px] tracking-[0.095em] text-[12px]">
            {children}
          </ul>
        </div>
      </div>
      {quarter % 2 === 0 && (
        <Image
          className="w-[23px] h-[17px] mt-[15px]"
          src={`/static/images/roadmapSection/${
            phase === 'active'
              ? 'greenDiamond'
              : phase === 'upcoming'
              ? 'pinkDiamond'
              : 'tick'
          }.svg`}
          width={23}
          height={17}
          alt=""
        />
      )}
    </div>
  );
}

export default RoadMapContentCard;
