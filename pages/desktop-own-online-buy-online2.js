import XUV700Container from "../components/x-u-v700-container";
import VehicleConfigurationContainer from "../components/vehicle-configuration-container";
import Header from "../components/header";
import Footer2 from "../components/footer2";
import { useEffect } from "react";

const DesktopOwnOnlineBuyOnline2 = () => {
  useEffect(() => {
    document.querySelector('body').style.background = '#0B0B0C'
  })
  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="relative bg-colors-dark-background w-full h-[974px] text-center text-3xs text-colors-primary-white font-p1-web-regular">
        <div className="absolute top-[88px] left-[523px] w-80 flex flex-row items-center justify-center">
          <div className="w-[50px] flex flex-col items-center justify-end gap-[5px] text-colors-primary-red">
            <div className="self-stretch relative leading-[14px]">VEHICLE</div>
            <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch relative h-0" />
              </div>
              <div className="flex flex-row items-start justify-start">
                <img
                  className="relative w-[22px] h-[22px]"
                  alt=""
                  src="/group-4.svg"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[11px] items-center justify-end">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
          </div>
          <div className="flex flex-col items-center justify-end gap-[5px]">
            <div className="relative leading-[14px] flex items-end justify-center w-[50px]">
              DEALER
            </div>
            <div className="w-[50px] h-[22px] flex flex-row items-center justify-center">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
              </div>
              <div className="flex flex-row items-start justify-start">
                <input
                  className="cursor-pointer relative bg-colors-secondary-grey-3 w-4 h-4"
                  type="radio"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[11px] items-center justify-end">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
          </div>
          <div className="w-[50px] flex flex-col items-center justify-end gap-[5px]">
            <div className="relative leading-[14px]">BOOK</div>
            <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
              </div>
              <div className="flex flex-row items-start justify-start">
                <input
                  className="cursor-pointer relative bg-colors-secondary-grey-3 w-4 h-4"
                  type="radio"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
                <div className="self-stretch relative h-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[150px] left-[81px] flex flex-row items-start justify-start gap-[71px]">
          <XUV700Container />
          <VehicleConfigurationContainer />
        </div>
        <Header
          productIds="/logo.svg"
          productIds2="/iconmenu.svg"
          logoPosition="sticky"
        />
        <Footer2 />
      </div>
    </div>
  );
};

export default DesktopOwnOnlineBuyOnline2;
