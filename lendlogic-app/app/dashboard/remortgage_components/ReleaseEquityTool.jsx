"use client";
import { useState, useEffect } from "react";



export default function ReleaseEquityTool({ q2, value }) {
//Take the property value and subtract what is left to pay on mortgage
  // const remainingPayment = 200000 - loanAmount;
  const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
  value;

  const [equity, setEquity] = useState(200000 - loanAmount);
  const [borrowTime, setBorrowTime] = useState(20);
  const [monthlyEquityPayment, setMonthlyEquityPayment] = useState(0);
  //destructing the object returned from the custom hook
 
   //This value is how much the user can borrow
  //ask the user how long they want to pay back 
  //Give the user the ability to choose how much they want to borrow from that value
  //Take how much the user wants to borrow and calculate the monthly payment
 

  function updateMonthlyPayment() {

    let payment = Math.floor(equity / borrowTime) / 12;
    setMonthlyEquityPayment(payment);
    console.log(payment)
   
  }
  return (

    <div className="mt-8 mx-4 text-center text-2xl">
      <p className="py-2 font-normal text-xl">Your monthly equity paymment will be {" "}  
      <span className="text-2xl font-bold text-purple-accent">
          £{monthlyEquityPayment}{" "}
        </span>on top of your existing payment of {" "}<span className="text-2xl font-bold text-purple-accent">
          £{userMonthlyPayment}
          {" "}</span></p>
      <p className="py-2 font-normal text-xl">How much would you like to borrow?{" "}<span className="text-2xl font-bold text-purple-accent">
          £{equity}
          {" "}</span></p>
      <label className="py-4" htmlFor="interestRate">
        £ 
      </label>
      <input
        data-testid="interestRate"
        id="interestRate"
        className="w-1/2"
        type="range"
        min="5000"
        max={equity}
        step="1000"
        value={equity}
        onChange={(e) => {
          setEquity(e.target.value);
          updateMonthlyPayment();
        }}
      />
       <p className="py-2 font-normal text-xl">How long would you like to borrow this equity for? {" "}  
       <span className="text-2xl font-bold text-purple-accent">
          {borrowTime} years
          {" "}</span></p>
      <label className="py-4" htmlFor="interestRate">
        £
      </label>
      <input
        data-testid="interestRate"
        id="interestRate"
        className="w-1/2"
        type="range"
        min="5"
        max={20}
        step="1"
        value={borrowTime}
        onChange={(e) => {
          setBorrowTime(e.target.value);
          updateMonthlyPayment();
        }}
      />

      {/* <div className="py-4">
        Your new monthly payment could be{" "}
        <span className="text-2xl font-bold text-purple-accent">
          {monthlyPayment}
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
      </div> */}
    </div>
  );
}
