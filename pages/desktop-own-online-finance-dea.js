import { useCallback, useEffect } from "react";
import DealerContainer from "../components/dealer-container";
import Footer1 from "../components/footer1";
import Header from "../components/header";

const DesktopOwnOnlineFinanceDea = () => {
  const onIconViewClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=19.04732158,73.02166783"
    );
  }, []);
  useEffect(() => {
    document.querySelector('body').style.background = '#0B0B0C'
  })

  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="relative bg-colors-dark-background w-full h-[1073px] text-left text-3xs text-colors-primary-white font-p1-web-regular">
        <div className="absolute top-[88px] left-[523px] w-80 flex flex-row items-center justify-center text-center">
          <div className="w-[50px] flex flex-col items-center justify-end gap-[5px]">
            <div className="self-stretch relative leading-[14px]">VEHICLE</div>
            <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch relative h-0" />
              </div>
              <div className="flex flex-row items-start justify-start">
                <img className="relative w-4 h-4" alt="" src="/group-7.svg" />
              </div>
              <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[11px] items-center justify-end">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
          </div>
          <div className="flex flex-col items-center justify-end gap-[5px] text-colors-primary-red">
            <div className="relative leading-[14px] flex items-end justify-center w-[50px]">
              DEALER
            </div>
            <div className="w-[50px] h-[22px] flex flex-row items-center justify-center">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
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
        <div className="absolute top-[150px] left-[81px] flex flex-col items-start justify-start gap-[30px] text-xs text-colors-primary-red">
          <div className="flex flex-col items-start justify-start gap-[13px]">
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
              <img className="relative w-4 h-4" alt="" src="/iconedit1.svg" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] text-7xl text-colors-primary-white">
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <b className="relative leading-[34px] [-webkit-text-stroke:1px_#fff]">
                  XUV700
                </b>
                <b className="relative text-xl leading-[28px] inline-block w-[529px] [-webkit-text-stroke:1px_#fff]">
                  W8 • Diesel • Automatic • Sunburst Orange
                </b>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col py-[3px] px-0 items-start justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[343px] shrink-0 object-cover"
                  alt=""
                  src="/xuv7001@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between text-colors-primary-white">
            <b className="relative leading-[20px]">Disclaimer:</b>
            <div className="relative leading-[20px]">
              <p className="m-0">
                <span className="font-p1-web-regular">{`The information presented on this website, including all pricing, loan & offer details `}</span>
              </p>
              <p className="m-0">
                <span className="font-p1-web-regular">
                  are made available solely for general information purposes.
                </span>
                <span className="font-medium font-p1-web-regular">{` `}</span>
                <span className="font-medium font-p1-web-regular">
                  <span className="[text-decoration:underline]">Read More</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[183px] left-[693px] w-[594px] flex flex-col items-start justify-start gap-[16px] text-xl">
          <div className="self-stretch flex flex-row items-center justify-start gap-[288px]">
            <b className="relative leading-[28px] [-webkit-text-stroke:1px_#fff]">
              Select Dealer
            </b>
            <input
              className="[border:none] font-p1-web-regular text-xs bg-colors-dark-container-dark rounded-[5px] w-[184px] h-9 flex flex-row pt-0 px-2 pb-[7px] box-border items-center justify-start"
              type="text"
              placeholder="Search By Pin Code "
            />
          </div>
          <DealerContainer />
        </div>
        <Footer1 />
        <Header
          productIds="/logo11.svg"
          productIds2="/iconmenu1.svg"
          logoPosition="sticky"
        />
      </div>
    </div>
  );
};

export default DesktopOwnOnlineFinanceDea;
