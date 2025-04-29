import React from "react";
import { isSameMonth, parseISO, format } from "date-fns";

const MonthlySummary = ({ entries }) => {
  const today = new Date();
  let totalHours = 0;
  let totalEarnings = 0;

  Object.entries(entries).forEach(
    ([
      dateStr,
      { hours = 0, rate = 0, overtimeHours = 0, overtimeRate = 0 },
    ]) => {
      const date = parseISO(dateStr);
      if (isSameMonth(date, today)) {
        totalHours += hours + overtimeHours;
        totalEarnings += hours * rate + overtimeHours * overtimeRate;
      }
    }
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Monthly Summary</h2>
      <p className="text-gray-600 mb-1">Month: {format(today, "MMMM yyyy")}</p>
      <p className="text-gray-700 font-medium">Total Hours: {totalHours}</p>
      <p>
        Total Earnings:{" "}
        <span className="text-blue-600 font-bold text-lg">
          ${totalEarnings.toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default MonthlySummary;
