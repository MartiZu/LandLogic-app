import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
import RemortgageReport from "./RemortgageReport";
import DisplayJenny from "../customHooks/DisplayJenny";
import { Suspense } from "react";
import Loading from "../Loading";


export default async function Dashboard() {
  //destructing the object returned from the custom hook
  const jenny = await DisplayJenny();
  console.log(jenny);

  return (

    <div className="my-8 rounded-3xl text-center text-2xl">
      <h1 className="font-extrabold pt-7 text-5xl">Welcome Jenny!</h1>
      <RemortgageReport value={jenny} />
      <LearningSection />
      <Newsletter />
    </div>
  
  );
}
