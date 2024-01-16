import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import home from "../images/home.png";

const Path = () => {
  return (
    <div className="items-stretch flex gap-0 mt-16 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <span className="items-center font-medium flex gap-0">
        <img
          alt=""
          loading="lazy"
          src={home}
          className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
        />
        <FaAngleRight />
        <div className="text-zinc-500 text-center text-lg font-medium items-center grow whitespace-nowrap my-auto">
          Flashcard
        </div>
      </span>
      <span className="items-center flex gap-0 my-auto ">
        <FaAngleRight />
        <div className="text-zinc-500 text-center text-lg font-medium">
          Mathematics
        </div>
        <span className=" text-center font-medium items-center flex whitespace-nowrap my-auto">
          <FaAngleRight />
          <div className="text-blue-950 text-center text-lg font-semibold grow whitespace-nowrap self-start">
            Relation and Function
          </div>
        </span>
      </span>
    </div>
  );
};

export default Path;
