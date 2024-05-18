
import SearchBox from "../../molecules/searchbox.molecule";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-[86px] min-[1120px]:pt-[127px] relative">
      <section className="bg-black/60 flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Searched for Rooms</h1>
          <h2>Showing Results for</h2>
          <p className="inline-flex flex-wrap items-center justify-center">
            Banani&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Check in at 9th Jan, 2023&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Check out at 11th Jan&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;2 Adults & 1 Children
          </p>
        </div>
        <div className="container">
          <SearchBox tab={true} />
        </div>
      </section>
      <Image
        src="/images/home/hero-background.png"
        alt="hero-background-image"
        fill
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
      />
    </div>
  );
};

export default HeroSection;
