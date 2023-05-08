import { useMemo } from "react";

const Header = ({ productIds, productIds2, logoPosition }) => {
  const topNavStyle = useMemo(() => {
    return {
      position: logoPosition,
    };
  }, [logoPosition]);

  return (
    <nav
      className="sticky top-[0px] left-[0px] bg-colors-dark-container-dark w-[1366px] h-16 flex flex-row py-4 px-[81px] box-border items-center justify-start gap-[20px] z-[50]"
      style={topNavStyle}
    >
      <img
        className="relative w-[102px] h-3 overflow-hidden shrink-0"
        alt=""
        src={productIds}
      />
      <div className="relative text-xs leading-[20px] font-medium font-p1-web-regular text-colors-primary-white text-right inline-block w-[1032px] h-5 shrink-0">
        Buy Online
      </div>
      <img className="relative w-8 h-8" alt="" src={productIds2} />
    </nav>
  );
};

export default Header;
