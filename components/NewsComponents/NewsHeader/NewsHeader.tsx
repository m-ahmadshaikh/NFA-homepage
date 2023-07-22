import Image from 'next/image';
import React from 'react';

function NewsHeader() {
  return (
    <div className="mx-[161px] pt-[18px] flex justify-between">
      <Image
        src="/static/images/newsPage/logo.webp"
        width={107}
        height={52}
        alt=""
      />
      <div className="cursor-pointer">
        <Image
          src="/static/images/newsPage/cross.svg"
          width={28}
          height={28}
          alt=""
        />
      </div>
    </div>
  );
}

export default NewsHeader;
