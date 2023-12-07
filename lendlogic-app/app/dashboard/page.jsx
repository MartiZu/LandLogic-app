import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
import RemortgageReport from "./RemortgageReport";
import DisplayJenny from "../customHooks/DisplayJenny";

export default async function Dashboard() {
  //destructing the object returned from the custom hook
  const jenny = await DisplayJenny();
  console.log(jenny);

  return (
    <div className="mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
      <h1 className="font-extrabold py-7">Welcome Jenny!</h1>
      <RemortgageReport value={jenny}/>
      <LearningSection />
      <Newsletter />
    </div>
  );
}
