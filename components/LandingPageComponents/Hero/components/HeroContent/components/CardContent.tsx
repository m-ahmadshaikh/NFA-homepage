import Image from 'next/image';
import React from 'react';
import { CardTextLG, CardTextMd, CardTextSm } from './CardText';
import BottomText from './BottomText';
import TextField from './TextField';

const CardContent = () => (
  <div className="md:mx-auto md:py-[50px] md:px-[90px] relative md:w-[676px] md:h-[331px]  md:bg-[url('/static/images/hero/hero-card-container.svg')]">
    <Image
      className="hidden md:block xl:hidden hero-image blink"
      src="/static/images/hero/orange-dot.svg"
      alt=""
      width="44"
      height="44"
    />

    <Image
      className="hidden xl:block hero-image blink"
      src="/static/images/hero/green-dot.svg"
      alt=""
      width="44"
      height="44"
    />
    <CardTextSm />
    <CardTextMd />
    <CardTextLG />
    <div className="z-20 md:flex md:gap-[18px]  w-min xl:w-full mx-auto ">
      <TextField text="Pass holders" passHolder={true} />
      <TextField text="Public Access" passHolder={false} />
    </div>
    <BottomText />
  </div>
);

export default CardContent;
