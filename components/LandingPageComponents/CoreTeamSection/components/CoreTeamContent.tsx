import React from 'react';
import UserCard from './UserCard';

function CoreTeamContent() {
  return (
    <div className="flex flex-col md:flex-row gap-[63px]  mt-[36px] md:absolute md:top-[270px]  md:mx-auto  md:left-0 md:right-0 xl:top-[400px]">
      <UserCard
        text="dr. jpeg | ENO"
        rank="Founder"
        color="#fff"
        url="/static/images/coreTeamSection/drJpeg.svg"
      />
      <UserCard
        text="TREKI | OVERLOrD"
        color="#50C5FB"
        rank="MARKETING"
        url="/static/images/coreTeamSection/treki.svg"
      />
      <UserCard
        text="DOFLAMINGO | GOA"
        color="#FF8A00"
        rank="Community Manager"
        url="/static/images/coreTeamSection/doflamingo.svg"
      />
    </div>
  );
}
export default CoreTeamContent;
