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
          slidesPerView: 3,
        },
      }}
    >
      {offers?.map((item: any) => {
        const { id, name, branch, featured_image, discount_in_percentage, regular_price, discounted_price } = item;
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
                src={featured_image}
                alt="slider-image"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <p className="absolute top-0 left-0 p-[10px] m-[5px] rounded-full flex flex-col items-center justify-center bg-primary text-white leading-[13px]">
                <span className="font-bold text-white">{parseInt(discount_in_percentage)}%</span>
                <span className="font-light">off</span>
              </p>
            </div>
            <div className="py-[16px] flex flex-col gap-[10px]">
              <h3 className="font-bold">{name}</h3>
              <p>{branch?.address}</p>

              <p>
                <s className="text-gray-400 font-semibold">{parseInt(regular_price) || "00"} </s>
                <span className="text-primary font-semibold">
                  {parseInt(discounted_price) || "N/A"} BDT
                </span>
                /night
              </p>
              <Link
                href={`/booking-checkout/${name}?branch=${branch?.id}&id=${id}`}
              >
                <Button className="w-full bg-muted_gray group-hover:bg-primary">
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

