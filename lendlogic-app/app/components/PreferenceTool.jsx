import Link from "next/link";
import { RemortgageQuestion } from "./RemortgageQuestion";
import Termniology from "./Termniology";

export default function PreferenceTool() {
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col bg-slate-600 my-5">
        <h2>What are you looking for</h2>
        <input value="New Buyer" type="submit"></input>
        <input value="Remortgage" type="submit"></input>
        <input value="Moving House" type="submit"></input>
        <input value="Just Browsing" type="submit"></input>
      </form>
      {/* <p>Repay your mortgage quicker</p>
      <p>Reduce your monthly payments</p>
      <p>Change mortgage type</p>
      <p>Release equity</p> */}
      </div >
   
  );
}
