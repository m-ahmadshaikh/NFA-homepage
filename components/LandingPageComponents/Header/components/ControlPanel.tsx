const ControlPanel = () => {
  return (
    <div className=" items-center gap-[6px] hidden md:flex h-[19px] cursor-pointer">
      <div className="text-base  uppercase font-Bitcrusher  tracking-[0.095em] text-darkOrange leading-[19px] h-[19px]">
        Control Panel
      </div>
      <div className="grid place-items-center font-semibold text-black bg-darkOrange font-ProximaNova text-[10px] w-[35px] h-[14px] rounded-[2px]">
        <div>NEW</div>
      </div>
    </div>
  );
};

export default ControlPanel;
