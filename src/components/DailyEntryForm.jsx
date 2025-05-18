import React, { useState } from "react";

const DailyEntryForm = ({ onSubmit }) => {
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [overtimeHours, setOvertimeHours] = useState("");
  const [overtimeRate, setOvertimeRate] = useState("");
  const [breakMinutes, setBreakMinutes] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const entry = {
      hours: Number(hours),
      rate: Number(rate),
      overtimeHours: Number(overtimeHours) || 0,
      overtimeRate: Number(overtimeRate) || 0,
      breakMinutes: Number(breakMinutes) || 0,
    };

    onSubmit(date, entry);

    // Reset form
    setHours("");
    setRate("");
    setOvertimeHours("");
    setOvertimeRate("");
    setBreakMinutes("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Hours Worked
        </label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Hourly Rate
        </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Overtime Hours
        </label>
        <input
          type="number"
          value={overtimeHours}
          onChange={(e) => setOvertimeHours(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Overtime Rate
        </label>
        <input
          type="number"
          value={overtimeRate}
          onChange={(e) => setOvertimeRate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Break Time (in minutes)
        </label>
        <input
          type="number"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Save Entry
      </button>
    </form>
  );
};

export default DailyEntryForm;
