
import { z } from "zod";
export const ReservationFormSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),
  email: z.string().email(),
  mobile: z.string().min(11, "Need a valid mobile number e.g 01XXXXXXXXX"),
  number_of_people: z.string(),
  reservation_date: z.string(),
  reservation_time: z.string(),
  additional_information: z.string(),
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
export const GymRequestMembershipFormSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),
  gender: z.enum(["Male", "Female"]),
  age: z.number(),
  email: z.string().email(),
  mobile: z.string().min(11, "Need a valid mobile number e.g 01XXXXXXXXX"),
  additional_information: z.string(),
});

export type TGymRequestMembershipFormSchema = z.infer<typeof GymRequestMembershipFormSchema>;