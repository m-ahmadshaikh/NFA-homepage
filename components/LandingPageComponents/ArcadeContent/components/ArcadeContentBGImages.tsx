import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function ArcadeContentBGImages() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY - 1459);
      console.log(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftTriangleStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  const rightTriangleStyle = {
    transform: `translateY(${-scrollY * 0.3}px)`,
  };

  const leftTriangleLgStyle = {
    transform: `translateY(${scrollY * 0.2}px)`,
  };

  const rightTriangleLgStyle = {
    transform: `translateY(${-scrollY * 0.2}px)`,
  };
  return (
    <div className="z-0 ">
      <Image
        className="absolute top-[75px] left-[23px]  z-0 md:hidden"
        src="static/images/arcadeContent/pageNumberMob.svg"
        alt=""
        width={34}
        height={163}
      />{' '}
      <Image
        className="absolute top-[75px] left-[23px] xl:top-[147px] xl:left-[160px]  z-0 hidden md:block"
        src="static/images/arcadeContent/pageNumberLg.svg"
        alt=""
        width={34}
        height={271}
      />
      <Image
        className="absolute top-[332px] md:top-[310px] xl:top-[400px] left-0  xl:left-[218px] xl:hidden z-0"
        src="static/images/arcadeContent/leftTriangle.svg"
        alt=""
        width={263}
        height={153}
        style={leftTriangleStyle} //
      />{' '}
      <Image
        className="absolute top-[332px] md:top-[310px] xl:top-[400px] left-0  xl:left-[218px] hidden z-0 xl:block"
        src="static/images/arcadeContent/leftTriangleLg.svg"
        alt=""
        width={340}
        height={221}
        style={leftTriangleLgStyle}
      />
      <Image
        className="absolute top-[175px] right-0 z-0 xl:hidden"
        src="static/images/arcadeContent/rightTriangle.svg"
        alt=""
        width={217}
        height={141}
        style={rightTriangleStyle}
      />
      <Image
        className="absolute top-[299px] right-[389px] z-0 hidden xl:block"
        src="static/images/arcadeContent/rightTriangleLg.svg"
        alt=""
        width={217}
        height={141}
        style={rightTriangleLgStyle}
      />
      <Image
        className="absolute top-[99px]  z-0  md:hidden "
        src="static/images/arcadeContent/lines.svg"
        alt=""
        width={1232}
        height={261}
      />
      <Image
        className="absolute top-[99px]   z-0  left-[-200px] xl:top-[168px] xl:hidden xl:-left-[483px] h-[261px] hidden md:block"
        src="static/images/arcadeContent/lines-md.svg"
        alt=""
        width={1232}
        height={261}
      />{' '}
      <Image
        className="absolute top-[99px] z-0  left-[-200px] xl:top-[168px] xl:-left-[283px] h-[261px] hidden xl:block"
        src="static/images/arcadeContent/lines-lg.svg"
        alt=""
        width={1232}
        height={261}
      />
      <Image
        className="absolute bottom-0 z-0 md:left-[288px]  md:hidden"
        src="static/images/arcadeContent/bottomLines.svg"
        alt=""
        width={1232}
        height={261}
      />
      <Image
        className="absolute z-0 md:top-[772px] md:left-[228px] xl:left-[654px]  hidden md:block xl:hidden"
        src="static/images/arcadeContent/bottom-lines-md.svg"
        alt=""
        width={1232}
        height={261}
      />
      <Image
        className="absolute z-0 top-[914px] left-[654px] hidden xl:block"
        src="static/images/arcadeContent/bottom-lines-lg.svg"
        alt=""
        width={1232}
        height={261}
      />
    </div>
  );
}

export default ArcadeContentBGImages;
