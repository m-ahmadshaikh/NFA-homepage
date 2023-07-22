import Image from 'next/image';
import React from 'react';

function NewsCards() {
  return (
    <div className="mx-[161px] mt-[116px]">
      <div className="flex gap-[30px]">
        <Card
          imageUrl="/static/images/newsPage/adImage1.svg"
          text="NFARCADE ARE ENLISTED BY CITCAPX and achieve a successful raise from neo tokyo holding investors."
        />
        <Card
          imageUrl="/static/images/newsPage/adImage1.svg"
          text="NFA SELLS OUT WITH 1K PRE-SEASON PASSES NOW IN CIRCULATION. "
        />
        <Card
          imageUrl="/static/images/newsPage/adImage2.svg"
          text="NFARCADE ARE ENLISTED BY CITCAPX and achieve a successful raise from neo tokyo holding investors."
        />
      </div>
    </div>
  );
}

function Card({ text, imageUrl }: { text: string; imageUrl: string }) {
  return (
    <div>
      <Image src={imageUrl} width={303} height={159} alt="" />
      <div className="uppercase font-ProximaNova text-[16px] leading-[16px] font-bold w-[303px] mt-[27px]">
        {text}
      </div>
    </div>
  );
}
export default NewsCards;
