import { useMemo } from "react";

const DealerCard = ({
  productId,
  propJustifyContent,
  propGap,
  propJustifyContent1,
  propGap1,
  propCursor,
  onIconViewClick,
}) => {
  const dealer1Style = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
    };
  }, [propJustifyContent, propGap]);

  const dealerInformationStyle = useMemo(() => {
    return {
      justifyContent: propJustifyContent1,
      gap: propGap1,
    };
  }, [propJustifyContent1, propGap1]);

  const iconViewStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div
      className="self-stretch rounded-3xs bg-colors-dark-container-dark flex flex-row p-4 items-start justify-between text-left text-lg text-colors-primary-white font-p1-web-regular"
      style={dealer1Style}
    >
      <div
        className="flex flex-row items-start justify-between"
        style={dealerInformationStyle}
      >
        <input
          className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
          type="radio"
          defaultChecked={true}
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <b className="relative leading-[26px] inline-block w-[492px] [-webkit-text-stroke:1px_#fff]">{`Randhawa Motors `}</b>
            <b className="relative text-base leading-[24px] [-webkit-text-stroke:1px_#fff]">
              LBS Marg, 400070
            </b>
          </div>
          <div className="relative text-base leading-[24px] inline-block w-[492px] [-webkit-text-stroke:1px_#fff]">
            Gr. Floor, Jaswant Landmark, Mehra Compound, Opp Basant Park, Near
            Hanuman Temple, 400070
          </div>
        </div>
      </div>
      <img
        className="relative w-[18px] h-[18px] cursor-pointer"
        alt=""
        src={productId}
        onClick={onIconViewClick}
        style={iconViewStyle}
      />
    </div>
  );
};

export default DealerCard;
