import React, { useState, useEffect } from "react";
import DailyEntryForm from "./components/DailyEntryForm";
import WeeklySummary from "./pages/WeeklySummary";
import MonthlySummary from "./pages/MonthlySummary";
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
    <div className="App">
      <h1>WageTracker</h1>
      <DailyEntryForm onSubmit={handleSubmit} />
      <WeeklySummary entries={entries} />
      <MonthlySummary entries={entries} />
    </div>
  );
}

export default App;
