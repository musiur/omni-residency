import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pt-[86px] min-[1120px]:pt-[127px] pb-[40px] bg-black/60 relative">
      <section className="flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Checkout your booking</h1>
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
