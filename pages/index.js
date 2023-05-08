import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import AppDownloadContainer from "../components/app-download-container";

const DesktopLanding = () => {
  const router = useRouter();

  const onBookNowClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online1");
  }, [router]);

  useEffect(() => {
    document.querySelector('body').style.background = '#0B0B0C'
  })

  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="relative bg-colors-dark-background w-full h-[2165px] overflow-hidden text-left text-7xl text-colors-primary-white font-p1-web-regular">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1366px] h-[800px]" />
        <img
          className="absolute w-[calc(100%_-_1px)] top-[32px] right-[1px] left-[0px] max-w-full overflow-hidden h-[768px] object-cover"
          alt=""
          src="/xuv700pressreleses720x405px-introducestwovariants-1@2x.png"
        />
        <div
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[470px] left-[709px] w-[205.5px] h-[50px] flex flex-row items-center justify-start"
          onClick={onBookNowClick}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[198px] h-[49.5px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/outline1.svg"
            />
            <b className="absolute top-[26.26%] left-[30.3%] text-base tracking-[0.5px] leading-[24px] font-p1-web-regular text-colors-primary-white text-left">
              Book Now
            </b>
          </button>
          <img
            className="relative w-[9.97px] h-[49.82px]"
            alt=""
            src="/line1.svg"
          />
        </div>
        <b className="absolute top-[872px] left-[calc(50%_-_139.5px)] leading-[34px]">
          A New Era of Excellence
        </b>
        <div className="absolute top-[910px] left-[calc(50%_-_378.5px)] text-base leading-[24px] text-center inline-block w-[756px]">
          This powerhouse of an SUV is obsessively engineered to dial up
          adrenaline like never before.
        </div>
        <video
          className="absolute top-[946px] left-[calc(50%_-_472.5px)] w-[944px] h-[531px]"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/xuv700_debut on 14th august _ ready to feel the rush_.mp4" />
        </video>
        <MainHeader />
        <AppDownloadContainer />
      </div>
    </div>
  );
};

export default DesktopLanding;
