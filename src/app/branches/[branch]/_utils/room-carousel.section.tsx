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

export const RoomCarousel = ({ data }: { data: any }) => {
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
        {data?.map((item: any) => {
          const { id, room_category, name } = item;
          const mastered_service_name = room_category?.room_name
            ?.replaceAll(" ", "-")
            ?.toLowerCase();

          let mastered_redirect_link = `/booking-checkout/${mastered_service_name}?branch=${room_category?.branch?.id}&id=${room_category?.branch?.id}`;
          return (
            <SwiperSlide key={id} className="pb-16 group z-0 relative">
              <div
                className={`relative overflow-hidden h-[260px] w-full rounded-t-[10px]`}
              >
                <Image
                  src={room_category?.featured_image}
                  alt="slide-image"
                  fill
                  className="bg-cover bg-center"
                />
                <p className="absolute top-0 left-0 p-[10px] m-[5px] rounded-full flex flex-col items-center justify-center bg-primary text-white leading-[13px]">
                  <span className="font-bold text-white">
                    {parseInt(room_category?.discount_in_percentage)}%
                  </span>
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
              <div className="py-[16px] flex flex-col gap-[16px]">
                <h3 className="font-bold">
                  {room_category?.room_name}&nbsp;
                  <span className="font-light">
                    {room_category?.branch?.address}
                  </span>
                </h3>
                <p></p>
                <Link href={mastered_redirect_link}>
                  <Button className="w-full bg-muted_gray group-hover:bg-primary">
                    See Details
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
