import Image from 'next/image';
import React from 'react';

function UserCard({
  text = 'dr. jpeg | ENO',
  rank = 'Founder',
  url = '/static/images/coreTeamSection/drJpeg.png',
  color,
}: {
  text: string;
  rank: string;
  url: string;
  color: string;
}) {
  return (
    <div className="font-Bitcrusher text-[44px] leading-[48px] uppercase font-bold text-center w-full flex flex-col items-center gap-[27px]">
      <Image src={url} width="160" height="160" alt="" className="" />
      <div className="w-[212px] ">
        <div className="text-[44px] leading-[48px] ">{text}</div>
        <div
          className={`text-[30px] leading-[33px] text-center text-[${color}]`}>
          {rank}
        </div>
      </div>
    </div>
  );
}
export default UserCard;
