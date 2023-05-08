import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";

const ScorpioCardsContainer = ({ propAlignSelf, propAlignSelf1 }) => {
  const vehicleCardsRow1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const vehicleCardsRow2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

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

  const onSelectButton5Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  return (
    <div className="flex flex-col items-start justify-start gap-[20px] text-left text-lg text-colors-primary-white font-p1-web-regular">
      <div
        className="self-stretch flex flex-row items-start justify-start gap-[20px] sm:flex-col sm:gap-[20px] sm:items-start sm:justify-start"
        style={vehicleCardsRow1Style}
      >
        <div className="rounded-3xs bg-colors-dark-container-dark w-[388px] flex flex-col p-5 box-border items-center justify-start gap-[18px]">
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
      <div
        className="self-stretch flex flex-row items-start justify-start gap-[20px] md:flex-row md:gap-[20px] md:items-start md:justify-start sm:flex-col sm:gap-[20px] sm:items-start sm:justify-start"
        style={vehicleCardsRow2Style}
      >
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
              <b className="absolute h-[54.55%] w-[35.98%] top-[22.73%] left-[32.32%] tracking-[0.5px] leading-[24px] inline-block">
                Explore
              </b>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[164px] h-11"
              onClick={onSelectButton3Click}
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
              <b className="absolute h-[54.55%] w-[35.98%] top-[22.73%] left-[32.32%] tracking-[0.5px] leading-[24px] inline-block">
                Explore
              </b>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[164px] h-11"
              onClick={onSelectButton4Click}
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
              <b className="absolute h-[54.55%] w-[35.98%] top-[22.73%] left-[32.32%] tracking-[0.5px] leading-[24px] inline-block">
                Explore
              </b>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[164px] h-11"
              onClick={onSelectButton5Click}
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
    </div>
  );
};

export default ScorpioCardsContainer;
