import Testimonial from "@/app/_utils/testimonial.section";
import HeroSection from "./_utils/hero.section";
import RoomCard from "@/app/search/_utils/room.card";
import { A__SearchRooms } from "./_utils/actions";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    branch: string;
    checkin: string;
    checkout: string;
    persons: string;
  };
}) => {
  const result = await A__SearchRooms({
    branch: searchParams?.branch,
    check_in: searchParams?.checkin,
    check_out: searchParams?.checkout,
    adults: searchParams?.persons,
  });
  const rooms: any[] = result?.data?.results || [];

  return (
    <div>
      <HeroSection defaultValues={{ ...searchParams }} />
      <section className="container grid grid-cols-1 gap-[64px]">
        {rooms?.length > 0 ? (
          rooms?.map((item: any, index: number) => {
            return <RoomCard key={item.id} index={index} details={item} />;
          })
        ) : (
          <p className="text-center animate-pulse">No Room Available!</p>
        )}
      </section>
      <Testimonial noOfReviews={3} />
    </div>
  );
};

export default Page;

