import React, { useState } from "react";
import { format } from "date-fns";

const DailyInputCard = ({ onSubmit }) => {
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [overtimeHours, setOvertimeHours] = useState("");
  const [overtimeRate, setOvertimeRate] = useState("");
  const [breakMinutes, setBreakMinutes] = useState("");
  const [taxRate, setTaxRate] = useState(""); // New field for tax %

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hours || !rate) return;

    onSubmit({
      date,
      hours: Number(hours),
      rate: Number(rate),
      overtimeHours: Number(overtimeHours) || 0,
      overtimeRate: Number(overtimeRate) || 0,
      breakMinutes: Number(breakMinutes) || 0,
      taxRate: Number(taxRate) || 0, // Include tax rate
    });

    setHours("");
    setRate("");
    setOvertimeHours("");
    setOvertimeRate("");
    setBreakMinutes("");
    setTaxRate(""); // Clear field
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl mx-auto mt-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Daily Work Entry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
          />
        </div>

        {/* Work Hours */}
        <div>
          <label
            htmlFor="hours"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hours Worked
          </label>
          <input
            id="hours"
            type="number"
            min="0"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
            placeholder="e.g. 8"
          />
        </div>

        {/* Hourly Rate */}
        <div>
          <label
            htmlFor="rate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hourly Rate ($)
          </label>
          <input
            id="rate"
            type="number"
            min="0"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
            placeholder="e.g. 25"
          />
        </div>

        {/* Overtime Hours */}
        <div>
          <label
            htmlFor="overtimeHours"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Overtime Hours
          </label>
          <input
            id="overtimeHours"
            type="number"
            min="0"
            value={overtimeHours}
            onChange={(e) => setOvertimeHours(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
            placeholder="e.g. 2"
          />
        </div>

        {/* Overtime Rate */}
        <div>
          <label
            htmlFor="overtimeRate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Overtime Rate ($)
          </label>
          <input
            id="overtimeRate"
            type="number"
            min="0"
            step="0.01"
            value={overtimeRate}
            onChange={(e) => setOvertimeRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
            placeholder="e.g. 40"
          />
        </div>

        {/* Break Time */}
        <div>
          <label
            htmlFor="breakMinutes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Break Time (minutes)
          </label>
          <input
            id="breakMinutes"
            type="number"
            min="0"
            step="1"
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
            placeholder="e.g. 30"
          />
        </div>

        {/* Tax Rate */}
        <div>
          <label
            htmlFor="taxRate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Income Tax Rate (%)
          </label>
          <input
            id="taxRate"
            type="number"
            min="0"
            step="0.1"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
            placeholder="e.g. 15"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 shadow-md"
          >
            Submit Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default DailyInputCard;
