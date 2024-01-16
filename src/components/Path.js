import React from "react";

const Path = () => {
  return (
    <div className="items-stretch flex gap-0 mt-16 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <span className="items-stretch flex gap-0">
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa79f2a6be98768deb6946ac9a8bde734d9a286b6cb87cdfcb46e0678efec65b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
        />
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a1d01218a1978c48b354696e34b2e896845efcefceae26d0436a1a5ac18a2a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <div className="text-zinc-500 text-center text-lg font-medium self-center grow whitespace-nowrap my-auto">
          Flashcard
        </div>
      </span>
      <span className="self-center flex gap-0 my-auto items-start">
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
        />
        <div className="text-zinc-500 text-center text-lg font-medium">
          Mathematics
        </div>
        <span className="items-stretch self-stretch flex justify-between gap-0">
          <img
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-blue-950 text-center text-lg font-semibold grow whitespace-nowrap self-start">
            Relation and Function
          </div>
        </span>
      </span>
    </div>
  );
};

export default Path;
