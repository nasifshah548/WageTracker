import React from "react";
import {
  startOfWeek,
  endOfWeek,
  isWithinInterval,
  parseISO,
  format,
} from "date-fns";

const WeeklySummary = ({ entries }) => {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(today, { weekStartsOn: 1 }); // Sunday

  let totalHours = 0;
  let totalEarnings = 0;

  Object.entries(entries).forEach(
    ([
      dateStr,
      { hours = 0, rate = 0, overtimeHours = 0, overtimeRate = 0 },
    ]) => {
      const date = parseISO(dateStr);
      if (isWithinInterval(date, { start: weekStart, end: weekEnd })) {
        totalHours += hours + overtimeHours;
        totalEarnings += hours * rate + overtimeHours * overtimeRate;
      }
    }
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Summary</h2>
      <p className="text-gray-600 mb-1">
        Week: {format(weekStart, "MMM d")} – {format(weekEnd, "MMM d, yyyy")}
      </p>
      <p className="text-gray-700 font-medium">Total Hours: {totalHours}</p>
      <p>
        Total Earnings:{" "}
        <span className="text-green-600 font-bold text-lg">
          ${totalEarnings.toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default WeeklySummary;
