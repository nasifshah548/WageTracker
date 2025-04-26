import React, { useState, useEffect } from "react";
import DailyEntryForm from "./components/DailyEntryForm";
import DailyInputCard from "./components/DailyInputCard";
import WeeklySummary from "./pages/WeeklySummary";
import MonthlySummary from "./pages/MonthlySummary";
import YearlySummary from "./pages/YearlySummary";
import { getAllEntries, saveEntry } from "./storage/localStorageService";

function App() {
  const [entries, setEntries] = useState({});

  useEffect(() => {
    setEntries(getAllEntries());
  }, []);

  const handleSubmit = (dateStr, entry) => {
    saveEntry(dateStr, entry);
    setEntries((prev) => ({ ...prev, [dateStr]: entry }));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
          WageTracker
        </h1>

        {/* Daily Input Section */}
        <div className="mb-6">
          <DailyInputCard>
            <DailyEntryForm onSubmit={handleSubmit} />
          </DailyInputCard>
        </div>

        {/* Weekly, Monthly & Yearly Summaries */}
        <div className="grid md:grid-cols-3 gap-6">
          <WeeklySummary entries={entries} />
          <MonthlySummary entries={entries} />
          <YearlySummary entries={entries} />
        </div>
      </div>
    </div>
  );
}

export default App;
