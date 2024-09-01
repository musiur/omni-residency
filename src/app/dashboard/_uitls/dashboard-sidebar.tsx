"use client";

import clsx from "clsx";
import { BookCheckIcon, PieChartIcon, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between gap-10 flex-wrap shadow p-4 pt-24 lg:pt-40 bg-black/60 min-w-[280px] overflow-auto">
      <ul className="container flex items-center gap-4">
        {Menu__Data.map((item) => {
          const matched = pathname === item.link;
          return (
            <Link key={item.id} href={item.link}>
              <li
                className={clsx(
                  "px-4 py-2 transition ease-linear duration-150 [&>svg]:w-4 rounded-lg [&>svg]:h-4 flex items-center gap-2 border-b-4",
                  {
                    "border-white/80 text-white hover:border-white/40 bg-primary hover:bg-primary/80":
                      matched,
                    "border-none hover:border-gray-200 bg-white/10 text-white":
                      !matched,
                  }
                )}
              >
                {item.icon}
                {item.text}
              </li>
            </Link>
          );
        })}
        <li className="text-white/0">asdf</li>
      </ul>
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
