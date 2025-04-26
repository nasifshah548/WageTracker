import React from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  isWithinInterval,
  parseISO,
} from "date-fns";

const WeeklySummary = ({ entries }) => {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 1 }); // Monday
  const end = endOfWeek(today, { weekStartsOn: 1 }); // Sunday

  const weeklyEntries = Object.entries(entries).filter(([dateStr]) =>
    isWithinInterval(parseISO(dateStr), { start, end })
  );

  const totalHours = weeklyEntries.reduce(
    (sum, [, { hours }]) => sum + hours,
    0
  );
  const totalEarnings = weeklyEntries.reduce(
    (sum, [, { hours, rate }]) => sum + hours * rate,
    0
  );

  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 w-full max-w-xl mx-auto my-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Weekly Summary
      </h2>
      <p className="text-gray-600 mb-1">
        Week: {format(start, "MMM d")} – {format(end, "MMM d, yyyy")}
      </p>
      <p className="text-gray-700 font-medium">Total Hours: {totalHours}</p>
      <p className="text-green-600 font-bold text-lg">
        Total Earnings: ${totalEarnings.toFixed(2)}
      </p>
    </div>
  );
};

export default WeeklySummary;
