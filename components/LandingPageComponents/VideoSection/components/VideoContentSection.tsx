import Image from 'next/image';
import React from 'react';

const VideoSectionContent = () => {
  return (
    <div>
      <div className="relative w-[186px] text-center top-[99px] md:top-[206px] xl:top-[118px] left-[81px] md:left-1/2 md:right-1/2 md:-translate-x-1/2 font-ProximaNova font-bold text-[14px] leading-[14px]">
        <span className="absolute left-0">[</span>
        VIDEO ARCHIVE
        <span className="absolute right-0">]</span>
      </div>
      <Image
        className="absolute top-[207px]  left-1/2 right-1/2 -translate-x-1/2 xl:block hidden"
        src="/static/images/videoSection/video-wrap-desktop.svg"
        alt=""
        width="1072"
        height="443"
      />
      <Image
        className="absolute md:w-[591px] md:h-[344px] top-[183px] md:top-[290px] left-1/2 right-1/2 -translate-x-1/2 xl:hidden"
        src="/static/images/videoSection/video-wrap-mod.svg"
        alt=""
        width="335"
        height="195"
      />
      <Image
        className="absolute bottom-[63px] left-[20px] md:left-[138px] xl:hidden"
        src="/static/images/videoSection/controller.svg"
        alt=""
        width="106"
        height="106"
      />
      <Image
        className="absolute bottom-[63px] right-[20px] md:right-[128px] xl:hidden"
        src="/static/images/videoSection/buttons.svg"
        alt=""
        width="111"
        height="98"
      />
    </div>
  );
};

export default VideoSectionContent;
