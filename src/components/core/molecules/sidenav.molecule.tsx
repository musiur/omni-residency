"use client";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { sociallinks } from "./navbar.molecule";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SideNav = ({
  uplinks,
  downlinks,
}: {
  uplinks: any[];
  downlinks: any[];
}) => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div
        className="min-h-[24px] min-w-[24px]"
        role="button"
        onClick={() => setOpenNav(true)}
      >
        <Menu className="stroke-white w-8 h-8" />
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-[100vh] bg-secondary z-50 transition ease-in-out duration-300",
          { "translate-x-0": openNav, "translate-x-[10000px]": !openNav }
        )}
        onClick={() => setOpenNav(false)}
      >
        <div className="container py-8 flex justify-between items-center gap-[48px]">
          <Image
            src="/brandlogo.png"
            alt="brandlogo"
            width={1000}
            height={1000}
            className="w-auto h-[40px]"
          />
          <div role="button" className="flex justify-end">
            <X className="stroke-white" onClick={() => setOpenNav(false)} />
          </div>
        </div>
        <div className="container section grid grd-cols-1 gap-[40px]">
          <ul className="min-[880px]:hidden grid grid-cols-1 gap-[12px]">
            {uplinks?.map((item) => {
              const { id, text, link } = item;
              return (
                <li
                  key={id}
                  role="button"
                  className="hover:text-primary"
                  onClick={() => {
                    // setOpenNav(false);
                    router.push(link);
                  }}
                >
                  {text}
                </li>
              );
            })}
          </ul>
          <ul className="grid grid-cols-1 gap-[12px]">
            {downlinks?.map((item) => {
              const { id, text, link } = item;
              return (
                <li key={id}>
                  <Link
                    href={link}
                    className="w-full flex gap-[8px] hover:text-primary [&>svg]:hover:stroke-primary"
                  >
                    {item.icon ? item.icon : null}
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-[28px]">
            {sociallinks.map((item) => {
              const { id, icon, link } = item;
              return (
                <li key={id}>
                  <Link
                    href={link}
                    className="w-[24px] h-[24px] flex items-center justify-center bg-white rounded-full hover:bg-primary [&>svg]:stroke-black hover:text-primary [&>svg]:hover:stroke-white"
                  >
                    {icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
