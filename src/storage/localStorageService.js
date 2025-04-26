const STORAGE_KEY = "wage-tracker-entries";

export const saveEntry = (dateStr, entry) => {
  const data = getAllEntries();
  data[dateStr] = entry;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getAllEntries = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
};
