"use client";

import Logout from "@/components/core/atoms/logout.atom";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  BookCheckIcon,
  LogOutIcon,
  Menu,
  PieChartIcon,
  Settings,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={clsx(
          "fixed z-50 top-0 left-0 bg-white min-[1200px]:relative min-h-[100vh] min-w-[240px] max-w-[280px] shadow-2xl p-4 grid grid-cols-1 gap-8",
          {
            "hidden min-[1200px]:block opacity-0 min-[1200px]:opacity-100":
              !show,
            "fixed min-[1200px]:relative": show,
          }
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="mb-10">
            <div
              className={clsx(
                "h-8 w-8 flex items-center justify-center rounded-md border",
                {
                  hidden: !show,
                  "block min-[1200px]:hidden": show,
                }
              )}
              role="button"
              onClick={() => setShow(false)}
            >
              <X />
            </div>
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
      <div
        className={clsx(
          "top-0 left-0 border p-2 rounded-md ml-2 mt-2 bg-white",
          {
            block: show,
            "fixed min-[1200px]:relative block min-[1200px]:hidden": !show,
          }
        )}
        role="button"
        onClick={() => setShow(true)}
      >
        <Menu />
      </div>
    </>
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
