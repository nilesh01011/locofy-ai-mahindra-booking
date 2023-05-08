import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import ScorpioNButton from "../components/scorpio-n-button";

const DesktopOwnOnlineBuyOnline111 = () => {
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

  const onSelectButton4Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onSelectButton5Click = useCallback(() => {
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
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src="/ellipse-210.svg"
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
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src="/ellipse-210.svg"
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
            <div className="flex flex-col items-center justify-start gap-[20px] text-center text-lg text-colors-primary-white">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row py-0 px-8 items-center justify-center relative gap-[2px]">
                  <b className="relative leading-[26px] z-[0]">SUVs</b>
                  <div className="absolute my-0 mx-[!important] w-[calc(100%_+_2px)] top-[27px] right-[-1px] left-[-1px] box-border h-0.5 z-[1] border-t-[2px] border-solid border-colors-primary-red" />
                </div>
                <div className="flex flex-row py-0 px-8 items-center justify-center relative gap-[2px]">
                  <div className="relative leading-[26px] z-[0]">Pick-Ups</div>
                  <div className="absolute my-0 mx-[!important] w-[calc(100%_+_2px)] top-[27px] right-[-1px] left-[-1px] box-border h-0.5 opacity-[0.2] z-[1] border-t-[2px] border-solid border-colors-primary-red" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px] text-left text-7xl">
                <b className="relative leading-[34px] [-webkit-text-stroke:1px_#fff]">
                  Select Vehicle
                </b>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <ScorpioNButton
                    onSelectButtonClick={onSelectButtonClick}
                    onSelectButton1Click={onSelectButton1Click}
                    onSelectButton2Click={onSelectButton2Click}
                  />
                  <ScorpioNButton
                    propWidth="unset"
                    propFlexShrink="unset"
                    onSelectButton1Click={onSelectButton4Click}
                    onSelectButton2Click={onSelectButton5Click}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOwnOnlineBuyOnline111;
