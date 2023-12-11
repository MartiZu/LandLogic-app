"use client";
import GetStartedCard from "./GetStartedCard";
import PreferenceTool from "./PreferenceTool";
import { useState } from "react";
import Image from "next/image";

export default function Questionnaire() {
  //manage the visibility of the preferenceTool
  const [preferenceToolVisible, setPreferenceToolVisible] = useState(false);

  const handleSubmit = () => {
    setPreferenceToolVisible(true);
    console.log(preferenceToolVisible);
  };

  return (
    <main>
      <div className="flex flex-col items-center">
        {!preferenceToolVisible ? (
          <>
            <GetStartedCard handleSubmit={handleSubmit} />
          </>
        ) : (
          <>
            <PreferenceTool />
          </>
        )}
        <Image
          className="mt-8"
          src={"/Logo_lendlogic.png"}
          width={200}
          height={300}
          alt="LandLogic Logo"
        />
      </div>
    </main>
  );
}
