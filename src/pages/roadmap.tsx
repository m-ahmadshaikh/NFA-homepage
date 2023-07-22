import React from 'react';
import RoadmapHeader from '../../components/RoadmapComponents/RoadmapHeader/RoadmapHeader';
import Faqs from '../../components/RoadmapComponents/RoadmapHeader/FAQs';
import { faqs } from '../../constants/faqs';

function Roadmap() {
  return (
    <div className="bg-[#F5F5F5]">
      <main className="mx-[161px] ">
        <RoadmapHeader />
        <Faqs faqs={faqs} />
      </main>
    </div>
  );
}

export default Roadmap;
