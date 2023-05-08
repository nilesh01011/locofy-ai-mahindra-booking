const VehicleRow1 = ({
  onSelectButtonClick,
  onSelectButton1Click,
  onSelectButton2Click,
}) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[20px] text-left text-lg text-colors-primary-white font-p1-web-regular">
      <div className="rounded-3xs bg-colors-dark-container-dark flex flex-col p-5 items-center justify-start gap-[18px]">
        <div className="w-[348px] h-[26px] flex flex-row items-start justify-center gap-[10px]">
          <b className="flex-1 relative leading-[26px]">SCORPIO-N</b>
          <div className="flex flex-row items-start justify-start text-right text-base">
            <b className="relative leading-[24px]">Starts at</b>
            <b className="relative leading-[24px]"> ₹9 00 000.00</b>
            <b className="relative leading-[24px]">*</b>
          </div>
        </div>
        <img
          className="relative w-72 h-[196px] object-cover"
          alt=""
          src="/vehicleimage@2x.png"
        />
        <div className="flex flex-row items-start justify-start gap-[20px] text-base">
          <div className="relative w-[164px] h-11">
            <button className="cursor-pointer p-0 bg-[transparent] absolute h-[102.27%] w-[96.34%] top-[-1.14%] right-[3.96%] bottom-[-1.14%] left-[-0.3%] box-border border-[1px] border-solid border-colors-primary-white" />
            <img
              className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line.svg"
            />
            <b className="absolute h-[54.55%] w-[35.98%] top-[22.73%] left-[32.32%] tracking-[0.5px] leading-[24px] inline-block">
              Explore
            </b>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[164px] h-11"
            onClick={onSelectButtonClick}
          >
            <img
              className="absolute h-full w-[95.73%] top-[0%] right-[4.27%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/outline.svg"
            />
            <img
              className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line.svg"
            />
            <b className="absolute h-[54.55%] w-[28.66%] top-[22.73%] left-[33.54%] text-base tracking-[0.5px] leading-[24px] inline-block font-p1-web-regular text-colors-primary-white text-center">
              Select
            </b>
          </button>
        </div>
      </div>
      <div className="rounded-3xs bg-colors-dark-container-dark flex flex-col p-5 items-center justify-start gap-[18px]">
        <div className="w-[348px] h-[26px] flex flex-row items-start justify-center gap-[10px]">
          <b className="flex-1 relative leading-[26px]">XUV700</b>
          <div className="flex flex-row items-start justify-start text-right text-base">
            <b className="relative leading-[24px]">Starts at</b>
            <b className="relative leading-[24px]"> ₹9 00 000.00</b>
            <b className="relative leading-[24px]">*</b>
          </div>
        </div>
        <img
          className="relative w-72 h-[196px] object-cover"
          alt=""
          src="/vehicleimage@2x.png"
        />
        <div className="flex flex-row items-start justify-start gap-[20px] text-base">
          <div className="relative w-[164px] h-11">
            <button className="cursor-pointer p-0 bg-[transparent] absolute h-[102.27%] w-[96.34%] top-[-1.14%] right-[3.96%] bottom-[-1.14%] left-[-0.3%] box-border border-[1px] border-solid border-colors-primary-white" />
            <img
              className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line.svg"
            />
            <b className="absolute h-[54.55%] w-[35.98%] top-[22.73%] left-[32.32%] tracking-[0.5px] leading-[24px] inline-block">
              Explore
            </b>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[164px] h-11"
            onClick={onSelectButton1Click}
          >
            <img
              className="absolute h-full w-[95.73%] top-[0%] right-[4.27%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/outline.svg"
            />
            <img
              className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line.svg"
            />
            <b className="absolute h-[54.55%] w-[28.66%] top-[22.73%] left-[33.54%] text-base tracking-[0.5px] leading-[24px] inline-block font-p1-web-regular text-colors-primary-white text-center">
              Select
            </b>
          </button>
        </div>
      </div>
      <div className="rounded-3xs bg-colors-dark-container-dark flex flex-col p-5 items-center justify-start gap-[18px]">
        <div className="w-[348px] h-[26px] flex flex-row items-start justify-center gap-[10px]">
          <b className="flex-1 relative leading-[26px]">THAR</b>
          <div className="flex flex-row items-start justify-start text-right text-base">
            <b className="relative leading-[24px]">Starts at</b>
            <b className="relative leading-[24px]"> ₹9 00 000.00</b>
            <b className="relative leading-[24px]">*</b>
          </div>
        </div>
        <img
          className="relative w-72 h-[196px] object-cover"
          alt=""
          src="/vehicleimage@2x.png"
        />
        <div className="flex flex-row items-start justify-start gap-[20px] text-base">
          <div className="relative w-[164px] h-11">
            <button className="cursor-pointer p-0 bg-[transparent] absolute h-[102.27%] w-[96.34%] top-[-1.14%] right-[3.96%] bottom-[-1.14%] left-[-0.3%] box-border border-[1px] border-solid border-colors-primary-white" />
            <img
              className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line.svg"
            />
            <b className="absolute h-[54.55%] w-[35.98%] top-[22.73%] left-[32.32%] tracking-[0.5px] leading-[24px] inline-block">
              Explore
            </b>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[164px] h-11"
            onClick={onSelectButton2Click}
          >
            <img
              className="absolute h-full w-[95.73%] top-[0%] right-[4.27%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/outline.svg"
            />
            <img
              className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/line.svg"
            />
            <b className="absolute h-[54.55%] w-[28.66%] top-[22.73%] left-[33.54%] text-base tracking-[0.5px] leading-[24px] inline-block font-p1-web-regular text-colors-primary-white text-center">
              Select
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleRow1;
