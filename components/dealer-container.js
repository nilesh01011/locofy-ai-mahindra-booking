import { useCallback } from "react";
import DealerCard from "./dealer-card";
import DealerForm from "./dealer-form";

const DealerContainer = () => {
  const onIconViewClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=19.04732158,73.02166783"
    );
  }, []);

  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[16px] text-left text-lg text-colors-primary-white font-p1-web-regular">
      <DealerCard productId="/iconview.svg" onIconViewClick={onIconViewClick} />
      <DealerCard
        productId="/iconview1.svg"
        propJustifyContent="flex-start"
        propGap="16px"
        propJustifyContent1="flex-start"
        propGap1="12px"
        propCursor="unset"
      />
      <DealerCard
        productId="/iconview1.svg"
        propJustifyContent="flex-start"
        propGap="16px"
        propJustifyContent1="flex-start"
        propGap1="12px"
        propCursor="unset"
      />
      <DealerForm />
      <DealerForm />
    </div>
  );
};

export default DealerContainer;
