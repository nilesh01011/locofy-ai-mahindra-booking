import QuoteContainer from "./quote-container";
import AccessoriesContainer from "./accessories-container";
import AddonsContainer from "./addons-container";
import ExclusiveBenefitsContainer from "./exclusive-benefits-container";

const QuoteCustomiser = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-lg text-colors-primary-white font-p1-web-regular">
      <QuoteContainer
        insuranceQuoteId="/outline11.svg"
        insuranceQuoteText="Get Insurance Quote"
        financeQuoteId="/iconsummary1.svg"
      />
      <QuoteContainer
        insuranceQuoteId="/outline21.svg"
        insuranceQuoteText="Finance Your Vehicle"
        financeQuoteId="/iconfinance.svg"
        propWidth="96.1%"
        propRight="4.3%"
        propWidth1="28.38%"
      />
      <AccessoriesContainer iconSuccess="/iconsuccess1.svg" />
      <AddonsContainer iconSuccess="/iconsuccess1.svg" />
      <ExclusiveBenefitsContainer
        star2Stroke="/star-2-stroke.svg"
        iconSuccess="/iconsuccess1.svg"
      />
    </div>
  );
};

export default QuoteCustomiser;
