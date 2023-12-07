"use client";

import getUserJenny from "@/library/getUserJenny";
import DisplayJenny from "../customHooks/DisplayJenny";

import { useState, useEffect } from "react";

export default function DisplayMortgageInformation() {
  const [monthlyPayment, setMonthlyPayment] = useState(1653);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  // const [user, setUSer] = useState("jenny.smith@example.com");

  //destructing the object returned from the custom hook
  const { loanAmount, userMonthlyPayment, userInterestRate } = DisplayJenny();
  console.log(loanAmount);
  console.log(userMonthlyPayment);
  console.log(userInterestRate);

  return (
    <div className="mt-32 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
      <div>Monthly Payment</div>
      <div id="toggles">
        <label htmlFor="interestRate">Interest Rate: </label>
        <input
          type="range"
          min="2"
          max="9"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate()}
        />

        <label htmlFor="loanTerm">Loan Term: </label>
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