import React from "react";

import Navbar from "./components/Navbar";
import Path from "./components/Path";
import Header from "./components/Header";

import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="bg-stone-50 flex flex-col items-stretch pt-7 pb-12 px-16 max-md:px-5">
      <div className="flex flex-col mb-48 mx-11 max-md:max-w-full max-md:mr-2.5 max-md:mb-10">
        <Navbar />
        <Path />
        <p className="text-center text-3xl font-bold bg-clip-text self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          Relations and Functions ( Mathematics )
        </p>
        <Header />
        <Sponsors />
        <Faq />
      </div>
    </div>
  );
};

export default App;
