import { useEffect } from "react";
import MobileNumberPopup from "../components/mobile-number-popup";

const DesktopOwnOnlineFinancePop = () => {
  useEffect(() => {
    document.querySelector('body').style.background = '#0B0B0C'
  })
  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="relative w-full h-[768px] overflow-hidden bg-[url(/desktopown-onlinefinancepopup@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <MobileNumberPopup />
      </div>
    </div>
  );
};

export default DesktopOwnOnlineFinancePop;
