import HeroSection from "@/app/destination/_utils/hero.section";
import Hotels from "@/app/destination/_utils/hotels.section";
import OtherServices from "@/app/utils/other-services.section";
import OurServices from "@/app/destination/_utils/our-services.section";
import Overview from "@/app/destination/_utils/overview.section";
import Testimonial from "@/app/utils/testimonial.section";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Overview />
      <hr />
      <Hotels />
      <hr />
      <OurServices />
      <OtherServices />
      <Testimonial />
    </div>
  );
};

export default Page;
