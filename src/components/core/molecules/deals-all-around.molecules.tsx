"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";


export const DealsAllAround = ({ offers }: { offers: any }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={18}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper items-stretch"
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1260: {
          slidesPerView: 4,
        },
      }}
    >
      {offers?.map((item: any) => {
        const { id, name, branch, featured_image, discount_in_percentage, regular_price, discounted_price, see_details } = item;
        return (
          <SwiperSlide
            key={id}
            className="pb-16 group z-0 relative"
          // max-w-[300px]
          >
            <div
              className={`relative overflow-hidden h-[240px] w-full rounded-t-[10px]`}
            >
              <Image
                // src={featured_image}
                src={`https://talhaanik56.pythonanywhere.com${featured_image}`}
                alt="slider-image"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <p className="absolute top-0 left-0 p-[10px] m-[5px] rounded-full flex flex-col items-center justify-center bg-primary text-white leading-[13px]">
                <span className="font-bold text-white">{parseInt(discount_in_percentage)}%</span>
                <span className="font-light">off</span>
              </p>
            </div>
            <div className="py-[16px] flex flex-col gap-[16px]">
              <h3 className="font-bold">{title}</h3>
              <p>{location}</p>
              <Link href={link}>
                <Button className="w-full bg-muted_gray group-hover:bg-primary">
                  {/* {btnText} */}
                  See Details
                </Button>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const images = [
  {
    id: 1,
    image: "/images/home/carousel/delux.jpg",
    title: "Delux",
    location: "Dhaka, Banani",
    link: "/booking-checkout/delux",
    offPercent: 20,
    btnText: "Show Room",
  },
  {
    id: 2,
    image: "/images/home/carousel/gym/gym.jpg",
    title: "10 Day Offered Gym Facilities",
    location: "Dhaka, Baridhara",
    link: "/booking-checkout/queen-delux",
    offPercent: 40,
    btnText: "Book Now",
  },
  {
    id: 3,
    image: "/images/home/carousel/restaurants/restaurants6.jpg",
    title: "Bouffe at High with Discount",
    location: "Cox's Bazar, Iconic",
    link: "/booking-checkout/double-&-single",
    offPercent: 30,
    btnText: "Book Now",
  },
  {
    id: 4,
    image: "/images/home/carousel/queen.jpg",
    title: "Honeymoon",
    location: "Dhaka, Banani",
    link: "/booking-checkout/honeymoon",
    offPercent: 10,
    btnText: "Show Properties",
  },
  {
    id: 5,
    image: "/images/home/carousel/restaurants/restaurants3.jpg",
    title: "Cover Best Foods in BD",
    location: "Dhaka, Banani",
    link: "/booking-checkout/honeymoon",
    offPercent: 10,
    btnText: "Show Properties",
  },
];
