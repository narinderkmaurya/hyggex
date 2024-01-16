import React from 'react'

const Navbar = () => {
  return (
    <nav className="self-stretch flex w-full items-center justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
    <img alt=""
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
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
