import React from "react";
import { getAllWeekDates } from "../services/dateUtils";

const WeeklySummary = ({ entries }) => {
  const today = new Date();
  const weekDates = getAllWeekDates(today);

  let totalHours = 0;
  let totalEarnings = 0;

  weekDates.forEach((dateStr) => {
    const entry = entries[dateStr];
    if (entry) {
      totalHours += entry.hours;
      totalEarnings += entry.total;
    }
  });

  return (
    <div>
      <h3>Weekly Summary</h3>
      <p>Total Hours: {totalHours}</p>
      <p>Total Earned: ${totalEarnings.toFixed(2)}</p>
    </div>
  );
};

export default WeeklySummary;
