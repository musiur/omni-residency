"use client";

import clsx from "clsx";
import Link from "next/link";

const Tabbar = () => {
  return (
    <section className="container sticky top-0 z-10 overflow-auto">
      <ul className="flex items-center px-10 py-4 rounded-[10px] border backdrop-blur bg-white/80 min-w-[900px]">
        {tabs.map((tab) => {
          const { id, link, text } = tab;
          return (
            <li key={id}>
              <Link
                href={link}
                className={clsx(
                  "border-b-[3px] pb-[16px] font-semibold px-[16px]",
                  {
                    "border-primary": id === 1,
                    "border-white/0": id !== 1,
                  }
                )}
                style={{ fontFamily: "Raleway" }}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tabbar;

const tabs = [
  {
    id: 1,
    text: "Overview",
    link: "#overview",
  },
  {
    id: 2,
    text: "Rooms",
    link: "#rooms",
  },
  {
    id: 3,
    text: "Restaurant",
    link: "#restaurant",
  },
  {
    id: 4,
    text: "GYM",
    link: "#gym",
  },
  {
    id: 5,
    text: "Nearby Attractions",
    link: "#nearby-attractions",
  },
  {
    id: 6,
    text: "Services",
    link: "#services",
  },
  {
    id: 7,
    text: "Contact",
    link: "#footer",
  },
];
