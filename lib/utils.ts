import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, isValid } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLabel(value: string, options: any[]) {
  return options.find((o) => o.value === value)?.label;
}

export const formattedDate = (
  date: string,
  formatting: string = "EEE dd MMM",
) => {
  const parsedDate = new Date(date);

  if (!date || !isValid(parsedDate)) {
    return date;
  }

  return format(parsedDate, formatting);
};
