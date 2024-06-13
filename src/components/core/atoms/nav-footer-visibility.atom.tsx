"use client";

import { usePathname } from "next/navigation";
import { ReactElement } from "react";

const NavFooterVisibility = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();
  return pathname.includes("auth") || pathname.includes("dashboard")
    ? // pathname.includes("activate")
      null
    : children;
};

export default NavFooterVisibility;
