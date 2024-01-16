import React from 'react'
import mainLogo from "../images/mainLogo.png"
const Navbar = () => {
  return (
    <nav className="self-stretch flex w-full items-center justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
    <img alt=""
      loading="lazy"
      srcSet={mainLogo}
      className="aspect-[4.9] object-contain object-center w-[191px] overflow-hidden shrink-0 max-w-full my-auto"
    />
    <span className="items-stretch self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
      <span className="items-stretch self-center flex justify-between gap-5 my-auto">
        <div className="text-neutral-700 text-lg">Home</div>
        <div className="text-neutral-700 text-lg">Flashcard</div>
        <div className="text-neutral-700 text-lg">Contact</div>
      </span>
      <div className="text-neutral-700 text-lg self-center my-auto">
        FAQ
      </div>
      <span className="text-white text-lg font-medium whitespace-nowrap bg-[#072b74] justify-center items-stretch px-10 py-3.5 rounded-[32px] max-md:px-5">
        Login
      </span>
    </span>
  </nav>
  )
}

export default Navbar
