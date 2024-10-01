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
  const [year, month, day] = dateString?.split('-').map(Number);
  const convertedDate = new Date(year, month - 1, day);
  return convertedDate
}

export function Utils___CalculateBookingPrice(checkin: Date, checkout: Date, costPerNight: number): number {
  // const checkinDate = new Date(checkin);
  // const checkoutDate = new Date(checkout);
  const checkinDate = checkin;
  const checkoutDate = checkout;

  // Calculate the difference in time (in milliseconds)
  const timeDifference = checkoutDate.getTime() - checkinDate.getTime();

  // Convert time difference from milliseconds to days
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  // Round up for partial days
  const numberOfDays = Math.ceil(daysDifference);

  // Calculate total cost
  return numberOfDays * costPerNight;
}

export function Utils___DateDifference(date1: Date, date2: Date) {
  const timeDifference = date1.getTime() - date2.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  const numberOfDays = Math.ceil(daysDifference);
  return numberOfDays
}
