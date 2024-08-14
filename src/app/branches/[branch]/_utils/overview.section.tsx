import BookingDotComRating from "@/components/core/molecules/booking.com.molecule";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Overview = () => {
  return (
    <section className="container" id="overview">
      <div className="flex items-center gap-10">
        <BookingDotComRating rating={8.9} />
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-primary/80 group-hover:text-primary font-medium">
            View All Review
          </span>
          <ChevronRight className="w-4 h-4 stroke-primary/80 group-hover:stroke-primary translate-x-0 group-hover:translate-x-[10px] transition ease-in-out duration-500" />
        </Link>
      </div>
      <h2 className="pt-[16px]">Overview</h2>
      <p className="text-plain_gray py-[10px] text-[16px] md:text-[20px] leading-snug  md:leading-loose pb-[40px]">
        We are best hotel for homestay buat penginapan kamu bersama orang
        tercinta dan orang tersayang yang kamu sukai dan sayangi untuk selamanya
        di dunia ini
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[24px]">
        <div className="grid grid-cols-1 gap-[12px] md:gap-[24px] min-h-[80vh]">
          <div className="relative rounded-[10px] overflow-hidden">
            <Image
              src="/images/branches/hotel1.avif"
              alt="image-of-dhaka"
              fill
              quality={100}
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="z-[-1]"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px] md:gap-[24px]">
            <div className="relative rounded-[10px] overflow-hidden">
              <Image
                src="/images/branches/hotel2.avif"
                alt="image-of-dhaka"
                fill
                quality={100}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="z-[-1]"
              />
            </div>
            <div className="relative rounded-[10px] overflow-hidden">
              <Image
                src="/images/branches/hotel3.avif"
                alt="image-of-dhaka"
                fill
                quality={100}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="z-[-1]"
              />
            </div>
          </div>
        </div>
        <div className="relative rounded-[10px] overflow-hidden">
          <Image
            src="/images/branches/hotel4.avif"
            alt="image-of-dhaka"
            fill
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="z-[-1]"
          />
        </div>
      </div>
      <div className="flex justify-end pt-[32px]">
        <Button>See the full galary</Button>
      </div>
    </section>
  );
};

export default Overview;

const places = [
  {
    id: 1,
    image: "/images/destination/dhaka.avif",
    name: "Dhaka",
    link: "#",
  },
  {
    id: 2,
    image: "/images/destination/coxs-bazar.avif",
    name: "Cox's Bazar",
    link: "#",
  },
];
