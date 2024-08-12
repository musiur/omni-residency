import HeroSection from "./_utils/hero.section";
import DealsOfTheDay from "@/app/utils/deals-of-the-day.section";
import Facilities from "@/app/utils/facilities.section";
import Testimonial from "@/app/utils/testimonial.section";

const Page = async () => {
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
