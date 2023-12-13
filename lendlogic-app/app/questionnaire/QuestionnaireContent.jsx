"use client";
//import the get started card and the pref tool
import GetStartedCard from "./GetStartedCard";
import PreferenceTool from "./PreferenceTool";
import { useState } from "react";

// this allows us to convert the page into a server rendered thing
// whcih means we can use cookies
export default function QuestionnaireContent({ cookieHandler }) {
  //define the state that decides which component is visible
  const [preferenceToolVisible, setPreferenceToolVisible] = useState(false);

  //function to handle the click on GetStartedTool so that it changes the above state
  const handleSubmit = () => {
    setPreferenceToolVisible(true);
    console.log(preferenceToolVisible);
  };

  //use ternary operator to decide which to show
  return (
    <>
      {!preferenceToolVisible ? (
        <>
          <GetStartedCard handleSubmit={handleSubmit} />
        </>
      ) : (
        <>
          <PreferenceTool cookieHandler={cookieHandler} />
        </>
      )}
    </>
  );
}
