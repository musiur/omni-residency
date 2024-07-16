"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

// Define types
type ImageItem = {
  id: number;
  image: string;
};

type GalleryProps = {
  images: ImageItem[];
};

export const RestaurantOverviewGallery: React.FC<GalleryProps> = ({
  images,
}) => {
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
      {images.map((item: ImageItem) => {
        const { id, image } = item;
        return (
          <SwiperSlide
            key={id}
            className="pb-16 group z-0 relative w-full min-h-[350px] md:min-h-[500px]"
          >
            <Image
              src={image}
              alt="slide-image"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
