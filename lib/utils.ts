import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLabel(value: string, options: any[]) {
  return options.find((o) => o.value === value)?.label;
}
