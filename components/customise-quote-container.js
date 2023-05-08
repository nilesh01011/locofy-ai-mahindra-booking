import { useMemo } from "react";

const CustomiseQuoteContainer = ({
  insuranceQuoteText,
  financeVehicleText,
  propWidth,
}) => {
  const getInsuranceQuote1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch relative rounded-3xs bg-colors-dark-container-dark h-16 text-left text-lg text-colors-primary-white font-p1-web-regular">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[10px] left-[417px] w-[155px] h-11">
        <button className="cursor-pointer p-0 bg-[transparent] absolute h-[101.15%] w-[95.82%] top-[-0.01%] right-[4.5%] bottom-[-1.14%] left-[-0.32%] box-border border-[1px] border-solid border-colors-primary-white" />
        <img
          className="absolute h-[99.7%] w-[6.41%] top-[-0.41%] right-[-0.63%] bottom-[0.71%] left-[94.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/line-170.svg"
        />
        <b className="absolute h-[51.69%] w-[22.51%] top-[24.72%] left-[36.98%] text-base inline-block font-source-sans-pro text-colors-primary-white text-left">
          Avail
        </b>
      </button>
      <b
        className="absolute w-[28.21%] top-[29.69%] left-[10.47%] leading-[26px] inline-block"
        style={getInsuranceQuote1Style}
      >
        {insuranceQuoteText}
      </b>
      <img
        className="absolute top-[15px] left-[16px] w-[34px] h-[34px]"
        alt=""
        src={financeVehicleText}
      />
    </div>
  );
};

export default CustomiseQuoteContainer;
