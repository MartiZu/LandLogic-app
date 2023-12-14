import React from 'react'


const UniqueMonthlyPayment = ({ q2, value }) => {
    const { loanLength, loanAmount, userMonthlyPayment, userInterestRate } =
    value;

  return (

    <p className="py-2 font-normal text-xl">{ q2 === "a2" ?
    "Your current monthly payment is" : null }
    <span className="text-2xl font-bold text-purple-accent">
   {q2 === "a2" ?  `£${userMonthlyPayment}` : null }  
    </span>
  </p>
  )
}

export default UniqueMonthlyPayment