import { Button } from "@/components/ui/button";
import Image from "next/image";
import { A__GET__BranchList } from "@/app/branches/_utils/action";
import SearchBox from "@/components/core/molecules/searchbox.molecule";

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
    <div className="pt-[86px] min-[1120px]:pt-[127px] relative bg-black/60">
      <section className="flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
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
          <SearchBox tab={true} branches={branches} />
        </div>
      </section>
      <Image
        src="/images/home/branch-hero.jpg"
        alt="hero-background-image"
        fill
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "-1" }}
      />
    </div>
  );
};

export default HeroSection;
