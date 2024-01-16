import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="text-5xl font-bold tracking-wide bg-clip-text self-stretch mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        FAQ
      </div>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:mt-10 max-md:px-5">
        <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto">
          Can education flashcards be used for all age groups?
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d1dbfbefa0e872a41ec093030280941582c1c5ac671c6f897ff83d21967471?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </span>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:px-5">
        <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto">
          How do education flashcards work?
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d1dbfbefa0e872a41ec093030280941582c1c5ac671c6f897ff83d21967471?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </span>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:px-5">
        <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
          Can education flashcards be used for test preparation?
        </div>
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d1dbfbefa0e872a41ec093030280941582c1c5ac671c6f897ff83d21967471?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </span>
    </div>
  );
};

export default Faq;