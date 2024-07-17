import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Utils___DateFormatter = (currentDate: Date) => {
  // Format the date to YYYY-MM-DD
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(currentDate.getDate()).padStart(2, '0');


return `${year}-${month}-${day}`
}

export const Utils___DateExtracter = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const convertedDate = new Date(year, month - 1, day);
  console.log(convertedDate)
  return convertedDate
}
