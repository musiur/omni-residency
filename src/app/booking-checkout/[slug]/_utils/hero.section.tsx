import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeroSection = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="bg-black/80 pt-[86px] min-[1120px]:pt-[127px] pb-[100px] relative">
      <section className="flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1 className="capitalize">
            {params.slug
              .replaceAll("%26", "&")
              .replaceAll("-", " ")
              .replace(/%20/g, " ")}
          </h1>
          {/* <h3 className="text-[20px] md:text-[24px] font-semibold">
            Checkout our everyday deals & offerings
          </h3> */}
          <p className="inline-flex flex-wrap items-center justify-center">
            Home&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Deals & Offers&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Room Details
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
