"use client";

import { useState } from "react";
import DisplayDeposit from "./DisplayDeposit";

export default function DepositButton({ value }) {
    
    const [furtherInfoVisible, setFurtherInfoVisible] = useState(false);
    
    //write click hangler for furtherInfoVisible button
    function clickHandler() {
        setFurtherInfoVisible(!furtherInfoVisible);
      }
      console.log(value);

return (
<div className="mt-12 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
<p className="py-4 font-normal">
          Your estimated property amount is £50,000 based on the value of the properties in your area.
        </p>
        <div className="flex justify-center items-center">
          {furtherInfoVisible ? (
            <DisplayDeposit value={value} />
          )  : null}
        </div>
<button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
          onClick={clickHandler}
        >
          Find Out More
        </button>
</div>
)
}