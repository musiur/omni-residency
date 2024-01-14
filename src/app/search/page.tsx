import HeroSection from "@/components/core/pages/search/hero.section";
import RoomCard from "@/components/core/pages/search/room.card";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <section className="container grid grid-cols-1 gap-[40px]">
        {[1, 2, 3, 4, 5].map((item) => {
          return <RoomCard key={item} />;
        })}
      </section>
    </div>
  );
};

export default Page;
