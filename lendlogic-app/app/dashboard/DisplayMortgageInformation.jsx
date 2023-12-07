"use client";

import getUserJenny from "@/library/getUserJenny";
import DisplayJenny from "../customHooks/DisplayJenny";

import { useState, useEffect } from "react";
import internal from "stream";

export default function DisplayMortgageInformation({ value }) {
  //destructing the object returned from the custom hook
  const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
    value;
  const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
  const [interestRate, setInterestRate] = useState(userInterestRate);
  const [loanTerm, setLoanTerm] = useState(loanLength);
  
  const updateMonthlyPayment = (e) => {
    setInterestRate(e.target.value)
    setLoanTerm(e.target.value)
    setMonthlyPayment(loanAmount/(loanTerm*12))
  }
  return (
    <div className="mt-32 mx-4 text-center text-2xl">
      <div>Your new monthly payment could be {monthlyPayment}</div>
      <div>Your remaining balance is {loanAmount}</div>
      <div id="toggles" className="flex flex-col">
        <label htmlFor="interestRate">Interest Rate: {interestRate}%</label>
        <input
          type="range"
          min="2"
          max="9"
          step="0.1"
          value={interestRate}
          onChange={(e) => updateMonthlyPayment}
        />

        <label htmlFor="loanTerm">Loan Term: {loanTerm}</label>
        <input
          className="bg-black"
          type="range"
          min="5"
          max="35"
          step="1"
          value={loanTerm}
          onChange={updateMonthlyPayment}
        />
      </div>
    </div>
  );
}
