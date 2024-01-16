import React from "react";

import bulb from "../images/bulb.svg";
import full from "../images/full.png";
import left from "../images/left.png";
import right from "../images/right.png";
import replay from "../images/replay.png";
import sound from "../images/sound.png";



const Header = () => {
  return (
    <>
      <div className="justify-between items-stretch self-center flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <span className="text-blue-950 text-xl font-bold whitespace-nowrap items-stretch grow pb-3.5 px-3">
          Study
        </span>
        <span className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch aspect-[2.3448275862068964] pb-3.5 px-3">
          Quiz
        </span>
        <span className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch aspect-[2.2758620689655173] pb-3.5 px-3">
          Test
        </span>
        <span className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch grow pb-3.5 px-3">
          Game
        </span>
        <span className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch grow pb-3.5 px-3">
          Others
        </span>
      </div>
      <span className="self-center flex w-[712px] max-w-full flex-col items-stretch mt-8 px-9 py-11 rounded-[42.507px] max-md:px-5 bg-gradient-to-b from-[#061c93] to-[#1d72e1]">
        <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <img
            alt="bulb"
            loading="lazy"
            src={bulb}
            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            alt="sound"
            loading="lazy"
            src={sound}
            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="text-white text-center text-4xl font-bold tracking-wider self-center whitespace-nowrap mt-28 mb-24 max-md:my-10">
          9 + 6 + 7x - 2x - 3
        </div>
      </span>
      <div className="items-stretch self-center flex w-[612px] max-w-full justify-between gap-5 mt-8 max-md:flex-wrap">
        <img
          alt="replay"
          loading="lazy"
          src={replay}
          className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <span className="items-center flex justify-between gap-5">
          <img
            alt="left"
            loading="lazy"
            src={left}
            className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div className="text-gray-800 text-2xl font-bold my-auto">01/10</div>
          <img
            alt="right"
            loading="lazy"
            src={right}
            className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </span>
        <img
          alt="full"
          loading="lazy"
          src={full}
          className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>
    </>
  );
};

export default Header;
