"use client";
import Link from "next/link";
import { RemortgageQuestion } from "./RemortgageQuestion";
import Termniology from "./Termniology";
import { useState } from "react";

export default function PreferenceTool() {
  // set state
  const [questionNumber, setQuestionNumber] = useState(1);

  // handledClick on input
  const handleClick = (e, num) => {
    e.preventDefault();

    // update state/number when clicking on input and sends to another question based on number set in onClick function.
    setQuestionNumber(num);
  };
  return (
    <>
      <div className="flex flex-col mt-32 mx-4 mb-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
        {questionNumber === 1 ? (
          <>
            <form className="flex flex-col my-5 items-center">
              <h2 className="mb-8 text-2xl font-semibold">
                Which of the following best describes you?
              </h2>
              <input
                className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-medium"
                value="New Buyer"
                type="submit"
                onClick={(e) => handleClick(e, 2)}
              ></input>
              <input
                value="Remortgage"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
                onClick={(e) => handleClick(e, 3)}
              ></input>
              <input
                value="Moving House"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
                onClick={(e) => handleClick(e, 4)}
              ></input>
              <input
                value="Just Browsing"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
                onClick={(e) => handleClick(e, 5)}
              ></input>
            </form>
          </>
        ) : null}
        {questionNumber === 2 ? (
          <>
            <form className="flex flex-col my-5 items-center">
              <h2 className="mb-8 text-2xl font-semibold">How comfortable are you with mortgage terminology?</h2>
              <input
                value="I know mortgage terms well"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
              ></input>
              <input
                value="I dont know know Mortgage terms well"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
              ></input>
            </form>
          </>
        ) : null}

        {questionNumber === 3 ? (
          <>
            <form className="flex flex-col my-5 items-center">
              <h2 className="mb-8 text-2xl font-semibold">What are your Remortgage goals?</h2>
              <input
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
                value="Repay your mortgage quicker"
                type="submit"
              ></input>
              <input
                value="Reduce your monthly payments"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
                onClick={(e) => handleClick(e, 2)}
              ></input>
              <input
                value="Change mortgage type"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
              ></input>
              <input
                value="Release equity"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
              ></input>
            </form>
          </>
        ) : null}

        {questionNumber === 4 ? (
          <>
            <form className="flex flex-col my-5 items-center">
              <h2 className="mb-8 text-2xl font-semibold">What are you looking for</h2>
              <input
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
                value="New Buyer"
                type="submit"
              ></input>
              <input
                value="Remortgage"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
                onClick={(e) => handleClick(e, 2)}
              ></input>
              <input
                value="Moving House"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
              ></input>
              <input
                value="Just Browsing"
                type="submit"
                className="border border-purple-accent transition-transform transform hover:shadow-card rounded-3xl w-full mx-2 my-1 h-12"
              ></input>
            </form>
          </>
        ) : null}
      </div>
      {questionNumber > 1 ? (
        <div className="flex flex-row justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-purple-300 shadow-card mx-1"></div>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-purple-300 shadow-card mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
        </div>
      )}
    </>
  );
}
