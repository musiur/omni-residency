import Hotels from "../destination/_utils/hotels.section";
import OurServices from "../destination/_utils/our-services.section";
import HeroSection from "./_utils/hero.section";
import OtherServices from "../_utils/other-services.section";
import Testimonial from "../_utils/testimonial.section";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Hotels />
      <hr />
      <OurServices />
      <OtherServices />
      <Testimonial noOfReviews={3} />
    </div>
  );
};

export default Page;
