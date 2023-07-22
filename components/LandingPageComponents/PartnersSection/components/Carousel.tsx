import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import { FC } from 'react';

const Carousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    className: 'slider variable-width center',
    variableWidth: true,
    dots: true,
    centerPadding: '60px',
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    swipeToSlide: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    adaptiveHeight: false,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          adaptiveHeight: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          adaptiveHeight: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const progress = (currentSlide / 3) * 100;
  console.log(currentSlide, progress);
  return (
    <>
      <div className="h-[79px] md:h-[89px] w-full content overflow-hidden">
        <Slider {...settings}>
          <div>
            <Image
              className="mx-[39px]"
              width={171}
              height={145}
              src="/static/images/partnersSection/Icons/1.svg"
              alt="Slide 1"
            />
          </div>
          <div>
            <Image
              className="mx-[39px]"
              width={231}
              height={70}
              src="/static/images/partnersSection/Icons/2.svg"
              alt="Slide 2"
            />
          </div>
          <div>
            <Image
              className="mx-[39px]"
              width={74}
              height={61}
              src="/static/images/partnersSection/Icons/3.svg"
              alt="Slide 3"
            />
          </div>
          <div>
            <Image
              className="mx-[39px]"
              width={102}
              height={100}
              src="/static/images/partnersSection/Icons/4.svg"
              alt="Slide 4"
            />
          </div>
          <div>
            <Image
              className="mx-[39px]"
              width={212}
              height={70}
              src="/static/images/partnersSection/Icons/5.svg"
              alt="Slide 5"
            />
          </div>
          <div>
            <Image
              className="mx-[39px]"
              width={178}
              height={82}
              src="/static/images/partnersSection/Icons/6.svg"
              alt="Slide 6"
            />
          </div>
          <div>
            <Image
              className="mx-[39px]"
              width={147}
              height={102}
              src="/static/images/partnersSection/Icons/7.svg"
              alt="Slide 7"
            />
          </div>
        </Slider>
      </div>
      <div className="h-1 mt-10 bg-gray-300 w-[335px] mx-auto xl:w-[1180px] border">
        <div
          className="h-1 bg-[#DB38B9] w-full max-w-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default Carousel;
