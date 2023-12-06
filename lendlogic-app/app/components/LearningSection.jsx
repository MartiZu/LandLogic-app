// import NewBuyerLearningTool from './NewBuyerLearningTool.jsx';
// import RemortgageLearningTool from './RemortgageLearningTool.jsx';

import Newsletter from "./Newsletter.jsx";
import RemortgageReport from "./RemortgageReport.jsx";
// import home from "./house.jpg"
export default function LearningSection() {
  return (
    <>
    <RemortgageReport />
    <div className="mt-32 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
    <h2>Getting ready to remortgage</h2>
    <p>Guide</p>
    
    <button class="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button">See More</button>
    </div>
    <div className="mt-8 mx-4 mb-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
    <Newsletter />
    </div>
    </>
    
  )
}
