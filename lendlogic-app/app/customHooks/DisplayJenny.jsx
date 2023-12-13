import getUsers from "@/library/getUsers";

export default async function DisplayJenny(email) {
  // need to put email into the search function so it works with any user that logs in

  const userData = await getUsers();
  console.log(userData); //displays

  const jenny = userData.find(
    (user) => user.email === "jenny.smith@example.com"
  );

  if (jenny.email === "jenny.smith@example.com") {
    const loanAmount = jenny.mortgage.outstanding_balance;
    const userMonthlyPayment = jenny.mortgage.monthly_payment;
    const userInterestRate = jenny.mortgage.interest_rate;
    const loanLength = jenny.mortgage.term_years;
    const userName = jenny.name;

    console.log(loanAmount);
    console.log(userMonthlyPayment);
    console.log(userInterestRate);

    return {
      loanLength,
      loanAmount,
      userMonthlyPayment,
      userInterestRate,
      userName,
    };
  }
  console.log("no user found");
}
