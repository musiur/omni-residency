"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Textcon from "../atoms/texcon.atom";
import { Mail, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";
import NavFooterVisibility from "../atoms/nav-footer-visibility.atom";

const Footer = () => {
  const pathname = usePathname();
  return (
    <NavFooterVisibility>
      <footer id="footer">
        <div className="container flex flex-wrap items-center justify-center sm:justify-between gap-[24px] md:gap-[48px] pt-[48px]">
          {Brands.map((brand) => {
            const { id, image, link } = brand;
            return (
              <Link
                key={id}
                href={link}
                className={clsx({
                  "w-full sm:max-w-[233px] border-r-0 sm:border-r-2 border-gray-500 pr-0 sm:pr-16":
                    id === 1,
                  "max-w-[100px] sm:max-w-[233px] border-r-0": id !== 1,
                })}
              >
                <Image
                  src={image}
                  alt={image}
                  width={1000}
                  height={1000}
                  quality={100}
                  className={clsx("w-full h-full mx-auto", {
                    "max-h-[150px] max-w-[150px]": id === 1,
                    "max-h-[100px] max-w-[100px] sm:max-w-[233px]": id !== 1,
                  })}
                />
              </Link>
            );
          })}
        </div>
        <section className="container flex flex-wrap justify-between gap-[48px] pt-[90px]">
          <div className="flex flex-col gap-[20px] max-w-[300px]">
            {/* <h6 className="text-[16px] lg:text-[20px] text-secondary font-semibold">
              <span className="text-[16px] lg:text-[20px] text-primary font-semibold">
                Omni
              </span>
              &nbsp;Residency
            </h6> */}
            <div className="[&>*]:text-plain_gray flex flex-col gap-[16px]">
              <p>Hotel are becoming increasingly popular and appealing</p>
              <Textcon
                icon={<Mail className="w-4 h-4" />}
                text="Hello@hotelomniresidency.com"
              />
              <Textcon
                icon={<PhoneCall className="w-4 h-4" />}
                text="022-560-342-972"
              />
            </div>
          </div>
          {Links.map((item) => {
            const { id, title, links } = item;
            return (
              <div key={id} className="flex flex-col gap-[32px] min-w-[150px]">
                <h6 className="font-semibold">{title}</h6>
                <ul className="flex flex-col gap-[12px]">
                  {links.map((li) => {
                    const { id, text, link } = li;
                    return (
                      <li key={id}>
                        <Link
                          href={link}
                          className="text-plain_gray hover:text-primary"
                        >
                          {text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
        <div className="px-10 pb-10 text-center text-plain_gray">
          Copyright @ {new Date().getFullYear()} All Right Reserved & Developed
          by
          <Link
            href="https://rubytech.xyz"
            target="_blank"
            passHref={true}
            className="underline hover:text-blue-500"
          >
            Rubytech
          </Link>
        </div>
      </footer>
    </NavFooterVisibility>
  );
};

export default Footer;

const Brands = [
  {
    id: 4,
    image: "/images/footer/omni-residency.png",
    link: "/",
  },
  {
    id: 2,
    image: "/images/footer/omni-iconic.png",
    link: "/",
  },
  // {
  //   id: 3,
  //   image: "/images/footer/omni-trading.png",
  //   link: "/",
  // },

  {
    id: 5,
    image: "/images/footer/gmt-trading.png",
    link: "/",
  },
  {
    id: 6,
    image: "/images/footer/omni-lights.png",
    link: "/",
  },
];

const Links = [
  {
    id: 1,
    title: "Our Services",
    links: [
      {
        id: 1,
        text: "Car Rental",
        link: "/car-rental",
      },
      {
        id: 2,
        text: "Homestay",
        link: "/homestay",
      },
      {
        id: 3,
        text: "Buy Home",
        link: "/buy-home",
      },
    ],
  },
  {
    id: 2,
    title: "Branches",
    links: [
      {
        id: 1,
        text: "Baridhara",
        link: "/branches/baridhara",
      },
      {
        id: 2,
        text: "Banani",
        link: "/branches/banani",
      },
      {
        id: 3,
        text: "Iconic: Coming soon.",
        link: "",
      },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      {
        id: 1,
        text: "FAQ",
        link: "",
      },
      {
        id: 2,
        text: "How it works",
        link: "",
      },
      {
        id: 3,
        text: "Privacy",
        link: "",
      },
    ],
  },
];
