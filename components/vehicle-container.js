const VehicleContainer = () => {
  return (
    <div className="absolute top-[193px] left-[81px] flex flex-col items-start justify-start gap-[4px] text-left text-7xl text-colors-primary-white font-p1-web-regular">
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <b className="relative leading-[34px] [-webkit-text-stroke:1px_#fff]">
            XUV700
          </b>
          <b className="relative text-xl leading-[28px] [-webkit-text-stroke:1px_#fff]">
            W8 • Diesel • Automatic • Sunburst Orange
          </b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px] text-sm">
          <div className="relative leading-[22px] whitespace-pre-wrap [-webkit-text-stroke:1px_#fff]">
            <p className="m-0">{`Dealer    `}</p>
            <p className="m-0">
              <b>
                Randhawa Motors (A Div Of Randhawa Automobile Engineering Pvt
                Ltd), 412115
              </b>
            </p>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[2px]">
            <div className="relative text-sm leading-[22px] font-p1-web-regular text-colors-primary-white text-left">
              Order Status:
            </div>
            <b className="relative text-sm leading-[22px] font-p1-web-regular text-limegreen text-left">
              In progress
            </b>
          </button>
        </div>
      </div>
      <div className="w-[540px] overflow-hidden flex flex-col py-[3px] px-0 box-border items-start justify-start">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[343px] shrink-0 object-cover"
          alt=""
          src="/xuv700@2x.png"
        />
      </div>
    </div>
  );
};

export default VehicleContainer;
