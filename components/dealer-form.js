const DealerForm = () => {
  return (
    <div className="self-stretch rounded-3xs bg-colors-dark-container-dark flex flex-row p-4 items-start justify-start gap-[16px] text-left text-lg text-colors-primary-white font-p1-web-regular">
      <div className="flex flex-row items-start justify-start gap-[12px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconradio.svg"
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <b className="relative leading-[26px] inline-block w-[492px] [-webkit-text-stroke:1px_#fff]">{`Randhawa Motors `}</b>
            <b className="relative text-base leading-[24px] [-webkit-text-stroke:1px_#fff]">
              LBS Marg, 400070
            </b>
          </div>
          <div className="relative text-base leading-[24px] inline-block w-[492px] [-webkit-text-stroke:1px_#fff]">
            Gr. Floor, Jaswant Landmark, Mehra Compound, Opp Basant Park, Near
            Hanuman Temple, 400070
          </div>
        </div>
      </div>
      <img className="relative w-[18px] h-[18px]" alt="" src="/iconview2.svg" />
    </div>
  );
};

export default DealerForm;
