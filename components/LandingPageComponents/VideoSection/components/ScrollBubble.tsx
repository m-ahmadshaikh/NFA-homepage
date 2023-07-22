import Image from 'next/image';
import React from 'react';

function ScrollBubble() {
  return (
    <Image
      className="absolute -top-[50px] left-1/2 right-1/2 -translate-x-1/2 hidden md:block cursor-pointer"
      src="/static/images/videoSection/scroll.svg"
      alt=""
      width="106"
      height="106"
    />
  );
}

export default ScrollBubble;
