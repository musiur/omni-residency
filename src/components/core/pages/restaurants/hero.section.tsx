import SearchBox from "../../molecules/searchbox.molecule";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-[127px] relative">
      <section className="bg-black/60 flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Restaurants</h1>
          <h3 className="text-[16px] md:text-[24px] font-semibold">Checkout our world class cuisines</h3>
          <p className="inline-flex flex-wrap items-center justify-center">
            Banani&nbsp;
            <ChevronRight className="w-4 h-4"/>
            &nbsp;Restaurants
          </p>
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
