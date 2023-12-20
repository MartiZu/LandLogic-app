import React from 'react'
import { useState, useEffect } from "react";

const MortageType = ({ value, q2}) => {
    // Pull mortage type from database  
    const { loanLength, loanAmount, userMonthlyPayment, userInterestRate ,mortgageType,
        fixedTermLength, startDate, } = value;
  

const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
const [interestRate, setInterestRate] = useState(userInterestRate);
const [loanTerm, setLoanTerm] = useState(loanLength);

function updateMonthlyPayment() {
  let newMonthlyPayment = (loanAmount / (loanTerm * 12)) * interestRate;
  setMonthlyPayment(Math.ceil(newMonthlyPayment));
  // console.log(monthlyPayment);
}

function  remainingFixedTerm(){
 // work out the difference between the current date from the start date
 const currentDate = new Date();
 console.log(currentDate);
// Whatever the difference is, taking away from the fixed term length
// Display the number as the remaining fixed term length
}


return (
  <div className="mt-8 mx-4 text-center text-2xl">
    <div className="py-4">
     Your current plan has a fixed rate length of {" "}
      <span className="text-2xl font-bold text-purple-accent">
        {fixedTermLength} 
      </span>
    </div>
    <div className="py-4">
      Your remaining balance is{" "}
      <span className="text-2xl font-bold text-purple-accent">
        £{loanAmount}
      </span>
    </div>
    <div id="toggles" className="flex flex-col items-center">
      <label className="py-4" htmlFor="interestRate">
        Interest Rate: {interestRate}%
      </label>
      <input
        data-testid="interestRate"
        id="interestRate"
        className="w-1/2"
        type="range"
        min="2"
        max="9"
        step="0.1"
        value={interestRate}
        onChange={(e) => {
          setInterestRate(e.target.value);
          updateMonthlyPayment();
        }}
      />
      <label className="py-4" htmlFor="loanTerm">
        Loan Term: {loanTerm}
      </label>
      <input
        id="loanTerm"
        className="w-1/2"
        type="range"
        min="5"
        max="35"
        step="1"
        value={loanTerm}
        onChange={(e) => {
          setLoanTerm(e.target.value);
          updateMonthlyPayment();
        }}
      />
    </div>
  </div>
  )
}

export default MortageType