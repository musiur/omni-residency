import DealsOfTheDay from "@/components/core/pages/home/deals-of-the-day.section";
import Testimonial from "@/components/core/pages/home/testimonial.section";
import HeroSection from "@/components/core/pages/restaurants/hero.section";
import RestaurantOverview from "@/components/core/pages/restaurants/restaurant.overview.section";
import { RestaurantsOverviewData } from "@/lib/data";



const Page = () => {
  return (
    <>
      <HeroSection />
      <DealsOfTheDay />
      {RestaurantsOverviewData.map((item) => {
        return <RestaurantOverview key={item.id} details={item} />;
      })}
      <Testimonial />
    </>
  );
};

export default Page;


