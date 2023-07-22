import Image from 'next/image';
import React from 'react';

function PlayDevBGImages() {
  return (
    <>
      <div className="  left-1/2 transform -translate-x-1/2  absolute top-[60px]">
        <Image
          className=" pt-[50px]  hidden md:block"
          src="/static/images/playDevSection/title.svg"
          width={337}
          height={241}
          alt=""
        />
      </div>
      <div className="  left-1/2 transform -translate-x-1/2  absolute top-[438px] hidden md:block">
        <Image
          src="/static/images/playDevSection/line.svg"
          width={191}
          height={5}
          alt=""
        />
      </div>
    </>
  );
}

export default PlayDevBGImages;
