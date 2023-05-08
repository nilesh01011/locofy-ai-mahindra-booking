const ExclusiveBenefitsContainer = ({ star2Stroke, iconSuccess }) => {
  return (
    <div className="self-stretch relative rounded-3xs bg-colors-dark-container-dark h-16 text-left text-lg text-colors-primary-white font-p1-web-regular">
      <img
        className="absolute top-[20px] left-[548px] w-6 h-6 overflow-hidden"
        alt=""
        src="/icondropdown1.svg"
      />
      <div className="absolute top-[15px] left-[16px] w-[34px] h-[34px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
        <img
          className="absolute h-[76.59%] w-[80.41%] top-[7.79%] right-[9.8%] bottom-[15.61%] left-[9.8%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={star2Stroke}
        />
      </div>
      <div className="absolute top-[19px] left-[62px] flex flex-row items-center justify-start gap-[8px]">
        <b className="relative leading-[26px]">Exclusive Benefits</b>
        <img className="relative w-3.5 h-3.5" alt="" src={iconSuccess} />
      </div>
    </div>
  );
};

export default ExclusiveBenefitsContainer;
