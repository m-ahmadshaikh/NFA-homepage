import Image from 'next/image';
import React from 'react';

const RightPlayDevSection = () => {
  return (
    <div className="h-[748px] md:h-[981px] xl:h-[1014px] basis-1/2  bg-[#DB38B9] relative pt-[54px] md:flex md:flex-col md:items-center">
      <Image
        className="absolute top-[37px] md:top-[198px] xl:hidden"
        src="/static/images/playDevSection/lines.svg"
        width={733}
        height={155}
        alt=""
      />{' '}
      <Image
        className="absolute xl:left-0 top-[37px] md:top-[198px] hidden xl:block"
        src="/static/images/playDevSection/lines-xl.svg"
        width={590}
        height={147}
        alt=""
      />
      <div className="px-[20px]">
        <div className="font-bold text-[60px] leading-[72px] uppercase  md:hidden">
          <span className="text-black"> +DEV </span>
          AND EARN
        </div>
        <Image
          className="mx-auto pt-[50px] md:pt-[350px] xl:hidden"
          src="/static/images/playDevSection/devIcon.svg"
          width={100}
          height={70}
          alt=""
        />
        <Image
          className="mx-auto pt-[50px] md:pt-[350px] hidden xl:block"
          src="/static/images/playDevSection/devIcon.svg"
          width={128}
          height={89}
          alt=""
        />
        <div className="pt-[54px] xl:pt-[70px] md:max-w-[346px] xl:max-w-[476px] md:pt-[45px]  text-center font-ProximaNova leading-[29px] text-base xl:text-[20px]">
          Submit your game for free.
          <br /> Should your application be successful (subject to
          quality-checks by our panel comprised of web2 and web3 gaming
          experts), we will host it on our platform and YOU get paid in
          <b>
            {' '}
            USDC per
            <br className="xl:hidden" /> play.
          </b>
          <br />
          <br /> <b> Zero</b> web3 knowledge needed, we handle integration.
        </div>

        <div
          className="py-[10px] mb-[50px] md:mb-0  px-[37px] w-[334px] xl:w-[226px] h-[47px] xl:h-[56px] grid place-items-center font-Ocraext text-base uppercase mt-[42px] bg-[#555555] text-[#888888] mx-auto"
          style={{
            boxShadow: '4px 4px 0px #FFFFFF',
          }}>
          Coming Soon
        </div>
      </div>
    </div>
  );
};

export default RightPlayDevSection;
