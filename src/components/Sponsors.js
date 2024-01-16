import React from "react";
import logo from "../images/logo.png";
import text from "../images/text.png";
import vector from "../images/Vector.png";
const Sponsors = () => {
  return (
    <div>
      <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-20 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="items-stretch flex justify-between gap-5">
          <img
            alt=""
            loading="lazy"
            src={logo}
            className=" object-contain object-center w-[81px] overflow-hidden shrink-0 max-w-full"
          />
          <span className="justify-center items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="text-zinc-500 text-xs font-bold">Published by</div>
            <img
              alt=""
              loading="lazy"
              src={text}
              className="aspect-[3.38] object-contain object-center w-[115px] overflow-hidden self-center mt-3"
            />
          </span>
        </div>
        <span className="items-stretch self-center flex gap-2 my-auto">
          <img
            alt=""
            loading="lazy"
            src={vector}
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-3xl font-semibold bg-clip-text self-center grow whitespace-nowrap my-auto">
            Create Flashcard
          </div>
        </span>
      </div>
    </div>
  );
};

export default Sponsors;
