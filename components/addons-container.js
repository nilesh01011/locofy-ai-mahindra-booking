const AddonsContainer = ({ iconSuccess }) => {
  return (
    <div className="self-stretch relative rounded-3xs bg-colors-dark-container-dark h-16 text-left text-lg text-colors-primary-white font-p1-web-regular">
      <img
        className="absolute top-[20px] left-[548px] w-6 h-6 overflow-hidden"
        alt=""
        src="/icondropdown1.svg"
      />
      <img
        className="absolute top-[15px] left-[16px] w-[34px] h-[34px]"
        alt=""
        src="/iconaddons.svg"
      />
      <div className="absolute top-[19px] left-[62px] flex flex-row items-center justify-center gap-[8px]">
        <b className="relative leading-[26px]">Add-Ons</b>
        <img className="relative w-3.5 h-3.5" alt="" src={iconSuccess} />
      </div>
    </div>
  );
};

export default AddonsContainer;
