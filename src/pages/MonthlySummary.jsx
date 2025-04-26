import React from "react";
import { format, isSameMonth, parseISO } from "date-fns";

const MonthlySummary = ({ entries }) => {
  const today = new Date();
  const monthlyEntries = Object.entries(entries).filter(([dateStr]) =>
    isSameMonth(parseISO(dateStr), today)
  );

  const totalHours = monthlyEntries.reduce(
    (sum, [, { hours }]) => sum + hours,
    0
  );
  const totalEarnings = monthlyEntries.reduce(
    (sum, [, { hours, rate }]) => sum + hours * rate,
    0
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto my-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Monthly Summary
      </h2>
      <p className="text-gray-600 mb-1">Month: {format(today, "MMMM yyyy")}</p>
      <p className="text-gray-700 font-medium">Total Hours: {totalHours}</p>
      <p className="text-green-600 font-bold text-lg">
        Total Earnings: ${totalEarnings.toFixed(2)}
      </p>
    </div>
  );
};

export default MonthlySummary;
