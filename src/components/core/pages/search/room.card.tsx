import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  AreaChart,
  Baby,
  Bath,
  BedDouble,
  CarFront,
  ImageIcon,
  Play,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RoomCard = ({
  details,
}: {
  details: {
    id: number;
    image: string;
    title: string;
    startFrom: number;
    viewLink: string;
    facilities: any;
    videoLink: string;
    photosLink: string;
    shortDescription: string;
  };
}) => {
  const {
    id,
    image,
    title,
    startFrom,
    viewLink,
    facilities,
    videoLink,
    photosLink,
    shortDescription,
  } = details;
  const even = id % 2 === 0;
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-[12px] py-0 md:py-[90px] overflow-hidden rounded-[10px] md:rounded-[40px]">
      <Image
        src={image}
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
          src={image}
          alt="hero-background-image"
          fill
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
          className="flex md:hidden"
        />
        <Link
          href={videoLink}
          className="flex items-center justify-center gap-[8px] px-[16px] py-[8px] backdrop-blur bg-white/80 rounded-[10px]"
        >
          <Play className="stroke-[1.3px] w-4 h-4" />
          Watch video
        </Link>
        <Link
          href={photosLink}
          className="flex items-center justify-center gap-[8px] px-[16px] py-[8px] backdrop-blur bg-white/80 rounded-[10px]"
        >
          <ImageIcon className="stroke-[1.3px] w-4 h-4" />
          Photos
        </Link>
      </div>
      <div
        className={clsx(
          "bg-white/90 backdrop-blur-2xl p-[16px] md:p-[40px] rounded-[10px] border flex flex-col gap-[20px]",
          { "order-2": !even, "order-1": even }
        )}
      >
        <div>
          <p>
            From&nbsp;
            <span className="text-primary font-semibold">${startFrom}</span>
            &nbsp;/night
          </p>
          <h3 className="text-[20px] md:text-[32px] font-semibold pt-[4px]">
            {title}
          </h3>
        </div>
        <p>{shortDescription}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[8px] max-w-[400px]">
          {facilities.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-[8px] [&>svg]:stroke-primary [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-[1.3px]"
              >
                {item.icon}
                <span className="capitalize">
                  {item.value}&nbsp;{item.key}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between gap-[10px] pt-[16px] border-t border-gray-300">
          <Link href={viewLink}>View details</Link>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
