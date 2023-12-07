"use client";

import getUserJenny from "@/library/getUserJenny";
import DisplayJenny from "../customHooks/DisplayJenny";

import { useState, useEffect } from "react";
import internal from "stream";

export default function DisplayMortgageInformation({ value }) {
    //destructing the object returned from the custom hook
    const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } = value;
  const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
  const [interestRate, setInterestRate] = useState(userInterestRate);
  const [loanTerm, setLoanTerm] = useState(loanLength);
  // const [user, setUSer] = useState("jenny.smith@example.com");


  // console.log(loanAmount);
  // console.log(userMonthlyPayment);
  // console.log(userInterestRate);

  return (
    <div className="mt-32 mx-4 text-center text-2xl">
      <div>Your current monthly payment is {userMonthlyPayment}</div>
      <div id="toggles" className="flex flex-col">
        <label htmlFor="interestRate">Interest Rate: {interestRate}</label>
        <input
          type="range"
          min="2"
          max="9"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate()}
        />

        <label htmlFor="loanTerm">Loan Term: {loanTerm}</label>
        <input
          type="range"
          min="5"
          max="35"
          step="0.1"
          value={loanTerm}
          onChange={(e) => setLoanTerm()}
        />
      </div>
    </div>
  );
}
