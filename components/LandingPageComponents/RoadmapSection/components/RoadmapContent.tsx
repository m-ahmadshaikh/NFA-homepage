import React, { useState } from 'react';
import RoadMapContentLine from './RoadMapContentLine';
import { roadmapData } from '../../../../constants/roadMapData';
import RoadMapContentCard from './RoadMapContentCard';

function RoadmapContent() {
  const [index, setIndex] = useState(0);

  return (
    <div className=" xl:flex xl:justify-center xl:items-center xl:w-screen">
      <RoadMapContentLine index={index} setIndex={setIndex} />
      <div className="overflow-x-hidden  w-[284px] md:w-[646px] xl:w-[1100px] mx-auto  h-[639px]   relative">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${index}px) `,
          }}>
          {roadmapData.map((item: any, index: any) => (
            <div
              style={{
                left: `${(parseInt(item.id) - 1) * 340}px`,
                bottom: item.id % 2 === 0 ? '' : '320px',
                top: item.id % 2 !== 0 ? '' : '298px',
              }}
              className="absolute"
              key={item.id}>
              <RoadMapContentCard
                quarter={item.quarter}
                year={item.year}
                phase={item.phase}>
                {item.items.map((item: any, index: any) => (
                  <li key={index}>{item}</li>
                ))}
              </RoadMapContentCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapContent;
