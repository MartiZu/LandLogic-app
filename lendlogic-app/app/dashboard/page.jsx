import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
// import RemortgageReport from "./RemortgageReport";
import DisplayJenny from "../customHooks/DisplayJenny";

import DisplayKat from "../customHooks/DisplayKat";
import DepositButton from "./NewBuyerReport";
import { Suspense } from "react";
import Loading from "../Loading";
import Image from "next/image";


export default async function Dashboard() {
  //destructing the object returned from the custom hook
  const jenny = await DisplayJenny();
  console.log(jenny);

  const kat = await DisplayKat();
  console.log(kat);

  return (
   <Suspense fallback={<Loading />}>
      <div className="flex flex-col my-8 rounded-3xl text-center text-2xl">
        <h1 className="font-normal pt-7 text-3xl text-purple-accent">We've got your back!</h1>
        <p className="px-2 py-4 text-lg">
          Welcome {jenny.userName}, here is everything you need to know about Remortgaging
        </p>
{/*<RemortgageReport value={jenny} />*/}
        <DepositButton value={kat} /> 
        <LearningSection />
        <Newsletter />
      </div>
    </Suspense>
  );
}
