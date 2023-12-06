// import NewBuyerLearningTool from './NewBuyerLearningTool.jsx';
// import RemortgageLearningTool from './RemortgageLearningTool.jsx';

import Newsletter from "./Newsletter.jsx";
import home from "./house.jpg"
export default function LearningSection() {
  return (
    <>
    <p className="mt-5 flex flex-col items-center">Welcome Jenny</p>
<div className="mt-32 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
<h2>Your Remortgage Report</h2>
<p>Get insights into remortgaging by using our interactive tool.</p>
<button class="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button">View My Report</button>
</div>
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
