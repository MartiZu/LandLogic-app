"use client"
import GetStartedCard from "../components/GetStartedCard";
import PreferenceTool from "../components/PreferenceTool";
import { useState } from "react";

export default function Questionnaire() {
  //manage the visibility of the preferenceTool
  const [preferenceToolVisible, setPreferenceToolVisible] = useState(false);

  const handleSubmit = () => {
    setPreferenceToolVisible(true);
    console.log(preferenceToolVisible)
  }

  

  return (
    <main>
      {!preferenceToolVisible ? (
        <GetStartedCard handleSubmit={handleSubmit}/>
      ) : (<PreferenceTool />)}
    </main>
  );
}
