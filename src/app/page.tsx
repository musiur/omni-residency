import DealsOfTheDay from "@/app/_utils/deals-of-the-day.section";
import ExploreDestination from "@/app/_utils/explore-destination.section";
import Facilities from "@/app/_utils/facilities.section";
import HeroSection from "@/app/_utils/hero.section";
import OtherServices from "@/app/_utils/other-services.section";
import Testimonial from "@/app/_utils/testimonial.section";

const Home = async () => {
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
