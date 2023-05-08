import { useMemo } from "react";

const Footer = ({ propJustifyContent }) => {
  const stickyButtonsStyle = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  return (
    <footer
      className="fixed bottom-[0px] left-[0px] bg-colors-dark-container-dark w-[1366px] flex flex-col py-[13px] px-0 box-border items-center justify-end z-[50]"
      style={stickyButtonsStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-center">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[185px] h-11">
          <button className="cursor-pointer [border:none] p-0 bg-colors-primary-red absolute h-full w-[96.22%] top-[0%] right-[3.78%] bottom-[0%] left-[0%]" />
          <img
            className="absolute h-[100.81%] w-[5.39%] top-[-0.41%] right-[-0.53%] bottom-[-0.41%] left-[95.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/line11.svg"
          />
          <b className="absolute top-[22.73%] left-[9.73%] text-base tracking-[0.5px] leading-[24px] font-p1-web-regular text-colors-primary-white text-center">
            Go to My Bookings
          </b>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
