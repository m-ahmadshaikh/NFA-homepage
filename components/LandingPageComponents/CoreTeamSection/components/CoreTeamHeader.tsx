import Image from 'next/image';
import React from 'react';

function CoreTeamHeader() {
  return (
    <div className="h-[293px] md:h-[395px] xl:w-[1416px] xl:mx-auto xl:mt-[121px] bg-[url('/static/images/coreTeamSection/headerImg.png')] md:bg-[url('/static/images/coreTeamSection/headerImg-md.png')] xl:bg-[url('/static/images/coreTeamSection/headerImg-xl.png')] relative font-Bitcrusher border-b-[6px] xl:border-l-[6px] xl:border-r-[6px] border-white">
      <div className="text-[30px] font-bold leading-[36px] pt-[101px] md:pt-[111px] xl:pt-[82px]  pl-[51px] md:pl-[365px] xl:pl-[628px]">
        /05
      </div>
      <div className="items-center md:flex gap-[22px] xl:gap-[41px] xl:items-center md:mx-auto md:w-max md:text-center ]">
        <Image
          src="/static/images/coreTeamSection/nfaLogo.svg"
          width="89"
          height="48"
          alt=""
          className="absolute transform -translate-x-1/2 top-[71px] left-1/2 md:translate-x-0 md:w-[148px] md:h-[80px] xl:w-[194px] xl:h-[195px] md:static"
        />

        <div className="text-[96px] xl:text-[128px] leading-[115px] font-bold text-center">
          CORE TEAM
        </div>
      </div>
    </div>
  );
}

export default CoreTeamHeader;
