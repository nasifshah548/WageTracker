import {
  format,
  parseISO,
  isFriday,
  isSunday,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";

// Format date to yyyy-MM-dd (consistent storage key)
export const formatDate = (date) => format(date, "yyyy-MM-dd");

// Check if a given date is Friday
export const checkIsFriday = (date) => isFriday(parseISO(date));

// Check if a given date is Sunday
export const checkIsSunday = (date) => isSunday(parseISO(date));

// Get the week range for a given date
export const getWeekRange = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  const end = endOfWeek(date, { weekStartsOn: 1 });
  return { start, end };
};

// Get all dates of the current week
export const getAllWeekDates = (date) => {
  const { start, end } = getWeekRange(date);
  return eachDayOfInterval({ start, end }).map((d) => format(d, "yyyy-MM-dd"));
};

// Check if a date is in this month
export const isDateInThisMonth = (targetDate) => {
  return isSameMonth(new Date(), parseISO(targetDate));
};
