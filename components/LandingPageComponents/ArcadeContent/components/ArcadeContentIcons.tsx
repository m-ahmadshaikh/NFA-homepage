import Image from 'next/image';
import React from 'react';

function ArcadeContentIcons() {
  return (
    <div className="flex  items-center gap-[46px] md:gap-[14px] relative z-10 mx-auto  w-max mt-[66px] md:mt-[99px] ">
      <Image
        className="md:w-[156px] md:h-[221px]"
        src="static/images/arcadeContent/playGames.svg"
        alt=""
        width={77}
        height={121}
      />
      <Image
        className="hidden md:block xl:hidden"
        src="static/images/arcadeContent/spacer.svg"
        alt=""
        width={70}
        height={83}
      />
      <Image
        className="hidden  xl:block pb-[100px]"
        src="static/images/arcadeContent/spacer-lg.svg"
        alt=""
        width={129}
        height={83}
      />
      <Image
        className="md:w-[156px] md:h-[221px]"
        src="static/images/arcadeContent/earnTickets.svg"
        alt=""
        width={84}
        height={121}
      />
      <Image
        className="hidden md:block xl:hidden"
        src="static/images/arcadeContent/spacer.svg"
        alt=""
        width={70}
        height={0}
      />
      <Image
        className="hidden xl:block pb-[100px]"
        src="static/images/arcadeContent/spacer-lg.svg"
        alt=""
        width={129}
        height={83}
      />
      <Image
        className="md:w-[156px] md:h-[221px]"
        src="static/images/arcadeContent/winMoney.svg"
        alt=""
        width={75}
        height={121}
      />
    </div>
  );
}

export default ArcadeContentIcons;
