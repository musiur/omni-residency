"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import DatePicker from "./datepicker.molecule";
import Selector from "./select.molecule";

const SearchBox = ({ tab }: { tab: boolean }) => {
  const [formData, setFormData] = useState({ branch: "Banani" });
  return (
    <form className="w-full">
      {tab ? (
        <div className="w-full flex items-center justify-start">
          {branchs.map((branch: { id: number; text: string }) => {
            const { id, text } = branch;
            return (
              <div
                key={id}
                role="button"
                className={clsx(
                  "px-[24px] py-[16px] font-semibold transition ease-in-out duration-500",
                  {
                    "bg-white/50 text-white": formData.branch !== text,
                    "bg-white text-muted_gray": formData.branch === text,
                    "rounded-tl-[10px]": id === 1,
                  }
                )}
                onClick={() => {
                  setFormData({ ...formData, branch: text });
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      ) : null}
      <div
        className={clsx(
          "bg-white px-[24px] py-[32px] flex flex-col lg:flex-row items-center lg:items-end gap-[32px]",
          {
            "rounded-[10px] mt-[56px]": !tab,
            "rounded-b-[10px] rounded-r-[10px]": tab,
          }
        )}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <div className="grid grid-cols-1 gap-[16px]">
            <label className="text-muted_gray">Check In</label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-1 gap-[16px]">
            <label className="text-muted_gray">Check Out</label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-1 gap-[16px]">
            <label className="text-muted_gray">Person</label>
            <Selector />
          </div>
        </div>
        <Button className="min-w-[148px]">Search Now</Button>
      </div>
    </form>
  );
};

export default SearchBox;

const branchs = [
  {
    id: 1,
    text: "Banani",
  },
  {
    id: 2,
    text: "Baridhara",
  },
];
