import Image from "next/image";
import { ChevronRight } from "lucide-react";

const GymRequestMembershipHeroSection = ({
  details,
}: {
  details: { branch: string; branchid: string; name: string; id: string };
}) => {
  const { branch, name } = details;
  return (
    <div className="bg-black/80 pt-[127px] relative pb-[100px]">
      <section className="flex flex-col items-center justify-center gap-[16px]">
        <div className="max-w-[649px] [&>*]:text-white [&>*]:text-center max-auto flex flex-col items-center justify-center gap-[24px] px-[10px]">
          <h1>Get your Membership</h1>
          <h3 className="text-[16px] md:text-[24px] font-semibold">
            At the{" "}
            <span className="text-[16px] md:text-[24px] font-semibold capitalize text-primary">
              {name?.toWellFormed()?.replace("-", " ")}
            </span>
            ,{" "}
            <span className="text-[16px] md:text-[24px] font-semibold capitalize">
              {branch?.toWellFormed()}
            </span>
          </h3>
          <p className="inline-flex flex-wrap items-center justify-center">
            Home&nbsp;
            <ChevronRight className="w-4 h-4" />
            &nbsp;Gyms
            <ChevronRight className="w-4 h-4" />
            &nbsp;Request Membership
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

export default GymRequestMembershipHeroSection;
