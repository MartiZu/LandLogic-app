import Step from "./Step";
import GetSteps from "../customHooks/DisplaySteps";

export default async function NewBuyerTimeline({ steps }) {
  // const steps = await GetSteps();
  //debugging
  // console.log("steps", steps);
  // console.log("Debugging calling the function steps", GetSteps());
  console.log("Debugging steps", steps);
  return (
    <div>
      <h2>Gamefied Buyer Timeline</h2>
      {/* {steps.map((step) => (
        <Step key={step.id} title={step.title} tasks={step.tasks} />
      ))} */}
    </div>
  );
}
