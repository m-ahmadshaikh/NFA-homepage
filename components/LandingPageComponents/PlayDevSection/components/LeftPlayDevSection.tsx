import Image from 'next/image';
import React from 'react';

const LeftPlayDevSection = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(137.74deg, rgba(219, 56, 185, 0.2) 29.21%, rgba(0, 0, 0, 0) 94.32%), #050505',
      }}
      className="h-[1009px]  md:h-[981px] xl:h-[1014px] md:flex md:flex-col  md:items-center basis-1/2 pt-[54px] px-[20px]">
      <div className="text-[30px] leading-[36px] font-bold md:hidden">/03</div>
      <div className="font-bold text-[60px] leading-[72px] uppercase  md:hidden">
        <span className="text-[#DB38B9]"> +PLAY </span>
        AND EARN
      </div>
      <Image
        className="mx-auto pt-[50px] md:pt-[350px]  xl:hidden"
        src="/static/images/playDevSection/controller.svg"
        width={53}
        height={61}
        alt=""
      />{' '}
      <Image
        className="mx-auto pt-[50px] md:pt-[350px] hidden xl:block"
        src="/static/images/playDevSection/controller.svg"
        width={68}
        height={78}
        alt=""
      />
      <div className="pt-[54px] xl:pt-[85px] md:max-w-[346px] xl:max-w-[476px] text-center font-ProximaNova leading-[29px] text-base xl:text-[20px]">
        NFA is based on play-to-own and pay-to-play model, where gamers play
        games in the arcade, and earn tickets which can be exchanged for prizes
        ranging from stable coins to in-game assets such as limited-edition
        skins, or weapons, which you can further buy or sell.
        <br />
        <br /> Fancy your chances at winning a piece of NFArcades’
      </div>
      <div className="text-[#FFE999] text-[26px] xl:text-[36px] leading-[31px] w-full text-center pt-[22px]">
        $500,000 USDC PRIZE POOL? 🤑
      </div>
      <div
        className="py-[10px] mx-auto mb-[50px] md:mb-0 px-[37px] w-[334px] xl:w-[226px] h-[47px] xl:h-[56px] grid place-items-center font-Ocraext text-base uppercase mt-[22px]"
        style={{
          background:
            'linear-gradient(92.1deg, rgba(0, 0, 0, 0.39) 24.1%, rgba(0, 0, 0, 0) 90.61%), #DB38B9',
          boxShadow: '4px 4px 0px #FFFFFF',
        }}>
        Control Panel
      </div>
    </div>
  );
};

export default LeftPlayDevSection;
