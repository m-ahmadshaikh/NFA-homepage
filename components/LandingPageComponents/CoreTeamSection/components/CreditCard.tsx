import React from 'react';
function CreditsCard({
  name,
  rank,
  color,
}: {
  name: string;
  rank: string;
  color: string;
}) {
  return (
    <div className="font-bold uppercase font-Bitcrusher center mb-[15px] md:w-[197px] md:text-left">
      <div className="text-[35px] leading-[38px]">{name}</div>
      <div className={`text-[20px] text-[${color}]`}>{rank}</div>
    </div>
  );
}
export default CreditsCard;
