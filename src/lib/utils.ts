import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRef(): string {
  const num = Math.floor(10000 + Math.random() * 90000);
  return `SK-DEMO-${num}`;
}
