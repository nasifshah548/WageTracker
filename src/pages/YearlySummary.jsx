import React from "react";
import { parseISO, getYear } from "date-fns";

const YearlySummary = ({ entries }) => {
  const currentYear = new Date().getFullYear();

  const yearlyEntries = Object.entries(entries).filter(([date]) => {
    const entryDate = parseISO(date);
    return getYear(entryDate) === currentYear;
  });

  const totalHours = yearlyEntries.reduce(
    (sum, [, entry]) => sum + (entry?.hours || 0),
    0
  );

  const totalEarnings = yearlyEntries.reduce(
    (sum, [, entry]) => sum + (entry?.hours || 0) * (entry?.rate || 0),
    0
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Yearly Summary ({currentYear})
      </h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="text-lg">Total Hours Worked:</p>
          <p className="text-2xl font-semibold">{totalHours}</p>
        </div>
        <div>
          <p className="text-lg">Total Earnings:</p>
          <p className="text-2xl font-semibold">${totalEarnings.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default YearlySummary;
