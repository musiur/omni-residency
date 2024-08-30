import SearchBox from "../../../components/core/molecules/searchbox.molecule";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { A__GET__BranchList } from "@/app/branches/_utils/action";

const HeroSection = async ({ defaultValues }: { defaultValues: any }) => {
  const result = await A__GET__BranchList();

  const branches: any[] =
    result?.data?.results?.map((item: any) => ({
      id: item?.id,
      nick_name: item?.nick_name,
    })) || [];

  const matchedBranchName: string =
    branches?.find((branch) => branch.id === +defaultValues?.branch)
      ?.nick_name || null;

  return (
    <div className="pt-[86px] min-[1120px]:pt-[127px] pb-[80px] relative bg-black/60">
      <section className=" flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Searched for Rooms</h1>
          <h2>Showing Results for</h2>
          <p className="inline-flex flex-wrap items-center justify-center">
            {matchedBranchName}&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Check in at {defaultValues?.checkin}&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Check out at {defaultValues?.checkout}&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;{defaultValues?.persons} Adults
          </p>
        </div>
        <div className="container">
          {branches ? (
            <SearchBox
              tab={true}
              branches={branches}
              defaultValues={defaultValues}
            />
          ) : null}
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
