import { Button } from "@/components/ui/button";
import SearchBox from "../../molecules/searchbox.molecule";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pt-[86px] min-[1120px]:pt-[127px] relative">
      <section className="bg-black/20 flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Explore Destinations in the heart of Bangladesh</h1>
          <div className="flex items-center justify-center gap-[16px] pt-[8px]">
            <Button variant="secondary">Explore Now</Button>
            <Button>View Offer</Button>
          </div>
        </div>
        <div className="container">
          <SearchBox tab={true} />
        </div>
      </section>
      <Image
        src="/images/destination/hero-background.png"
        alt="hero-background-image"
        fill
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
      />
    </div>
  );
};

export default HeroSection;
