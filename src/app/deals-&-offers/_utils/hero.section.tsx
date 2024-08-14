import SearchBox from "../../../components/core/molecules/searchbox.molecule";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { A__GET__BranchList } from "@/app/branches/_utils/action";

const HeroSection = async () => {
  const result = await A__GET__BranchList();

  const branches =
    result?.data?.results?.map((item: any) => {
      return {
        id: item?.id,
        nick_name: item?.nick_name,
      };
    }) || [];

  return (
    <div className="bg-black/20 pt-[86px] min-[1120px]:pt-[127px] pb-[100px] relative">
      <section className="flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Deals & Offers</h1>
          <h3 className="text-[20px] md:text-[24px] font-semibold">
            Checkout our everyday deals & offerings
          </h3>
          <p className="inline-flex flex-wrap items-center justify-center">
            Home&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Deals & Offers
          </p>
        </div>
        <div className="container">
          <SearchBox tab={true} branches={branches} />
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
