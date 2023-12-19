"use client";

import MonthlyPaymentTool from "./MonthlyPaymentTool";
import LoanLengthTool from "./LoanLengthTool";
import ComparisonTool from "../ComparisonTool";
// import getUserJenny from "@/library/getUsers";
// import DisplayJenny from "../../customHooks/DisplayUser";

// import { useState, useEffect } from "react";
// import internal from "stream";

export default function DisplayMortgageInformation({ q2, value }) {
  //destructing the object returned from the custom hook
  // const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
  //   value;
  // const [monthlyPayment, setMonthlyPayment] = useState(userMonthlyPayment);
  // const [interestRate, setInterestRate] = useState(userInterestRate);
  // const [loanTerm, setLoanTerm] = useState(loanLength);

  // function updateMonthlyPayment() {
  //   let newMonthlyPayment = (loanAmount / (loanTerm * 12)) * interestRate;
  //   setMonthlyPayment(Math.ceil(newMonthlyPayment));
  //   // console.log(monthlyPayment);
  // }
  return ( 
    <>
    {q2 === "a1" ? <LoanLengthTool q2={q2} value={value}/> : null}
    {q2 === "a2" ? <MonthlyPaymentTool q2={q2} value={value}/> : null}
  
    </>
    )};
