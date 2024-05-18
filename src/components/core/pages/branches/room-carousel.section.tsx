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
import { BedDouble } from "lucide-react";

export const RoomCarousel = () => {
  return (
    <section className="container" id="rooms">
      <div className="pb-[32px]">
        <h2>Our Favourite Rooms</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={18}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
        {images.map((item) => {
          const { id, image, link, title, location, offPercent, btnText } =
            item;
          return (
            <SwiperSlide
              key={id}
              className="pb-16 group z-0 relative max-w-[300px]"
            >
              <div
                className={`relative overflow-hidden h-[245px] w-full rounded-t-[10px]`}
              >
                <Image
                  src={image}
                  alt="slide-image"
                  fill
                  className="bg-cover bg-center"
                />
                <p className="absolute top-0 left-0 p-[10px] m-[5px] rounded-full flex flex-col items-center justify-center bg-primary text-white leading-[13px]">
                  <span className="font-bold text-white">{offPercent}%</span>
                  <span className="font-light">off</span>
                </p>
                <div className="absolute bottom-0 left-0 w-full backdrop-blur bg-white/80 p-[16px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                      <BedDouble className="w-4 h-4" />
                      <span>2 Beds</span>
                    </div>
                    <div className="font-medium text-primary">From $899</div>
                  </div>
                </div>
              </div>
              <div className="p-[16px] flex flex-col gap-[16px]">
                <h3 className="font-bold">
                  {title}&nbsp;<span className="font-light">{location}</span>
                </h3>
                <p></p>
                <Link href={link}>
                  <Button className="w-full bg-muted_gray group-hover:bg-primary">
                    {btnText}
                  </Button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

const images = [
  {
    id: 1,
    image: "/images/home/carousel/double-delux.png",
    title: "Delux Double",
    location: "Dhaka, Banani",
    link: "/booking-checkout/delux-double",
    offPercent: 20,
    btnText: "Show Room",
  },
  {
    id: 2,
    image: "/images/home/carousel/queen-delux.png",
    title: "Queen Delux",
    location: "Dhaka, Baridhara",
    link: "/booking-checkout/queen-delux",
    offPercent: 40,
    btnText: "Book Now",
  },
  {
    id: 3,
    image: "/images/home/carousel/single-double.png",
    title: "Double & Single",
    location: "Cox's Bazar, Iconic",
    link: "/booking-checkout/double-&-single",
    offPercent: 30,
    btnText: "Book Now",
  },
  {
    id: 4,
    image: "/images/home/carousel/honeymoon.png",
    title: "Honeymoon",
    location: "Dhaka, Banani",
    link: "/booking-checkout/honeymoon",
    offPercent: 10,
    btnText: "Show Properties",
  },
  {
    id: 5,
    image: "/images/home/carousel/honeymoon.png",
    title: "Honeymoon",
    link: "/booking-checkout/honeymoon",
    offPercent: 10,
    btnText: "Show Properties",
  },
  {
    id: 6,
    image: "/images/home/carousel/honeymoon.png",
    title: "Honeymoon",
    location: "Dhaka, Banani",
    link: "/booking-checkout/honeymoon",
    offPercent: 10,
    btnText: "Show Properties",
  },
];
