import { Button } from "@/components/ui/button";
import SearchBox from "../../components/core/molecules/searchbox.molecule";
import { A__GET__BranchList } from "@/app/branches/_utils/action";
// import Image from "next/image";

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
    <div className="relative w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
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
        <source src="/videos/Omni-Residency.mp4" type="video/mp4" />
      </video>

      <section className="bg-black/60 flex flex-col items-center justify-center gap-[16px] w-full h-full relative z-10 pt-[120px] md:pt-[180px] pb-[120px]">
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
    </div>
  );
};

export default HeroSection;
