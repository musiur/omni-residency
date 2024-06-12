
import { z } from "zod";
export const ReservationFormSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),
  email: z.string().email(),
  number: z.string().min(11, "Need a valid contact number e.g 01XXXXXXXXX"),
  numberOfPeople: z.string(),
  date: z.string(),
  time: z.string(),
  additionalInformation: z.string(),
});

export type TReservationFormSchema = z.infer<typeof ReservationFormSchema>;

export type TRestaurantOverviewData = {
  id: number;
  location: string;
  hotelName: string;
  shortDescription: string;
  hours: { id: number; type: "Breakfast" | "Lunch" | "Dinner"; time: string }[];
  cuisine: string;
};

export type T__SelectOption = {
  label: string,
  value: string
}