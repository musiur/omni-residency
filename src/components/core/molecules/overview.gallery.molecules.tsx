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

export const RestaurantOverviewGallery = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={18}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="mySwiper items-stretch rounded-[10px] overflow-hidden"
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
    >
      {images.map((item) => {
        const { id, image } = item;
        return (
          <SwiperSlide key={id} className="pb-16 group z-0 relative w-full min-h-[350px] md:min-h-[500px]">
            <Image
              src={image}
              alt="slide-image"
              fill
            //   className="bg-cover bg-center"
            style={{objectFit: "cover", objectPosition: "center"}}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const images = [
  {
    id: 1,
    image: "/images/home/carousel/double-delux.png",
  },
  {
    id: 2,
    image: "/images/home/carousel/queen-delux.png",
  },
  {
    id: 3,
    image: "/images/home/carousel/single-double.png",
  },
  {
    id: 4,
    image: "/images/home/carousel/honeymoon.png",
  },
  {
    id: 5,
    image: "/images/home/carousel/honeymoon.png",
  },
  {
    id: 6,
    image: "/images/home/carousel/honeymoon.png",
  },
];
