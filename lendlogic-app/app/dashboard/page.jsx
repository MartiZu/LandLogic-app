import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
import RemortgageReport from "./RemortgageReport";
import DisplayJenny from "../customHooks/DisplayJenny";
import { Suspense } from "react";
import Loading from "../Loading";
import Image from "next/image";

export default async function Dashboard() {
  //destructing the object returned from the custom hook
  const jenny = await DisplayJenny();
  console.log(jenny);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col my-8 rounded-3xl text-center text-2xl">
        <h1 className="font-normal pt-7 text-3xl text-purple-accent">We've got your back!</h1>
        <p className="px-2 py-4 text-lg">
          Welcome {jenny.userName}, here is everything you need to know about Remortgaging
        </p>
        {/* <div className="flex flex-col items-center">
          <Image
            src={"/shake-hands.png"}
            width={150}
            height={300}
            alt="Handshake"
          />
        </div> */}
        <RemortgageReport value={jenny} />
        <LearningSection />
        <Newsletter />
      </div>
    </Suspense>
  );
}
