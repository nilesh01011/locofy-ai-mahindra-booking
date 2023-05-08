import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import SelectVehicleContainer from "../components/select-vehicle-container";

const DesktopOwnOnlineBuyOnline1111 = () => {
  const router = useRouter();

  const onSelectButtonClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onSelectButton1Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onSelectButton2Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onSelectButton3Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onSelectButton4Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onButtonsClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);
  useEffect(() => {
    document.querySelector('body').style.background = '#0B0B0C'
  })

  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="relative bg-colors-dark-background w-full h-[1039px] text-center text-3xs text-colors-primary-white font-p1-web-regular">
        <Header
          productIds="/logo.svg"
          productIds2="/iconmenu.svg"
          logoPosition="sticky"
        />
        <div className="absolute top-[88px] left-[81px] flex flex-col items-center justify-start gap-[20px]">
          <div className="w-80 flex flex-row items-center justify-center">
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
          <div className="flex flex-col items-start justify-start gap-[20px] text-left text-xs text-colors-primary-red">
            <div className="flex flex-row items-center justify-start gap-[3px]">
              <div className="flex flex-row items-start justify-start gap-[2px]">
                <div className="relative leading-[20px] font-medium [-webkit-text-stroke:1px_#fff]">
                  <span>*</span>
                  <span className="text-colors-primary-white">
                    Ex-showroom price:
                  </span>
                </div>
                <div className="relative leading-[20px] font-medium text-colors-primary-white [-webkit-text-stroke:1px_#fff]">
                  Pune
                </div>
              </div>
              <img className="relative w-4 h-4" alt="" src="/iconedit.svg" />
            </div>
            <div className="flex flex-col items-center justify-start gap-[20px] text-7xl text-colors-primary-white">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                <button className="cursor-pointer [border:none] py-0 px-8 bg-[transparent] flex flex-row items-center justify-center relative gap-[2px]">
                  <b className="relative text-lg leading-[26px] font-p1-web-regular text-colors-primary-white text-center z-[0]">
                    SUVs
                  </b>
                  <div className="absolute my-0 mx-[!important] w-[calc(100%_+_2px)] top-[27px] right-[-1px] left-[-1px] box-border h-0.5 z-[1] border-t-[2px] border-solid border-colors-primary-red" />
                </button>
                <button className="cursor-pointer [border:none] py-0 px-8 bg-[transparent] flex flex-row items-center justify-center relative gap-[2px]">
                  <div className="relative text-lg leading-[26px] font-p1-web-regular text-colors-primary-white text-center z-[0]">
                    Pick-Ups
                  </div>
                  <div className="absolute my-0 mx-[!important] w-[calc(100%_+_2px)] top-[27px] right-[-1px] left-[-1px] box-border h-0.5 opacity-[0.2] z-[1] border-t-[2px] border-solid border-colors-primary-red" />
                </button>
              </button>
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <b className="relative leading-[34px] [-webkit-text-stroke:1px_#fff]">
                  Select Vehicle
                </b>
                <div className="flex flex-col items-start justify-start gap-[20px] text-lg">
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                    <SelectVehicleContainer
                      vehicleName="SCORPIO-N"
                      onSelectButtonClick={onSelectButtonClick}
                    />
                    <SelectVehicleContainer
                      vehicleName="XUV700"
                      onSelectButtonClick={onSelectButton1Click}
                    />
                    <SelectVehicleContainer
                      vehicleName="THAR"
                      onSelectButtonClick={onSelectButton2Click}
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                    <div className="rounded-3xs bg-colors-dark-container-dark flex flex-col p-5 items-center justify-start gap-[18px]">
                      <div className="w-[348px] h-[26px] flex flex-row items-start justify-center gap-[10px]">
                        <b className="flex-1 relative leading-[26px]">
                          SCORPIO-N
                        </b>
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
                      <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[20px]"
                        onClick={onButtonsClick}
                      >
                        <div className="relative w-[164px] h-11">
                          <img
                            className="absolute h-[102.27%] w-[96.47%] top-[-1.14%] right-[3.9%] bottom-[-1.14%] left-[-0.37%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/outline3.svg"
                          />
                          <img
                            className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/line.svg"
                          />
                          <b className="absolute h-[54.55%] w-[35.98%] top-[22.73%] left-[32.32%] text-base tracking-[0.5px] leading-[24px] inline-block font-p1-web-regular text-colors-primary-white text-left">
                            Explore
                          </b>
                        </div>
                        <div className="relative w-[164px] h-11">
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
                        </div>
                      </button>
                    </div>
                    <SelectVehicleContainer
                      vehicleName="XUV700"
                      onSelectButtonClick={onSelectButton3Click}
                    />
                    <SelectVehicleContainer
                      vehicleName="THAR"
                      onSelectButtonClick={onSelectButton4Click}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOwnOnlineBuyOnline1111;
