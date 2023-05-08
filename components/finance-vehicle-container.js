import { useMemo } from "react";

const FinanceVehicleContainer = ({
  insuranceQuoteText,
  financeVehicleText,
  propWidth,
}) => {
  const getInsuranceQuoteStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch relative rounded-3xs bg-colors-dark-container-dark h-16 text-left text-base text-colors-primary-white font-source-sans-pro">
      <div className="absolute top-[10px] left-[417px] w-[155px] h-11">
        <img
          className="absolute h-[101.15%] w-[95.96%] top-[-0.01%] right-[4.43%] bottom-[-1.14%] left-[-0.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/outline11.svg"
        />
        <img
          className="absolute h-[99.7%] w-[6.41%] top-[-0.41%] right-[-0.63%] bottom-[0.71%] left-[94.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/line-170.svg"
        />
        <b className="absolute h-[51.69%] w-[22.51%] top-[24.72%] left-[36.98%] inline-block">
          Avail
        </b>
      </div>
      <b
        className="absolute w-[28.21%] top-[29.69%] left-[10.47%] text-lg leading-[26px] inline-block font-p1-web-regular"
        style={getInsuranceQuoteStyle}
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

export default FinanceVehicleContainer;
