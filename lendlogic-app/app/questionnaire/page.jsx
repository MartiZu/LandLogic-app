import GetStartedCard from "./GetStartedCard";
import PreferenceTool from "./PreferenceTool";
import Image from "next/image";
import { cookies } from "next/headers";
import QuestionnaireContent from "./QuestionnaireContent";

export default function Questionnaire() {
  //manage the preferences cookies
  async function setQuestionCookies(qNum, aNum) {
    "use server";
    cookies().set(qNum, aNum);
    // console.log(`Cookie set to ${qNum}:${aNum}`);
  }
  return (
    <main>
      <div className="flex flex-col items-center">
        <QuestionnaireContent cookieHandler={setQuestionCookies} />
        {/* <Image
          className="mt-8"
          src={"/Logo_lendlogic.png"}
          width={200}
          height={300}
          alt="LandLogic Logo"
        /> */}
      </div>
    </main>
  );
}
