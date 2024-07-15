import DealsOfTheDay from "@/components/core/pages/home/deals-of-the-day.section";
import Testimonial from "@/components/core/pages/home/testimonial.section";
import HeroSection from "@/components/core/pages/restaurants/hero.section";
import RestaurantOverview from "@/components/core/pages/restaurants/restaurant.overview.section";
// import { RestaurantsOverviewData } from "@/lib/data";
import { A__GET__RestaurentList } from "./_utils/actions";



const Page = async () => {
  const response = await A__GET__RestaurentList();
  const RestaurantsOverviewData = response?.data.results
  return (
    <>
      <HeroSection />
      {RestaurantsOverviewData?.map((item:any) => {
        return <RestaurantOverview key={item.id} details={item} />;
      })}
      <Testimonial />
    </>
  );
};

export default Page;


