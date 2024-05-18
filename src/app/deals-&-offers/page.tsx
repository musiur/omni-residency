import HeroSection from "@/components/core/pages/deals-and-offers/hero.section";
import DealsOfTheDay from "@/components/core/pages/home/deals-of-the-day.section";
import Facilities from "@/components/core/pages/home/facilities.section";
import Testimonial from "@/components/core/pages/home/testimonial.section";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <DealsOfTheDay />
      <Facilities />
      <Testimonial />
    </div>
  );
};

export default Page;
