import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Overview = () => {
  return (
    <section className="container" id="overview">
      <div className="flex items-center gap-10">
        <p className="px-[16px] py-[12px] rounded-full bg-muted_orange text-primary font-medium inline-flex text-center">
          DESTINATIONS
        </p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[40px]">
        {places.map((place) => {
          const { id, image, name, link } = place;
          return (
            <div
              className="relative p-4 md:p-8 min-h-[323px] flex items-end justify-end rounded-[10px] overflow-hidden"
              key={id}
            >
              <Image
                src={image}
                alt="image-of-dhaka"
                fill
                quality={100}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="z-[-1]"
              />
              <div className="w-full flex items-center justify-between gap-10">
                <p className="text-white font-semibold text-[16px] md:text-[20px]">
                  {name}
                </p>
                <Link href={link}>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white backdrop-blur text-white font-medium"
                  >
                    See Hotel(s)
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
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
