import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div>
      <div className="text-5xl font-bold tracking-wide bg-clip-text self-stretch mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        FAQ
      </div>
      <div
        onClick={() => setIsOpen1(!isOpen1)}
        className="w-1/2  border flex  text-left gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:px-5 flex-col "
      >
        <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto">
          <span className="flex justify-between w-full items-center">
            Can education flashcards be used for all age groups?
            <IoChevronDownOutline />
          </span>
        </div>
        {isOpen1 && (
          <div>
            {" "}
            Yes, education flashcards can be tailored to different age groups
            and learning levels. There are flashcards designed for preschoolers,
            elementary school students, high school students, and even for
            college-level and adult learners.
          </div>
        )}
      </div>
      <div
        onClick={() => setIsOpen2(!isOpen2)}
        className="w-1/2  border flex  text-left gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:px-5 flex-col"
      >
        <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto">
          <span className="flex justify-between w-full items-center">
            How do education flashcards work?
            <IoChevronDownOutline />
          </span>
        </div>
        {isOpen2 && (
          <div>
            Education flashcards work by presenting a question or prompt on one
            side and the corresponding answer or information on the other. Users
            can review the cards repeatedly, reinforcing their memory and
            enhancing learning through repetition.
          </div>
        )}
      </div>
      <div
        onClick={() => setIsOpen3(!isOpen3)}
        className="w-1/2  border flex  text-left gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:px-5 flex-col"
      >
        <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
          <span className="flex justify-between w-full items-center">
            Can education flashcards be used for test preparation?
            <IoChevronDownOutline />
          </span>
        </div>
        {isOpen3 && (
          <div>
            Absolutely. Flashcards are an excellent tool for test preparation,
            allowing students to review key concepts, terms, and facts. They
            provide a quick and focused way to reinforce knowledge before exams.
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
