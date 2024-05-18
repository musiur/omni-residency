"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DatePicker from "./datepicker.molecule";
import Selector from "./select.molecule";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react";

const BookingFormSchema = z.object({
  checkin: z.date(),
  checkout: z.date(),
  guest: z.number(),
  room: z.number(),
  services: z.array(
    z.object({
      id: z.string().optional(),
      label: z.string(),
      value: z.string(),
    })
  ),
  extraServices: z.array(
    z.object({
      id: z.string().optional(),
      label: z.string(),
      value: z.string(),
      price: z.number(),
    })
  ),
});

type TBookingFormSchema = z.infer<typeof BookingFormSchema>;

const BookingForm = () => {
  const form = useForm<TBookingFormSchema>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: {},
  });
  return (
    <div className="border p-4 md:p-8 rounded-[10px] flex flex-col items-center justify-between gap-8">
      <div className="grid grid-cols-1 gap-8">
        <div className="w-full">
          <p className="inline-flex text-[16px] md:text-[20px] font-semibold text-primary pb-2 border-b-2 border-primary">
            Booking
          </p>
        </div>
        <Form {...form}>
          <form>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="grid grid-cols-1 gap-[16px]">
                <label className="text-muted_gray">Check In</label>
                <DatePicker />
              </div>
              <div className="grid grid-cols-1 gap-[16px]">
                <label className="text-muted_gray">Check Out</label>
                <DatePicker />
              </div>
              <div className="grid grid-cols-1 gap-[16px]">
                <label className="text-muted_gray">Guests</label>
                <Selector />
              </div>
              <div className="grid grid-cols-1 gap-[16px]">
                <label className="text-muted_gray">Rooms</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-[8px]">
                      <User className="w-4 h-4 stroke-plain_gray" />
                      <SelectValue placeholder="Select Room Number" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Rooms</SelectLabel>
                      {[1, 2, 3, 4, 5, 6].map((num) => {
                        return (
                          <SelectItem value={num.toString()} key={num}>
                            {num}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-[16px]">
                <label className="text-muted_gray">Services</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-[8px]">
                      <User className="w-4 h-4 stroke-plain_gray" />
                      <SelectValue placeholder="Select services" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      {[1, 2, 3, 4, 5, 6].map((num) => {
                        return (
                          <SelectItem value={num.toString()} key={num}>
                            {num}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-[16px]">
                <label className="text-muted_gray opacity-0">Services</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-[8px]">
                      <User className="w-4 h-4 stroke-plain_gray" />
                      <SelectValue placeholder="Select services" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      {[1, 2, 3, 4, 5, 6].map((num) => {
                        return (
                          <SelectItem value={num.toString()} key={num}>
                            {num}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full flex items-center justify-between gap-4 bg-primary/20 p-2 md:p-4 rounded-[10px]">
        <Button>Book now</Button>
        <div className="flex flex-col items-end justify-end">
          <p className="font-bold text-[12px] md:text-[16px]">Total $127</p>
          <p>Available rooms 3</p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
