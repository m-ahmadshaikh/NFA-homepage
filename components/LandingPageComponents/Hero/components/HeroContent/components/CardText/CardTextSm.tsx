import React from 'react';
import TypeIt from 'typeit-react';

const CardTextSm = () => {
  return (
    <div className=" z-20 md:hidden   md:text-left font-Ocraext leading-[22px] text-[12px]  font-normal h-[110px] md:h-[154px] ">
      <TypeIt
        classname="mt-[44px] md:mt-[22px] mb-[30px]"
        options={{
          cursorChar: '|',
          speed: 50,
          waitUntilVisible: true,
          cursor: false,
        }}>
        {`// INITIATING `}
        <span className="text-[#00FFC2]">
          PASS_HOLDERS_ACCESS + PUBLIC_ACCESS
          <br />
        </span>
        {`// UNITY COMPONENT `}
        <span className="text-[#FF8A00] xl:hidden">
          NOT LOADED <br />
        </span>

        <span className="xl:hidden">{`// GAMES NOT COMPATIBLE WITH THIS DEVICE.\n`}</span>
      </TypeIt>
    </div>
  );
};

export default CardTextSm;
