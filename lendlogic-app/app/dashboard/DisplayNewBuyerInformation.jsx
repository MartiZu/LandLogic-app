"use client";

import { useState, useEffect } from "react";

export default function DisplayNewBuyerInformation({ value }) {
  const { salary, property_value, credit_score } = value;
  console.log(value);
  const [propertyValue, setPropertyValue] = useState(property_value);
  const [monthlySaving, setMonthlySaving] = useState(500);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);

  // Handle change for the property value input
  const handlePropertyValueChange = (e) => {
    const newValue = e.target.value;
    setPropertyValue(newValue);
  };

  // useEffect to recalculate when property value, years, or months change
  useEffect(() => {
    let deposit = propertyValue * 0.2;
    const totalMonths = deposit / monthlySaving;
    setYears(Math.floor(totalMonths / 12));
    setMonths(Math.floor(totalMonths % 12));

    // setMonthlySaving(newMonthlySaving);
  }, [propertyValue, monthlySaving]);

  return (
    <div className="mt-8 mx-4 text-center text-2xl">
      {/* Display the calculated monthly saving and estimated time to save */}
      <p className="py-2 font-normal text-xl">
        Your monthly saving could be{" "}
        <span className="text-2xl font-bold text-purple-accent">
          £{monthlySaving}
        </span>{" "}
        a month and have your deposit in{" "}
        <span className="text-2xl font-bold text-purple-accent">{years}</span>{" "}
        years and{" "}
        <span className="text-2xl font-bold text-purple-accent">{months}</span>{" "}
        months.
      </p>
      <div id="toggles" className="flex flex-col items-center">
        <label className="py-4" htmlFor="monthlySaving">
          Monthly Saving: {monthlySaving}
        </label>
        <input
          id="monthlySaving"
          className="w-1/2"
          type="range"
          min="100"
          max="1000"
          step="50"
          value={monthlySaving}
          onChange={(e) => setMonthlySaving(e.target.value)}
        />
        <label className="py-4" htmlFor="years">
          Years: {years}
        </label>
        <input
          id="years"
          className="w-1/2"
          type="range"
          min="1"
          max="50"
          step="1"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
        <label className="py-4" htmlFor="months">
          Months: {months}
        </label>
        <input
          id="months"
          className="w-1/2"
          type="range"
          min="1"
          max="12"
          step="1"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>
      <div id="propertyInput" className="flex flex-col items-center">
        <label className="py-4" htmlFor="propertyValue">
          Property Value: £
        </label>
        <input
          id="propertyValue"
          className="w-1/2"
          type="number"
          value={propertyValue}
          onChange={handlePropertyValueChange}
        />
      </div>
    </div>
  );
}
