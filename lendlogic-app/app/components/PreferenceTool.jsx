"use client";
import Link from "next/link";
import { RemortgageQuestion } from "./RemortgageQuestion";
import Termniology from "./Termniology";
import { useState } from "react";

export default function PreferenceTool() {
  // set state
  const [questionNumber, setQuestionNumber] = useState(1);

  // handledClick on input
 const handleClick = (e, num) => {
  e.preventDefault()

   setQuestionNumber(num)
   console.log(num)
  }
  return (
    <>
        <div className="flex flex-col mt-32 mx-4 mb-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
      {questionNumber === 1 ? (
        <>
          <form className="flex flex-col my-5">
            <h2>What are you looking for</h2>
            <input
              className="shadow-card rounded-3xl"
              value="New Buyer"
              type="submit"
              onClick={(e) => handleClick(e, 2)}
            ></input>
            <input value="Remortgage" type="submit" onClick={(e) => handleClick(e, 3)}></input>
            <input value="Moving House" type="submit"onClick={(e) => handleClick(e, 4)}></input>
            <input value="Just Browsing" type="submit"onClick={(e) => handleClick(e, 5)}></input>
          </form> 
           
    
      </>
      ) : null}
      {questionNumber === 2 ? (
        <>
          <form className="flex flex-col my-5">
            <h2>What are you looking for</h2>
            <input
              className="shadow-card rounded-3xl"
              value="New Buyer"
              type="submit"
            ></input>
            <input value="Remortgage" type="submit" onClick={(e) => handleClick(e, 2)}></input>
            <input value="Moving House" type="submit"></input>
            <input value="Just Browsing" type="submit"></input>
          </form> 
           
    
      </>
      ) : null}

{questionNumber === 3 ? (
        <>
          <form className="flex flex-col my-5">
            <h2>What are your Remortgage goals?</h2>
            <input
              className="shadow-card rounded-3xl"
              value="Repay your mortgage quicker"
              type="submit"
            ></input>
            <input value="Reduce your monthly payments" type="submit" onClick={(e) => handleClick(e, 2)}></input>
            <input value="Change mortgage type" type="submit"></input>
            <input value="Release equity" type="submit"></input>
          </form> 
           
    
      </>
      ) : null}

{questionNumber === 4 ? (
        <>
          <form className="flex flex-col my-5">
            <h2>What are you looking for</h2>
            <input
              className="shadow-card rounded-3xl"
              value="New Buyer"
              type="submit"
            ></input>
            <input value="Remortgage" type="submit" onClick={(e) => handleClick(e, 2)}></input>
            <input value="Moving House" type="submit"></input>
            <input value="Just Browsing" type="submit"></input>
          </form> 
           
    
      </>
      ) : null}
      </div>

      {/* <p>Repay your mortgage quicker</p>
      <p></p>
      <p></p>
      <p></p> */}
<div className="flex flex-row justify-center items-center">
        <div className="current-circle w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
        <div className="w-3 h-3 rounded-full bg-purple-300 shadow-card mx-1"></div>
        <div className="w-2 h-2 rounded-full bg-off-white shadow-card mx-1"></div>
      </div>
    </>
  );
}
