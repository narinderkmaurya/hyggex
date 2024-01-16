import React from "react";

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
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a6a4b4493da0ff50a0eebdd0942e02c1bebcfb3c1c4720fe5a7543918af5a5?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92c9cd2dceabeef4344c06ed585e8984fb1aed52d7801b90f9d83818eb8f94b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="text-white text-center text-4xl font-bold tracking-wider self-center whitespace-nowrap mt-28 mb-24 max-md:my-10">
          9 + 6 + 7x - 2x - 3
        </div>
      </span>
      <div className="items-stretch self-center flex w-[612px] max-w-full justify-between gap-5 mt-8 max-md:flex-wrap">
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c144e1cddfb65cd0b5b12bc170d6f636d2a5f8ef6591a538a35cf81666ed80b9?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
        <span className="items-center flex justify-between gap-5">
          <img
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6423af7dbf4f44cc2284a714bb9c1f99304a7fd8d3431242fd26ae7eba68225c?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div className="text-gray-800 text-2xl font-bold my-auto">01/10</div>
          <img
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/525f7bbf765a9194f7b4a975c79ef4478296d1d5cbddc4f29cad81e8e1f5d9b1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </span>
        <img
          alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/668a537dd30e9afeb0a31e4871d8991e18cb4ba560d3fa8681f899ddb1962bef?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>
    </>
  );
};

export default Header;
