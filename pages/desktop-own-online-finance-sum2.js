import VehicleContainer from "../components/vehicle-container";
import BookingSummaryContainer from "../components/booking-summary-container";
import QuoteCustomiser from "../components/quote-customiser";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect } from "react";

const DesktopOwnOnlineFinanceSum1 = () => {
  useEffect(() => {
    document.querySelector('body').style.background = '#0B0B0C'
  })
  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="relative bg-colors-dark-background w-full h-[1704px] overflow-hidden text-left text-xs text-colors-primary-white font-p1-web-regular">
        <div className="absolute top-[-0.5px] left-[-146.92px] bg-red w-[71px] h-[691px]" />
        <b className="absolute top-[90.08%] left-[5.94%] leading-[20px]">
          Disclaimer:
        </b>
        <div className="absolute top-[90.08%] left-[10.55%]">
          <p className="m-0">
            <span className="text-xs leading-[20px]">{`*Cancellation charges to the tune of 10% of the Booking amount will be applicable on each `}</span>
          </p>
          <p className="m-0">
            <span className="text-xs leading-[20px]">
              and every cancellation (except Scorpio-N bookings). The Waiting
              Period For Your Selected
            </span>
          </p>
          <p className="m-0">
            <span className="text-xs leading-[20px]"> Variant Is 4-6 Weeks</span>
            <span className="text-sm leading-[22px]">{` `}</span>
            <span className="text-xs [text-decoration:underline] leading-[20px]">
              Read More
            </span>
          </p>
        </div>
        <b className="absolute top-[6.1%] left-[10.91%] text-7xl leading-[34px]">
          Hi Abhishek. Congratulations!
        </b>
        <img
          className="absolute h-[2.86%] w-[3.99%] top-[6.1%] right-[90.08%] bottom-[91.04%] left-[5.93%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/illustrationfireworks.svg"
        />
        <b className="absolute top-[8.33%] left-[10.91%] text-sm leading-[22px]">
          Your XUV700 is booked
        </b>
        <VehicleContainer />
        <div className="absolute top-[193px] left-[693px] flex flex-col items-start justify-start gap-[20px] text-xl">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="flex flex-row items-start justify-start gap-[305px]">
              <b className="relative leading-[28px] [-webkit-text-stroke:1px_#fff]">
                Booking Summary
              </b>
              <div className="flex flex-row items-center justify-start gap-[8px] text-xs">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/icondownload.svg"
                />
                <div className="relative leading-[20px] font-medium">
                  Download Quote
                </div>
              </div>
            </div>
            <BookingSummaryContainer />
          </div>
          <div className="w-[592px] flex flex-col items-start justify-start gap-[12px]">
            <b className="relative leading-[28px] [-webkit-text-stroke:1px_#fff]">
              Customise Your Quote
            </b>
            <QuoteCustomiser />
          </div>
        </div>
        <Footer />
        <Header
          productIds="/logo3.svg"
          productIds2="/iconmenu.svg"
          logoPosition="fixed"
        />
      </div>
    </div>
  );
};

export default DesktopOwnOnlineFinanceSum1;
