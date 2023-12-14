import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
// import RemortgageReport from "./RemortgageReport";
import DisplayUser from "../customHooks/DisplayUser";
import DisplayProperties from "../customHooks/DisplayProperties";
import DepositTool from "./NewBuyerReport";
import { Suspense } from "react";
import Loading from "../loading";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function Dashboard() {
  async function readUserCookie() {
    "use server";
    const currentUser = cookies().get("user_id");
    return currentUser.value;
  }
  const user = await readUserCookie();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  //destructing the object returned from the custom hook
  const currentUser = await DisplayUser(user);
  console.log(currentUser);

  const properties = await DisplayProperties();
  console.log(properties);
  // read cookies fucntion

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col my-8 rounded-3xl text-center text-2xl">
        <h1 className="font-normal pt-7 text-3xl text-purple-accent">
          We've got your back!
        </h1>
        <p className="px-2 py-4 text-lg">
          Welcome {currentUser.userName}, here is everything you need to know
        </p>
        {/*<RemortgageReport value={currentUser} />*/}
        <DepositTool value={currentUser} properties={properties} />
        <LearningSection />
        <Newsletter />
      </div>
    </Suspense>
  );
}
