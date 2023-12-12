import React from 'react'

const Checklist = () => {
  return (
    <div className="mt-6 mx-3 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl h-50 ">

        <div className="mt-5 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl w-1/2">
            First-time buyer schemes
        </div>

        <div className="mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl w-1/2 h-15">
            Stamp duty
        </div>

        <div className="mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl w-1/2">
            Survey
        </div>

     

        <div className="mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl relative h-80 w-32 float-right  flex items-center justify-center mt-[-325px] mr-2">
            Interest Rates 2023
        
    </div>
    <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button "
        
        >
          See more
        </button>
    </div>
  )
}

export default Checklist