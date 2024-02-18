"use client";

import TikTok from "@/components/assets/tiktok.icon";
import { Instagram, PhoneCall, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Textcon from "../atoms/texcon.atom";
import { Button } from "@/components/ui/button";
import Envelope from "@/components/assets/envelope.icon";
import NavAnim from "@/components/anim/nav.anim";
import SideNav from "./sidenav.molecule";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return !pathname.includes("auth") ? (
    <NavAnim>
      <nav>
        <div className="w-full py-[7px]">
          <div className="container flex items-center justify-between gap-10">
            <ul className="hidden min-[880px]:flex items-center gap-[48px]">
              {uplinks.map((item) => {
                const { id, text, link } = item;
                return (
                  <li key={id}>
                    <Link href={link} className="hover:text-primary">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/">
              <Image
                src="/brandlogo.png"
                alt="brandlogo-of-omni-residency"
                width={1000}
                height={1000}
                className="w-auto max-h-[72px]"
              />
            </Link>
            <div className="flex items-center gap-[24px] min-[880px]:gap-[48px]">
              <Link
                href="tel:+88 01844611001"
                className="hidden min-[880px]:block hover:text-primary [&>svg]:hover:stroke-white"
              >
                <Textcon
                  icon={<PhoneCall className="w-[16px] h-[16px]" />}
                  text="+88 01844611001"
                />
              </Link>

              <Button className="rounded-full px-[16px] py-[12px] gap-[8px]">
                <User className="stroke-white w-[16px] h-[16px]" />
                Login
              </Button>

              <div className="block min-[1120px]:hidden">
                <SideNav />
              </div>
            </div>
          </div>
          <div className="container hidden min-[1120px]:flex items-center justify-between gap-10 pb-[12px] pt-[5px]">
            <ul className="flex items-center gap-[48px]">
              {downlinks.map((item) => {
                const { id, text, link } = item;
                return (
                  <li key={id}>
                    <Link
                      href={link}
                      className="flex items-center justify-center gap-[8px] hover:text-primary [&>svg]:hover:stroke-primary"
                    >
                      {item.icon ? item.icon : null}
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="flex items-center justify-end gap-[28px]">
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
      </nav>
    </NavAnim>
  ) : null;
};

export default Navbar;

export const uplinks = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Our Story",
    link: "/our-story",
  },
  {
    id: 3,
    text: "Latest News",
    link: "/latest-news",
  },
];

export const downlinks = [
  {
    id: 1,
    text: "Hotel",
    link: "/",
  },
  {
    id: 2,
    text: "Branches",
    link: "/branches/ctg",
  },
  {
    id: 3,
    text: "Destination",
    link: "/destination",
  },
  {
    id: 4,
    text: "Reviews",
    link: "/reviews",
  },
  {
    id: 5,
    text: "Restaurants",
    link: "/restaurants",
  },
  {
    id: 6,
    text: "Deals & Offers",
    link: "/deals-&-offers",
  },
  {
    id: 7,
    text: "info@hotelomniresidency.com",
    link: "mailto:info@hotelomniresidency.com",
    icon: <Envelope className="h-[16px] w-auto stroke-white" />,
  },
];

export const sociallinks = [
  {
    id: 2,
    icon: <Instagram className="w-[16px] h-[16px]" />,
    link: "https://instagram.com",
  },
  {
    id: 3,
    icon: <TikTok className="w-[16px] h-[16px] stroke-black" />,
    link: "/latest-news",
  },
];
