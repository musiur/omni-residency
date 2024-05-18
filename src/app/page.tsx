import DealsOfTheDay from "@/components/core/pages/home/deals-of-the-day.section";
import ExploreDestination from "@/components/core/pages/home/explore-destination.section";
import Facilities from "@/components/core/pages/home/facilities.section";
import HeroSection from "@/components/core/pages/home/hero.section";
import OtherServices from "@/components/core/pages/home/other-services.section";
import Testimonial from "@/components/core/pages/home/testimonial.section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreDestination />
      <DealsOfTheDay />
      <Facilities />
      <OtherServices />
      <Testimonial />
    </div>
  );
};

export default Home;
