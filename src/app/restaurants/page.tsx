import Testimonial from "@/app/_utils/testimonial.section";
import HeroSection from "@/app/restaurants/_utils/hero.section";
import RestaurantOverview from "@/app/restaurants/_utils/restaurant.overview.section";
// import { RestaurantsOverviewData } from "@/lib/data";
import { A__GET__RestaurentList } from "./_utils/actions";

const Page = async () => {
  const response = await A__GET__RestaurentList();
  const RestaurantsOverviewData = response?.data?.results;
  return (
    <>
      <HeroSection />
      {RestaurantsOverviewData?.map((item: any, index: number) => {
        return (
          <RestaurantOverview key={item.id} details={item} index={index} />
        );
      })}
      <Testimonial noOfReviews={3} />
    </>
  );
};

export default Page;
