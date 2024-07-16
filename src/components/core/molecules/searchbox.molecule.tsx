"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import DatePicker from "./datepicker.molecule";
import Selector from "./select.molecule";
import Link from "next/link";
import { A__GET__BranchList } from "@/app/branches/_utils/action";

interface FormData {
  branch: string | undefined;
  checkIn?: Date;
  checkOut?: Date;
  persons?: number;
}

const SearchBox = ({ tab }: { tab?: boolean }) => {
  const [branchList, setBranchList] = useState([]);
  const [formData, setFormData] = useState < FormData > ({
    branch: undefined,
    checkIn: undefined,
    checkOut: undefined,
    persons: undefined,
  });

  useEffect(() => {
    const fetchBranchList = async () => {
      const res = await A__GET__BranchList();
      const branches = res.success ? res?.data?.results : [];
      setBranchList(branches);
      // Set initial branch after fetching
      if (branches?.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          branch: branches[0]?.nick_name,
        }));
      }
    };
    fetchBranchList();
  }, []);

  // console.log({ branchList });
  return (
    <form className="w-full">
      {tab ? (
        <div className="w-full flex items-center justify-start">
          {branchList?.map(
            (branch: { id: number; nick_name: string }, index: number) => {
              const { id, nick_name } = branch;
              return (
                <div
                  key={id}
                  role="button"
                  className={clsx(
                    "px-[24px] py-[16px] font-semibold transition ease-in-out duration-500",
                    {
                      "bg-white/50 text-white": formData.branch !== nick_name,
                      "bg-white text-muted_gray": formData.branch === nick_name,
                      "rounded-tl-[10px]": index === 0,
                    }
                  )}
                  onClick={() => {
                    setFormData({ ...formData, branch: nick_name });
                  }}
                >
                  {nick_name}
                </div>
              );
            }
          )}
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
            <label className="text-muted_gray">Check Out </label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-1 gap-[16px]">
            <label className="text-muted_gray">Person </label>
            <Selector />
          </div>
        </div>
        <Link href="/search">
          <Button className="min-w-[148px]">Search Now</Button>
        </Link>
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
