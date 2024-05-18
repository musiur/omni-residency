"use client";

import * as React from "react";
// import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, ChevronDown } from "lucide-react";

const DatePicker = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full px-[16px] py-[12px] justify-between items-center border-muted_gray",
            !date && "text-plain_gray"
          )}
        >
          <p className="flex justify-start items-center text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4 stroke-plain_gray" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </p>
          <ChevronDown className="w-4 h-4 stroke-plain_gray" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
