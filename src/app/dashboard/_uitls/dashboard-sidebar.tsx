"use client";

import Logout from "@/components/core/atoms/logout.atom";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  BookCheckIcon,
  LogOutIcon,
  PieChartIcon,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 z-50 bg-white min-w-[1200px]:relative min-h-[100dvh] min-w-[240px] max-w-[280px] shadow-2xl p-4 grid grid-cols-1 gap-8">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Link href="/">
            <Image
              src="/brandlogo.png"
              alt=""
              width={500}
              height={200}
              className="max-h-[60px] w-auto mx-auto"
            />
          </Link>
          <ul className="pt-8 grid grid-cols-1 gap-2">
            {Menu__Data.map((item) => {
              const matched = pathname === item.link;
              return (
                <Link key={item.id} href={item.link}>
                  <li
                    className={clsx(
                      "px-4 py-2 transition ease-linear duration-150 rounded-lg [&>svg]:w-4 [&>svg]:h-4 flex items-center gap-2",
                      {
                        "bg-primary text-white hover:bg-primary/80": matched,
                        "bg-white hover:bg-gray-200": !matched,
                      }
                    )}
                  >
                    {item.icon}
                    {item.text}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default DashboardSidebar;

const Menu__Data = [
  {
    id: 1,
    text: "Overview",
    link: "/dashboard/overview",
    icon: <PieChartIcon />,
  },
  {
    id: 2,
    text: "Bookings",
    link: "/dashboard/bookings",
    icon: <BookCheckIcon />,
  },
  {
    id: 3,
    text: "Settings",
    link: "/dashboard/settings",
    icon: <Settings />,
  },
];
