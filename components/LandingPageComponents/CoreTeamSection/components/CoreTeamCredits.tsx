import React from 'react';
import CreditsCard from './CreditCard';

function CoreTeamCredits() {
  return (
    <div className="font-bold uppercase font-Bitcrusher text-[40px] text-center mt-[90px] md:mt-[265px]">
      <div className="flex gap-[46px] xl:gap-[48px] items-center justify-center">
        <div className="w-[67px] md:w-[248px] xl:w-[384px] h-[0px] bg-white border-[2px] border-white"></div>
        <div className="leading-[44px] text-[#DB38B9] text-[40px] md:text-[55px]">
          The Squad
        </div>
        <div className="w-[67px] md:w-[248px] xl:w-[384px] h-[0px] bg-white border-[2px] border-white"></div>
      </div>
      <div className="mt-[38px] md:flex md:ml-[187px] xl:ml-0  xl:flex xl:justify-center">
        <CreditsCard name="RADAR" rank="MODerator" color="#DB38B9" />
        <CreditsCard name="RUSBUS" rank="collab/AMA MANAGER" color="#DB38B9" />
      </div>

      <div className="mt-[38px] md:flex md:mx-[27px] xl:mx-0  xl:flex xl:justify-center">
        <CreditsCard name="Hustlepedia" rank="advisor" color="#fff" />
        <CreditsCard name="ellio trades" rank="advisor" color="#fff" />
        <CreditsCard name="felix norden" rank="advisor" color="#fff" />
        <CreditsCard name="blockchainmeta" rank="advisor" color="#fff" />
      </div>
    </div>
  );
}

export default CoreTeamCredits;
