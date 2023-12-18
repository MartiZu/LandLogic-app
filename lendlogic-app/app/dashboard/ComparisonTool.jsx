import React from 'react'


const ComparisonTool = () => {
  return (
    <>
    <section>
    <div className="mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="font-normal py-7 text-3xl text-purple-accent">Your results</h2>
        <p className="py-2 font-normal text-xl">These are the best deals for you:</p>
        <div className="py-2 font-normal text-xl">
           <div> Halifax</div>
        <p>£1,201</p>
        <p> 4.62%</p>
        <p>£999</p>
        <p>7.3%</p>
   
        <button className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button">Go to Lender</button>
        </div>
        <div className="py-2 font-normal text-xl">Swansea
        <p>£1,201</p>
        <p> 4.62%</p>
        <p>£999</p>
        <p>7.3%</p>
        <button className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button">Go to Lender</button>
        </div>

        </div>
        </section>
    </>
  )
}

export default ComparisonTool