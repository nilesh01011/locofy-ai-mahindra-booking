import CustomiseQuoteContainer from "./customise-quote-container";
import AccessoriesContainer from "./accessories-container";
import AddonsContainer from "./addons-container";
import ExclusiveBenefitsContainer from "./exclusive-benefits-container";

const QuoteForm = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-lg text-colors-primary-white font-p1-web-regular">
      <CustomiseQuoteContainer
        insuranceQuoteText="Get Insurance Quote"
        financeVehicleText="/iconsummary1.svg"
      />
      <CustomiseQuoteContainer
        insuranceQuoteText="Finance Your Vehicle"
        financeVehicleText="/iconfinance.svg"
        propWidth="28.38%"
      />
      <AccessoriesContainer iconSuccess="/iconsuccess2.svg" />
      <AddonsContainer iconSuccess="/iconsuccess2.svg" />
      <ExclusiveBenefitsContainer
        star2Stroke="/star-2-stroke1.svg"
        iconSuccess="/iconsuccess2.svg"
      />
    </div>
  );
};

export default QuoteForm;
