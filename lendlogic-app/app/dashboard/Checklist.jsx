import React from 'react'


const Checklist = () => {
  return (
    <div className="text-2xl font-bold mt-6 mx-3 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl h-0 ">

        <div className="mt-5 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl w-1/2">
           <a href='https://www.moneysavingexpert.com/mortgages/right-to-buy/'>First-time buyer schemes</a> 
        </div>

        <div className="mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl w-1/2 h-15">
            <a href="https://www.moneysavingexpert.com/mortgages/stamp-duty/">Stamp Duty</a>
        </div>

        <div className="mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl w-1/2">
            <a href="https://www.which.co.uk/money/mortgages-and-property/first-time-buyers/buying-a-home/house-surveys-aZOET4F4Fudj">Survey</a>
        </div>

     

        <div className="flex-col mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl relative h-80 w-32 float-right  flex items-center justify-center mt-[-325px] mr-2">
          <img src="/house.jpg" alt="house"/>
           <a href="https://www.moneysavingexpert.com/banking/interest-rates/">Interest Rates 2023</a> 
        
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