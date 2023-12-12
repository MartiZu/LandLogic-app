"use client";

import { useState } from "react";
import DisplayNewBuyerInformation from "./DisplayNewBuyerInformation";

export default function DepositTool({ value }) {
  const { salary, property_value, credit_score } = value;
  const deposit = property_value * 0.2;

  const [furtherInfoVisible, setFurtherInfoVisible] = useState(false);

  //write click hangler for furtherInfoVisible button
  function clickHandler() {
    setFurtherInfoVisible(!furtherInfoVisible);
  }
  console.log(value);

  return (
    <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
      <h2 className="font-normal py-7 text-3xl text-purple-accent">
        Your New Buyer Report
      </h2>
      <p className="py-2 font-normal text-xl">
        Your estimated deposit amount is{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{deposit}
        </span>{" "}
        based on the value of the properties in your area.
      </p>
      <div className="flex justify-center items-center">
        {furtherInfoVisible ? (
          <DisplayNewBuyerInformation value={value} />
        ) : null}
      </div>
      <button
        className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
        onClick={clickHandler}
      >
        Find Out More
      </button>
    </div>
  );
}
