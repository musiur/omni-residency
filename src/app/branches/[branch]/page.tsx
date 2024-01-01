import HeroSection from "@/components/core/pages/branches/hero.section";
import NearbyPlaces from "@/components/core/pages/branches/nearyby.section";
import Overview from "@/components/core/pages/branches/overview.section";
import { RoomCarousel } from "@/components/core/pages/branches/room-carousel.section";
import Tabbar from "@/components/core/pages/branches/tabbar.section";
import OurServices from "@/components/core/pages/destination/our-services.section";
import Facilities from "@/components/core/pages/home/facilities.section";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Tabbar />
      <Overview />
      <RoomCarousel />
      <Facilities />
      <NearbyPlaces />
      <OurServices />
    </div>
  );
};

export default Page;
