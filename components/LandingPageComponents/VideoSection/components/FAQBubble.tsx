import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function FAQBubble() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/roadmap')}
      className="bubble w-[66px] md:w-[125px] md:flex md:gap-[11px] absolute -top-[20px] left-[20px] xl:left-[174px] xl:-top-[31px] cursor-pointer">
      <Image
        className="hidden md:block"
        src="/static/images/videoSection/rocket.svg"
        alt=""
        width="18"
        height="20"
      />
      FAQ
    </div>
  );
}

export default FAQBubble;
