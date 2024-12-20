import HeroSection from "./_utils/hero.section";
import DealsOfTheDay from "@/app/_utils/deals-of-the-day.section";
import Facilities from "@/app/_utils/facilities.section";
import Testimonial from "@/app/_utils/testimonial.section";

const Page = async () => {
  return (
    <div>
      <HeroSection />
      <DealsOfTheDay />
      <Facilities />
      <Testimonial noOfReviews={3} />
    </div>
  );
};

export default Page;
