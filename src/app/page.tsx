import DealsOfTheDay from "@/app/utils/deals-of-the-day.section";
import ExploreDestination from "@/app/utils/explore-destination.section";
import Facilities from "@/app/utils/facilities.section";
import HeroSection from "@/app/utils/hero.section";
import OtherServices from "@/app/utils/other-services.section";
import Testimonial from "@/app/utils/testimonial.section";

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
