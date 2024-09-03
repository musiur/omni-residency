"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useState } from "react";
import Image from "next/image";

export const RoomGalleryCarousel = ({ images }: { images: any[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="rounded-[10px] overflow-hidden">
      <Swiper
        loop={true}
        spaceBetween={18}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((item, index: number) => {
          return (
            <SwiperSlide
              key={index}
              className="pb-16 group z-0 relative min-w-[300px]"
            >
              <div
                className={`relative overflow-hidden min-h-[360px] w-full rounded-[10px]`}
              >
                <Image
                  src={item?.image || ""}
                  alt="slide-image"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        // breakpoints={{
        //   0: {
        //     slidesPerView: 2,
        //   },
        //   1260: {
        //     slidesPerView: 4,
        //   },
        // }}
      >
        {images?.map((item) => {
          const { id, image } = item;
          return (
            <SwiperSlide
              key={id}
              className="pb-16 group z-0 relative max-w-[300px] cursor-pointer"
            >
              <div
                className={`relative overflow-hidden h-[80px] w-full rounded-[10px]`}
              >
                <Image
                  src={image}
                  alt="slide-image"
                  fill
                  style={{ objectPosition: "center", objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
