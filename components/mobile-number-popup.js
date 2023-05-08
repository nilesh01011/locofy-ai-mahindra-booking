import { useCallback } from "react";
import { useRouter } from "next/router";

const MobileNumberPopup = () => {
  const router = useRouter();

  const onSendOTPButtonClick = useCallback(() => {
    router.push("/desktop-own-online-finance-sum");
  }, [router]);

  return (
    <div className="absolute top-[257px] left-[489px] rounded-3xs bg-colors-dark-container-dark w-[388px] h-[254px] text-left text-xs text-colors-primary-red font-p1-web-regular">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[190px] left-[116px] w-[155px] h-11 flex flex-row items-center justify-start hover:bg-[ff3e5b]"
        onClick={onSendOTPButtonClick}
      >
        <div className="relative w-[148px] h-11">
          <img
            className="absolute h-[102.27%] w-[100.82%] top-[-1.14%] right-[-0.41%] bottom-[-1.14%] left-[-0.41%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/outline4.svg"
          />
          <b className="absolute top-[22.73%] left-[24.32%] text-base tracking-[0.5px] leading-[24px] font-p1-web-regular text-colors-primary-white text-center">
            Send OTP
          </b>
        </div>
        <img
          className="relative w-[9.97px] h-[44.36px] ml-[-1px]"
          alt=""
          src="/line2.svg"
        />
      </button>
      <div className="absolute top-[25.2%] left-[5.15%] leading-[20px] font-medium">
        <span>*</span>
        <span className="text-colors-primary-white">Mandatory fields</span>
      </div>
      <div className="absolute top-[61.42%] left-[4.9%] leading-[20px] text-colors-secondary-grey-4">
        Enter your 10 digit mobile number and click below to continue
      </div>
      <input
        className="[border:none] font-medium font-p1-web-regular text-xs bg-colors-light-background absolute top-[95.5px] left-[20px] rounded-3xs w-[328px] flex flex-row py-4 px-3 box-border items-start justify-start"
        type="text"
        placeholder="Enter Mobile Number*"
        required
      />
      <div className="absolute top-[20px] left-[20px] flex flex-row items-start justify-between text-xl text-colors-primary-white">
        <b className="relative leading-[28px]">Enter Your Mobile Number</b>
        <img className="relative w-6 h-6" alt="" src="/iconcross.svg" />
      </div>
    </div>
  );
};

export default MobileNumberPopup;
