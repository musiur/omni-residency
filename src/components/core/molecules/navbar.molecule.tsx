import TikTok from "@/components/assets/tiktok.icon";
import { Instagram, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Textcon from "../atoms/texcon.atom";
import Envelope from "@/components/assets/envelope.icon";
import NavAnim from "@/components/anim/nav.anim";
import SideNav from "./sidenav.molecule";
import LoginAvatar from "./login-avatar.molecule";
import NavFooterVisibility from "../atoms/nav-footer-visibility.atom";
import { A__GET__BranchList } from "@/app/branches/_utils/action";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

let branches: any[] = [];

const fetchBranches = async () => {
  const result = await A__GET__BranchList();
  branches =
    result?.data?.results?.map((item: any) => ({
      id: item?.id,
      nick_name: item?.nick_name,
    })) || [];
};

export const getDownlinks = () => {
  const branchLink = branches[0]?.nick_name
    ? `/branches/${branches[0].nick_name}`
    : "";
  return [
    // {
    //   id: 1,
    //   text: "Hotel",
    //   link: "/",
    // },
    {
      id: 2,
      text: "Branches",
      link: "/branches",
      children: [
        {
          id: 1,
          text: "Banani",
          link: "/branches/banani",
        },
        {
          id: 2,
          text: "Baridhara",
          link: "/branches/baridhara",
        },
        {
          id: 3,
          text: "All Branches",
          link: "/branches",
        },
      ],
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
};

const Navbar = async () => {
  await fetchBranches();
  const downlinks = getDownlinks();

  return (
    <NavFooterVisibility>
      <NavAnim>
        <nav>
          <div className="w-full py-[7px]">
            <div className="container flex items-center justify-between gap-10">
              <ul className="hidden min-[880px]:flex items-center gap-[48px]">
                {uplinks?.map((item) => {
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

                <LoginAvatar />

                <div className="block min-[1120px]:hidden">
                  <SideNav uplinks={uplinks} downlinks={downlinks} />
                </div>
              </div>
            </div>
            <div className="container hidden min-[1120px]:flex items-center justify-between gap-10 pb-[12px] pt-[5px]">
              <ul className="flex items-center gap-[48px]">
                {downlinks?.map((item: any) => {
                  const { id, text, link } = item;
                  return (
                    <li key={id}>
                      {item?.children ? (
                        <>
                          <div className="relative group">
                            <div className="flex items-center justify-center gap-[8px] hover:text-primary [&>svg]:hover:stroke-primary">
                              {item?.icon ? item?.icon : null}
                              {text}
                            </div>
                            <div className="absolute top-0 left-0 z-[-1] group-hover:z-50 h-[1px] min-w-[140px] overflow-hidden group-hover:h-auto">
                              <div className="w-full h-[30px] bg-none"></div>
                              <div className="bg-white p-1 rounded-md">
                                {item?.children?.map((child: any) => {
                                  return (
                                    <Link
                                      key={child.id}
                                      href={child.link}
                                      className="w-full flex items-start justify-start gap-[8px] text-black hover:text-primary [&>svg]:hover:stroke-primary p-2 rounded-md hover:bg-gray-100"
                                    >
                                      {child?.icon ? child?.icon : null}
                                      {child.text}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={link}
                          className="flex items-center justify-center gap-[8px] hover:text-primary [&>svg]:hover:stroke-primary"
                        >
                          {item?.icon ? item?.icon : null}
                          {text}
                        </Link>
                      )}
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
    </NavFooterVisibility>
  );
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
