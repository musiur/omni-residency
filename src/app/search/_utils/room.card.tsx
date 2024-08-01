import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ImageIcon, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ details, index }: { details: any, index:number  }) => {
  const {
    id,
    gallery_set,
    room_name,
    adults,
    children,
    regular_price,
    discounted_price,
    discount_in_percentage,
    featured_image,
    room_amenities_set,
    videoLink,
    photosLink,
    branch,
    shortDescription,
    overview,
    available_rooms_count,
  } = details;

  const even = index % 2 === 0;
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[12px] py-0 md:py-[90px] overflow-hidden rounded-[10px] md:rounded-[40px]">
      <Image
        src={featured_image}
        alt="hero-background-image"
        fill
        quality={100}
        style={{ objectFit: "cover", objectPosition: "left" }}
        className={clsx(
          "hidden md:flex max-w-[800px] min-h-[600px] z-[-1] rounded-[10px] md:rounded-[40px]",
          {
            "ml-0": !even,
            "ml-auto": even,
          }
        )}
      />
      <div
        className={clsx(
          "relative flex items-end gap-[10px] px-[20px] min-h-[300px] py-[24px]",
          { "justify-start order-1": !even, "justify-end md:order-2": even }
        )}
      >
        <Image
          src={gallery_set[0]?.image || ""}
          alt="hero-background-image"
          fill
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
          className="flex md:hidden"
        />
        <Link
          href={videoLink || ""}
          className="flex items-center justify-center gap-[8px] px-[16px] py-[8px] backdrop-blur bg-white/80 rounded-[10px]"
        >
          <Play className="stroke-[1.3px] w-4 h-4" />
          Watch video
        </Link>
        <Link
          href={photosLink || ""}
          className="flex items-center justify-center gap-[8px] px-[16px] py-[8px] backdrop-blur bg-white/80 rounded-[10px]"
        >
          <ImageIcon className="stroke-[1.3px] w-4 h-4" />
          Photos
        </Link>
      </div>
      <div
        className={clsx(
          "bg-white/90 backdrop-blur-2xl p-[16px] md:p-[40px] rounded-[10px] border flex flex-col gap-[20px] relative",
          { "order-2": !even, "order-1": even }
        )}
      >
        <div className="absolute top-0 left-0 rounded-br-xl rounded-tl-xl bg-primary text-white px-4 py-2">
          {available_rooms_count} rooms available
        </div>
        <div className="pt-8">
          <p>
            From&nbsp;
            <s className="text-gray-400 font-semibold">{regular_price} </s>
            <span className="text-primary font-semibold">
              {discounted_price} BDT
            </span>
            &nbsp;/night - {adults} adults & {children} children
          </p>
          <h3 className="text-[20px] md:text-[32px] font-semibold pt-[4px]">
            {room_name}
          </h3>
          <p className="text-gray-400">
            {branch?.name}, {branch?.address}
          </p>
        </div>
        <p>{overview}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[8px] max-w-[400px]">
          {room_amenities_set?.length
            ? room_amenities_set?.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex items-start gap-[8px] [&>svg]:stroke-primary [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-[1.3px]"
                >
                  {/* {item} */}
                  <span className="capitalize">{item?.amenity}</span>
                </div>
              );
            })
            : null}
        </div>
        <div className="flex items-center justify-end gap-10 pt-[16px] border-t border-gray-300">
          <Link href={`/booking-checkout/${room_name}?branch=${branch?.id}&id=${id}`}>
            View details
          </Link>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
