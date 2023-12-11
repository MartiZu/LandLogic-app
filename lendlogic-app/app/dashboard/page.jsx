import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
// import RemortgageReport from "./RemortgageReport";
import DisplayJenny from "../customHooks/DisplayJenny";
import DisplayKat from "../customHooks/DisplayKat";
import DepositButton from "./DepositButton";

export default async function Dashboard() {
  //destructing the object returned from the custom hook
  const jenny = await DisplayJenny();
  console.log(jenny);

  const kat = await DisplayKat();
  console.log(kat);

  return (
    <div className="my-8 rounded-3xl text-center text-2xl">
      <h1 className="font-extrabold pt-7 text-5xl">Welcome Jenny!</h1>
      {/* //we swapped out components to test - need conditional logic */}
      <DepositButton value={kat} /> 
      <LearningSection />
      <Newsletter />
    </div>
  );
}
