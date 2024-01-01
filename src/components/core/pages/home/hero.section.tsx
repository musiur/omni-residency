import { Button } from "@/components/ui/button";
import SearchBox from "../../molecules/searchbox.molecule";
// import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-[170vh] md:min-h-[150vh] min-[1040px]:min-h-[100vh]">
      <video
        className="abosulute top-0 left-0 w-full min-h-[170vh] md:min-h-[150vh] min-[1040px]:min-h-[100vh]"
        autoPlay
        muted
        loop
        playsInline
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: "-1",
          backgroundClip: "content-box",
        }}
      >
        <source src="/videos/amari-dhaka.mp4" type="video/mp4" />
      </video>

      <section className="bg-black/60 flex flex-col items-center justify-center gap-[16px] absolute top-0 left-0 w-full h-full">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px] pt-[10vh]">
          <h1>Find Homestay that suits you and your family</h1>
          <p>
            Hotel are becoming increasingly popular and appealing to travellers
            who can&apos;t bear to be parted and the result new way to rent the
            right homestay for you
          </p>
          <div className="flex items-center justify-center gap-[16px] pt-[8px]">
            <Button variant="secondary">Explore Now</Button>
            <Button>View Offer</Button>
          </div>
        </div>
        <div className="container">
          <SearchBox tab={true} />
        </div>
      </section>
      {/* <Image
        src="/images/home/hero-background.png"
        alt="hero-background-image"
        fill
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
      /> */}

      {/* allowFullScreen */}
    </div>
  );
};

export default HeroSection;
