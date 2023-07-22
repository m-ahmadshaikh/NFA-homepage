import Image from 'next/image';
import React from 'react';

function NewsHero() {
  return (
    <div className="mx-[161px]">
      <div className="flex items-center gap-[18px] mt-[54px] mb-[31px]">
        <Image
          src="/static/images/newsPage/wifi.svg"
          width={25}
          height={25}
          alt=""
        />
        <div className="font-Bitcrusher text-[30px] leading-[36px]">
          NFA FOCUS
        </div>
      </div>

      <div className="font-ProximaNova text-[16px] leading-[29px]">
        We’re not just another web3 project shooting for the stars.
        <br /> What we’ve done, speaks for itself.
        <br /> What we’re doing, remains unmatched.
      </div>
    </div>
  );
}

export default NewsHero;
