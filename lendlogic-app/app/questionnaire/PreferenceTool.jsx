"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function PreferenceTool() {
  // set state
  const [questionNumber, setQuestionNumber] = useState(1);

  // hold clicked or unclicked in state, that resets on new card
  const [cardVisible, setCardVisible] = useState(true);
  // clicked means slideout class is added
  const router = useRouter();

  // handledClick on input
  const handleClick = (e, num) => {
    e.preventDefault();
    if (num === 99) {
      router.push("/dashboard");
    }
    // update the class names
    setCardVisible(false);
    // set a delay of animation length
    setTimeout(() => {
      setQuestionNumber(num);
      setCardVisible(true);
    }, 200);
    // update state/number when clicking on input and sends to another question based on number set in onClick function.
  };
  return (
    <section>
      {questionNumber === 1 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center ">
            <h2 className="mb-40 text-3xl font-normal text-purple-accent">
              Which of the following best describes you?
            </h2>
            <input
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              value="New Buyer"
              type="submit"
              onClick={(e) => handleClick(e, 2)}
            ></input>
            <input
              value="Remortgage"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 3)}
            ></input>
            <input
              value="Moving House"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 4)}
            ></input>
            <input
              value="Just Browsing"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 5)}
            ></input>
          </form>
        </div>
      ) : null}
      {questionNumber === 2 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center">
            <h2 className="mb-40 text-3xl font-normal text-purple-accent">
              How comfortable are you with mortgage terminology?
            </h2>
            <input
              value="I'm comfortable"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99)}
            ></input>
            <input
              value="I'm not comfortable"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99)}
            ></input>
          </form>
        </div>
      ) : null}

      {questionNumber === 3 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center ">
            <h2 className="mb-40 text-3xl font-normal text-purple-accent">
              What are your Remortgage goals?
            </h2>
            <input
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              value="Repay your mortgage quicker"
              type="submit"
              onClick={(e) => handleClick(e, 99)}
            ></input>
            <input
              value="Reduce your monthly payments"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99)}
            ></input>
            <input
              value="Change mortgage type"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99)}
            ></input>
            <input
              value="Release equity"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 99)}
            ></input>
          </form>
        </div>
      ) : null}

      {questionNumber === 4 ? (
        <div
          className={
            cardVisible
              ? "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slidein"
              : "flex flex-col min-h-card-height mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl {} animate-slideout"
          }
        >
          <form className="flex flex-col my-5 items-center">
            <h2 className="mb-40 text-3xl font-normal text-purple-accent">
              What are you looking for
            </h2>
            <input
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              value="New Buyer"
              type="submit"
            ></input>
            <input
              value="Remortgage"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
              onClick={(e) => handleClick(e, 2)}
            ></input>
            <input
              value="Moving House"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
            ></input>
            <input
              value="Just Browsing"
              type="submit"
              className="border border-purple-accent transition-transform transform hover:bg-purple-accent hover:text-off-white hover:font-semibold rounded-3xl w-full mx-20 my-1 h-12 text-xl font-normal"
            ></input>
          </form>
        </div>
      ) : null}
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
    </section>
  );
}
