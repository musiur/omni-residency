import { Button } from "@/components/ui/button";
import SearchBox from "../../../components/core/molecules/searchbox.molecule";
import Image from "next/image";
import { A__GET__BranchList } from "@/app/branches/_utils/action";
import Link from "next/link";

const HeroSection = async () => {
  const result = await A__GET__BranchList();

  const branches: any[] =
    result?.data?.results?.map((item: any) => {
      return {
        id: item?.id,
        nick_name: item?.nick_name,
      };
    }) || [];
  return (
    <div className="bg-black/20 pt-[86px] min-[1120px]:pt-[127px] pb-[80px] relative">
      <section className="flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Discover Bangladesh with Hotel Omni Residency</h1>
          <div className="flex items-center justify-center gap-[16px] pt-[8px]">
            <Link href="/destination">
              <Button variant="secondary">Explore Now</Button>
            </Link>
            <Link href="/deals-&-offers">
              <Button>View Offer</Button>
            </Link>
          </div>
        </div>
        <div className="container">
          <SearchBox tab={true} branches={branches} />
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
