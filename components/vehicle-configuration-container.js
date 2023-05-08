import FuelContainer from "./fuel-container";

const VehicleConfigurationContainer = () => {
  return (
    <div className="w-[592px] flex flex-col items-start justify-start gap-[24px] text-left text-lg text-colors-primary-white font-p1-web-regular">
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <b className="relative leading-[26px]">Choose Configuration</b>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-center text-base sm:flex-row sm:gap-[20px] sm:items-start sm:justify-start">
          <FuelContainer
            fuelType="Fuel"
            transmissionType="Petrol"
            fuelTypeDiesel="Diesel"
          />
          <FuelContainer
            fuelType="Transmission"
            transmissionType="Petrol"
            fuelTypeDiesel="Diesel"
          />
          <FuelContainer
            fuelType="Seating"
            transmissionType="5 Seater"
            fuelTypeDiesel="7 Seater"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <div className="relative">
          <b className="leading-[26px]">{`Choose Colour: `}</b>
          <span className="text-sm leading-[22px]">Sunburst Orange</span>
        </div>
        <div className="self-stretch rounded-3xs bg-colors-dark-container-dark h-[74px] flex flex-col py-0 px-3 box-border items-start justify-center">
          <div className="w-[438px] flex flex-row items-start justify-start gap-[24px]">
            <input
              className="cursor-pointer flex-1 relative h-[42px]"
              type="radio"
              defaultChecked={true}
            />
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[42px]"
              alt=""
              src="/colour-2.svg"
            />
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[42px]"
              alt=""
              src="/colour-3.svg"
            />
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[42px]"
              alt=""
              src="/colour-4.svg"
            />
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[42px]"
              alt=""
              src="/colour-5.svg"
            />
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[42px]"
              alt=""
              src="/colour-6.svg"
            />
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[42px]"
              alt=""
              src="/colour-6.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <div className="self-stretch flex flex-row items-end justify-end gap-[112px] md:flex-row md:gap-[90px] md:items-end md:justify-end">
          <b className="flex-1 relative leading-[26px]">Choose Variant (5)</b>
          <div className="flex-1 relative text-xs leading-[20px]">
            Note: The waiting period for selected variant is 28 to 29 Weeks.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch rounded-3xs bg-colors-dark-container-dark flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row p-4 items-start justify-start gap-[28px] border-b-[1px] border-solid border-colors-secondary-grey-3">
              <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-[18px] h-[17.05px]"
                  alt=""
                  src="/iconsuccess.svg"
                />
                <b className="flex-1 relative leading-[26px]">MX Gasoline</b>
              </div>
              <div className="flex-1 relative text-right text-sm">
                <span className="leading-[22px]">Starts at</span>
                <b className="text-lg leading-[26px]"> ₹9 00 000.00*</b>
              </div>
            </div>
            <div className="self-stretch flex flex-row py-4 pr-4 pl-11 items-start justify-start gap-[10px] text-base">
              <b className="flex-1 relative leading-[24px]">Key Features</b>
              <div className="flex-1 relative text-[inherit] leading-[24px] font-inherit">
                <ul className="m-0 pl-[21px]">
                  <li className="mb-0">20.32 cm (8") Infotainment</li>
                  <li className="mb-0">17.78 cm (7") Cluster</li>
                  <li>Smart Door handles</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-colors-dark-container-dark flex flex-col items-center justify-start">
            <div className="flex flex-row p-4 items-start justify-between border-b-[1px] border-solid border-colors-secondary-grey-3">
              <div className="w-80 flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/radio.svg"
                />
                <b className="relative leading-[26px] inline-block w-[300px] shrink-0">
                  MX Gasoline
                </b>
              </div>
              <div className="relative text-right inline-block w-[212px] shrink-0 text-sm">
                <span className="leading-[22px]">Starts at</span>
                <b className="text-lg leading-[26px]"> ₹9 00 000.00*</b>
              </div>
            </div>
            <div className="w-[592px] flex flex-row py-4 pr-4 pl-11 box-border items-start justify-start gap-[10px] text-base">
              <b className="flex-1 relative leading-[24px]">Key Features</b>
              <div className="flex-1 relative text-[inherit] leading-[24px] font-inherit">
                <ul className="m-0 pl-[21px]">
                  <li className="mb-0">20.32 cm (8") Infotainment</li>
                  <li className="mb-0">17.78 cm (7") Cluster</li>
                  <li>Smart Door handles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleConfigurationContainer;
