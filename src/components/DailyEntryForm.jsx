import React, { useState } from "react";
import { formatDate } from "../services/dateUtils";

const DailyEntryForm = ({ onSubmit }) => {
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const today = formatDate(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hours && rate) {
      onSubmit(today, {
        hours: Number(hours),
        rate: Number(rate),
        total: Number(hours) * Number(rate),
      });
      setHours("");
      setRate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Today's Data</h3>
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hourly Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DailyEntryForm;
