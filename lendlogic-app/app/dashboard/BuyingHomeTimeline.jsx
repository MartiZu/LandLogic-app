"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NewBuyerTimeline from "./NewBuyerTimeline";

export default function BuyingHomeTimeline() {
  //state to handle whether tool is image is displayed
  const [toolVisible, setToolVisible] = useState(false);
  //write click hangler for toolVisible button
  function clickHandler() {
    setToolVisible(!toolVisible);
  }
  return (
    <>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
          <h2 className="font-normal py-7 text-3xl text-purple-accent">
            New Buyer Timeline
          </h2>
          <p className="py-2 font-normal text-xl">
            Everything you need to know when it comes to buy a property.
          </p>
          {toolVisible ? (
            <NewBuyerTimeline />
          ) : (
            <div className="flex justify-center">
              <Image
                src="/clap_img.png"
                alt="A man using toggles"
                width={300}
                height={200}
              />
            </div>
          )}
        <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
          type="submit"
          onClick={clickHandler}
        >
          See timeline
        </button>
      </div>
    </>
  );
}
