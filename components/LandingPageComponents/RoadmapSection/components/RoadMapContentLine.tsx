import Image from 'next/image';
import React from 'react';
import { useWindowSize } from '../../../../hooks/useWindowSize';

function RoadMapContentLine({ index, setIndex }: any) {
  const size = useWindowSize();
  let leftLimit = 250;
  let rightLimit = 1250;
  const handleLeftArrowClick = () => {
    setIndex((prev: any) => {
      if (size.width) {
        if (size.width < 600) {
          return prev - 340;
        }
      }
      return prev - 250;
    });
  };

  const handleRightArrowClick = () => {
    setIndex((prev: any) => {
      if (size.width) {
        if (size.width < 600) {
          console.log(prev + 1000);
          return prev + 340;
        }
      }
      return prev + 250;
    });
  };
  if (size.width) {
    leftLimit = size.width < 400 ? 350 : size.width < 800 ? 200 : 200;
    rightLimit = size.width < 400 ? 1700 : size.width < 800 ? 1500 : 1100;
  }
  return (
    <div className="flex items-center top-[432px] xl:top-[499px] md:top-[486px] absolute z-50   w-screen   lg:w-[70%] xl:w-[1179px] lg:transform lg:-translate-x-1/2 lg:left-1/2">
      <button
        disabled={index <= leftLimit}
        onClick={handleLeftArrowClick}
        className="cursor-pointer ">
        <Image
          className="w-[30px] h-[18px]"
          src={`/static/images/roadmapSection/leftArrow${
            index <= leftLimit ? 'Grey' : 'White'
          }.svg`}
          width={30}
          height={18}
          alt=""
        />
      </button>
      <Image
        className="w-[276px] mx-auto md:w-[673px] lg:w-11/12 xl:w-[1105px]"
        src="/static/images/roadmapSection/arrowsLine.svg"
        width={1105}
        height={0}
        alt=""
      />
      <button
        disabled={index >= rightLimit}
        onClick={handleRightArrowClick}
        className="cursor-pointer">
        <Image
          className="w-[30px] h-[18px]"
          src={`/static/images/roadmapSection/rightArrow${
            index >= rightLimit ? 'Grey' : 'White'
          }.svg`}
          width={30}
          height={18}
          alt=""
        />
      </button>
    </div>
  );
}

export default RoadMapContentLine;
