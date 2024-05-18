import HeroSection from "@/components/core/pages/destination/hero.section";
import Hotels from "@/components/core/pages/destination/hotels.section";
import OtherServices from "@/components/core/pages/home/other-services.section";
import OurServices from "@/components/core/pages/destination/our-services.section";
import Overview from "@/components/core/pages/destination/overview.section";
import Testimonial from "@/components/core/pages/home/testimonial.section";

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
