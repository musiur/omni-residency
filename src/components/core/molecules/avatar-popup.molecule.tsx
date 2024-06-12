"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Logout from "../atoms/logout.atom";

const AvatarPopup = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="bg-black/5 backdrop-blur-xl border-white/20"
      >
        <ul className="space-y-2">
          <Link href="/dashboard/overview">
            <li className="px-4 py-2 hover:bg-primary  text-white rounded-md">
              Overview
            </li>
          </Link>
          <Link href="/dashboard/settings">
            <li className="px-4 py-2 hover:bg-primary text-white rounded-md">
              settings
            </li>
          </Link>
          <li className="pt-2">
            <Logout />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarPopup;
