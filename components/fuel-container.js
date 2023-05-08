const FuelContainer = ({ fuelType, transmissionType, fuelTypeDiesel }) => {
  return (
    <div className="flex-1 rounded-3xs bg-colors-dark-container-dark flex flex-col pt-1 px-0 pb-0 items-center justify-start gap-[4px] text-center text-base text-colors-primary-white font-p1-web-regular">
      <b className="relative leading-[24px]">{fuelType}</b>
      <div className="rounded-t-none rounded-b-3xs bg-colors-dark-container-dark flex flex-col p-2 items-start justify-start gap-[8px] border-t-[1px] border-solid border-colors-secondary-grey-3">
        <button className="cursor-pointer [border:none] p-1 bg-colors-light-background rounded-2xl w-[168px] h-8 flex flex-row box-border items-start justify-center">
          <div className="relative text-base leading-[24px] font-p1-web-regular text-colors-primary-white text-center [-webkit-text-stroke:1px_#0b0b0c]">
            {transmissionType}
          </div>
        </button>
        <button className="cursor-pointer p-1 bg-[transparent] rounded-2xl box-border w-[168px] h-8 flex flex-row items-start justify-center border-[1px] border-solid border-colors-light-background">
          <div className="relative text-base leading-[24px] font-p1-web-regular text-colors-primary-white text-center [-webkit-text-stroke:1px_#fff]">
            {fuelTypeDiesel}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FuelContainer;
