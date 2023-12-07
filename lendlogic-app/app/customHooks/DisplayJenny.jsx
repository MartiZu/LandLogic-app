import getUserJenny from "@/library/getUserJenny";

import { useState, useEffect } from "react";

export default async function DisplayJenny() {

  const userData = await getUserJenny();
  console.log(userData); //displays

  const jenny = userData.find(
    (user) => user.email === "jenny.smith@example.com"
  );

  if (jenny.email === "jenny.smith@example.com") {
    const loanAmount = jenny.mortgage.outstanding_balance;
    const userMonthlyPayment = jenny.mortgage.monthly_payment;
    const userInterestRate = jenny.mortgage.interest_rate;

    console.log(loanAmount);
    console.log(userMonthlyPayment);
    console.log(userInterestRate);
    return { loanAmount, userMonthlyPayment, userInterestRate };
  }
  return console.log("no user found");
}
