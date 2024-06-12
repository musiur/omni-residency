"use client";

import { usePathname } from "next/navigation";
import { ReactElement } from "react";

const NavFooterVisibility = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();
  return pathname.includes("auth") ? null : children;
};

export default NavFooterVisibility;
