"use client";

import { useState } from "react";
import DisplayNewBuyerInformation from "./DisplayNewBuyerInformation";
import Image from "next/image";

export default function NewBuyerReport({ value, property }) {
  const { postcode, property_value } = value;
  const [propertyValue, setPropertyValue] = useState(property_value);
  const [furtherInfoVisible, setFurtherInfoVisible] = useState(false);
  const [propertyPostcode, setPropertyPostcode] = useState(postcode);
  console.log(property); //prints undefined

  const buttonText = furtherInfoVisible ? "Hide" : "Find Out More";

  const deposit = propertyValue * 0.2;

  //write click hangler for furtherInfoVisible button
  function clickHandler() {
    setFurtherInfoVisible(!furtherInfoVisible);
  }
  // console.log(value);

  const handleSearch = (e) => {
    setPropertyValue(e.target.value);
  };

  return (
    <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
      <h2 className="font-normal py-7 text-3xl text-purple-accent">
        Your New Buyer Report
      </h2>
      <p className="py-2 font-normal text-xl">
        We looked at properties around your area in{" "}
        <span className="text-2xl font-bold text-purple-accent">
          {postcode}
        </span>
        . Based on the market value your estimated deposit is{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{deposit}
        </span>{" "}
        <span className="text-xs"><br />(reference 2-bedroom properties).</span>
      </p>
      
      <div className="flex justify-center items-center">
        {furtherInfoVisible ? (
          <DisplayNewBuyerInformation value={value} />
        ) : (<div><Image
        src="/Toggle_man.png"
        alt="A man using toggles"
        width={300}
        height={200}
        />
        <div> <p className="py-2 font-normal text-xl">Searching in another area?</p>
        <button className="w-48 h-16 bg-purple-accent m-5 rounded-full text-xl text-off-white font-semibold shadow-button">Click here!</button> </div> </div>)}
      </div>
      <button
        className="w-48 h-16 bg-purple-accent m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
        onClick={clickHandler}
      >{buttonText}</button>
      {/* <div>
        <input
          type="text"
          placeholder="Search..."
          value={}
          onChange={}
        />
        <button onClick={}>Search</button>
      </div> */}
    </div>
  );
}
