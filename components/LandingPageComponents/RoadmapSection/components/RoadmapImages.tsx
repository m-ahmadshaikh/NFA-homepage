import Image from 'next/image';
import React from 'react';

function RoadmapImages() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    if (window.scrollY > 4000) {
      return;
    }
    setScrollPosition(window.scrollY - 3000);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translationX = scrollPosition * 0.8;

  return (
    <div style={{ position: 'relative' }}>
      <Image
        className="absolute top-[-12px] xl:top-0 right-[10px] md:left-0 xl:left-[293px] md:top-0 md:w-[290px] xl:w-[340px] md:h-[281px] xl:h-[221px]"
        src="/static/images/roadmapSection/top-triangle.svg"
        width={340}
        height={221}
        alt=""
        // Apply the horizontal translation to the image using CSS transform property
        style={{ transform: `translateX(${translationX}px)` }}
      />
      <div className="absolute top-[78px] xl:top-[116px] right-[20px]  md:right-[21px] xl:right-[160px] md:top-[98px] border border-white w-[133px] md:w-[437px] xl:w-[875px] h-0"></div>
      <Image
        className="absolute top-[300px] right-[154px] hidden left xl:block"
        src="/static/images/roadmapSection/bottomTriangle-lg.svg"
        width={964}
        height={551}
        alt=""
      />
      <Image
        className="absolute top-[364px] right-0 hidden md:block left xl:hidden"
        src="/static/images/roadmapSection/bottomTriangle-md.svg"
        width={649}
        height={438}
        alt=""
      />
      <Image
        className="md:hidden absolute z-0 top-[300px] right-0  left"
        src="/static/images/roadmapSection/bottomTriangle-sm.svg"
        width={964}
        height={551}
        alt=""
      />
    </div>
  );
}

export default RoadmapImages;
