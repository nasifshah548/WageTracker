import React from "react";
import { parseISO, isSameYear } from "date-fns";

const YearlySummary = ({ entries }) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  let totalEarnings = 0;
  let totalHours = 0;
  let totalBreakMinutes = 0;

  Object.entries(entries).forEach(
    ([
      dateStr,
      {
        hours = 0,
        rate = 0,
        overtimeHours = 0,
        overtimeRate = 0,
        breakMinutes = 0,
      },
    ]) => {
      const entryDate = parseISO(dateStr);
      if (isSameYear(entryDate, today)) {
        totalHours += hours + overtimeHours;
        totalEarnings += hours * rate + overtimeHours * overtimeRate;
        totalBreakMinutes += breakMinutes;
      }
    }
  );

  const breakHours = Math.floor(totalBreakMinutes / 60);
  const breakRemainingMinutes = totalBreakMinutes % 60;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Yearly Summary ({currentYear})
      </h3>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="text-lg">Total Hours:</p>
          <p className="text-2xl font-semibold">{totalHours}</p>
        </div>
        <div>
          <p className="text-lg">Total Earned:</p>
          <p className="text-2xl font-semibold">
            <span className="text-purple-600">${totalEarnings.toFixed(2)}</span>
          </p>
        </div>
        <div>
          <p className="text-lg">Break Time:</p>
          <p className="text-2xl font-semibold">
            {breakHours > 0
              ? `${breakHours}h ${breakRemainingMinutes}m`
              : `${breakRemainingMinutes}m`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YearlySummary;
