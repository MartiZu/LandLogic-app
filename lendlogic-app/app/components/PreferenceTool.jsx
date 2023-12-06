import Link from "next/link";
import { RemortgageQuestion } from "./RemortgageQuestion";
import Termniology from "./Termniology";

export default function PreferenceTool() {
  return (
    <>
      <div className="flex flex-col mt-32 mx-4 mb-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
        <form className="flex flex-col my-5">
          <h2>What are you looking for</h2>
          <input className="shadow-card rounded-3xl" value="New Buyer" type="submit"></input>
          <input value="Remortgage" type="submit"></input>
          <input value="Moving House" type="submit"></input>
          <input value="Just Browsing" type="submit"></input>
        </form>
        {/* <p>Repay your mortgage quicker</p>
      <p>Reduce your monthly payments</p>
      <p>Change mortgage type</p>
      <p>Release equity</p> */}
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="current-circle w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
        <div className="w-3 h-3 rounded-full bg-purple-300 shadow-card mx-1"></div>
        <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
      </div>
    </>
  );
}
