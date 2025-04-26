import React from "react";
import { isDateInThisMonth } from "../services/dateUtils";

const MonthlySummary = ({ entries }) => {
  let totalHours = 0;
  let totalEarnings = 0;

  Object.entries(entries).forEach(([dateStr, entry]) => {
    if (isDateInThisMonth(dateStr)) {
      totalHours += entry.hours;
      totalEarnings += entry.total;
    }
  });

  return (
    <div>
      <h3>Monthly Summary</h3>
      <p>Total Hours: {totalHours}</p>
      <p>Total Earned: ${totalEarnings.toFixed(2)}</p>
    </div>
  );
};

export default MonthlySummary;
