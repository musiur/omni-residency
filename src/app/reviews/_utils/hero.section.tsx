import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-[86px] min-[1120px]:pt-[127px] pb-[100px] bg-black/80 relative">
      <section className="flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Reviews</h1>
          <h3 className="text-[16px] md:text-[24px] font-semibold">
            See what our clients say
          </h3>
          <p className="inline-flex flex-wrap items-center justify-center">
            Home&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;reviews
          </p>
        </div>
      </section>
      <Image
        src="/close.jpg"
        alt="hero-background-image"
        fill
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
      />
    </div>
  );
};

export default HeroSection;
