import { useCallback } from "react";
import { useRouter } from "next/router";

const Footer1 = () => {
  const router = useRouter();

  const onContinueButtonClick = useCallback(() => {
    router.push("/desktop-own-online-finance-pop");
  }, [router]);

  return (
    <div className="absolute top-[1003px] left-[0px] bg-colors-dark-container-dark w-[1366px] h-[70px] flex flex-col items-center justify-center">
      <div className="w-[330px] flex flex-row items-start justify-start gap-[20px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 h-11 flex flex-row items-center justify-start">
          <div className="relative w-[148px] h-11">
            <img
              className="absolute h-[102.27%] w-[100.82%] top-[-1.14%] right-[-0.41%] bottom-[-1.14%] left-[-0.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/outline4.svg"
            />
            <b className="absolute top-[22.73%] left-[37.16%] text-base tracking-[0.5px] leading-[24px] font-p1-web-regular text-colors-primary-white text-center">
              Back
            </b>
          </div>
          <img
            className="relative w-[9.97px] h-[44.36px] ml-[-1px]"
            alt=""
            src="/line.svg"
          />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 h-11 flex flex-row items-center justify-start"
          onClick={onContinueButtonClick}
        >
          <div className="relative w-[148px] h-11">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/outline5.svg"
            />
            <b className="absolute top-[22.73%] left-[26.35%] text-base tracking-[0.5px] leading-[24px] font-p1-web-regular text-colors-primary-white text-center">
              Continue
            </b>
          </div>
          <img
            className="relative w-[9.97px] h-[44.36px] ml-[-1px]"
            alt=""
            src="/line.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Footer1;
