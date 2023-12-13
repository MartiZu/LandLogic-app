"use client";
import Image from "next/image";
import DisplayMortgageInformation from "./DisplayMortgageInformation";
import { useState } from "react";

export default function RemortgageReport({ value }) {
  //state to handle whether tool is image is displayed
  const [toolVisible, setToolVisible] = useState(false);
  //write click hangler for toolVisible button
  function clickHandler() {
    setToolVisible(!toolVisible);
  }
  console.log(value);

  //destructing the object returned from the custom hook
  const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
    value;

  return (
    <>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="font-normal py-7 text-3xl text-purple-accent">
          Your Remortgage Report
        </h2>
        <p className="py-2 font-normal text-xl">
          Your current monthly payment is <br></br>{" "}
          <span className="text-2xl font-bold text-purple-accent">
            £{userMonthlyPayment}
          </span>
        </p>
        <p className="p-2 font-normal text-xl">
          Get insights into remortgaging by using our interactive tool.
        </p>
        <div className="flex justify-center items-center">
          {toolVisible ? (
            <DisplayMortgageInformation value={value} />
          ) : (
            <Image
              src="/Toggle_man.png"
              alt="A man using toggles"
              width={300}
              height={200}
            />
          )}
        </div>
        <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
          onClick={clickHandler}
        >
          View My Report
        </button>
      </div>
    </>
  );
}
