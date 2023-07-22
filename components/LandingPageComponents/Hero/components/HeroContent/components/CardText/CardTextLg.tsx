import React from 'react';
import TypeIt from 'typeit-react';

const CardTextLG = () => {
  return (
    <div className=" z-20  hidden lg:block md:text-left font-Ocraext leading-[22px] text-[12px]  font-normal h-[110px] md:h-[154px] ">
      <TypeIt
        classname="mt-[44px] md:mt-[22px] mb-[30px]"
        options={{
          cursorChar: '█',
          speed: 50,
          waitUntilVisible: true,
          cursor: true,
        }}>
        <span className="hidden md:block"> {`-\n`}</span>
        {`// INITIATING `}
        <span className="text-[#00FFC2]">
          PASS_HOLDERS_ACCESS + PUBLIC_ACCESS
          <br />
        </span>
        {`// UNITY COMPONENT `}

        <span className="hidden xl:inline">
          LOADED <br />
        </span>
        <span className="hidden xl:block">{`// KEY NOT REQUIRED.`}</span>
        <span className="hidden xl:block">{`// MEGA-OP-TYPE LAPTOP NOT REQUIRED.`}</span>
        <span className="hidden md:block"> {`// ...\n`}</span>
      </TypeIt>
    </div>
  );
};

export default CardTextLG;
