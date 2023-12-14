import Step from "./Step";

export default function NewBuyerTimeline({ steps }) {
console.log(steps);
  return (
    <div>
      <h2>Gamefied Buyer Timeline</h2>
      {stepsData.map((step) => (
        <Step key={step.id} title={step.title} tasks={step.tasks} />
      ))}
    </div>
  );
}
