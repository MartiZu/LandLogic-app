import LearningSection from "./LearningSection";
import Newsletter from "./Newsletter";
import RemortgageReport from "./RemortgageReport";

export default function Dashboard() {
  return (
    <div className="mt-32 mx-4 mb-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
      <h1 className="font-extrabold py-7">Welcome Jenny!</h1>
      <RemortgageReport />
      <LearningSection />
      <Newsletter />
    </div>
  );
}
