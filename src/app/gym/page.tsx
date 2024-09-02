import Testimonial from "@/app/_utils/testimonial.section";
import HeroSection from "@/app/restaurants/_utils/hero.section";
import { A__GET__GymList } from "./_utils/actions";
import GymOverview from "./_utils/gym.overview.section";

const Page = async () => {
  const response = await A__GET__GymList();
  const GymOverviewData = response?.data?.results;
  return (
    <>
      <HeroSection />
      {GymOverviewData?.map((item: any, index: number) => {
        return <GymOverview key={item.id} details={item} index={index} />;
      })}
      <Testimonial noOfReviews={3} />
    </>
  );
};

export default Page;
