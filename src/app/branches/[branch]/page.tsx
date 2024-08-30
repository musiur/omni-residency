import HeroSection from "./_utils/hero.section";
import NearbyPlaces from "./_utils/nearyby.section";
import Overview from "./_utils/overview.section";
import { RoomCarousel } from "./_utils/room-carousel.section";
import Tabbar from "./_utils/tabbar.section";
import OurServices from "@/app/destination/_utils/our-services.section";
import Facilities from "@/app/_utils/facilities.section";

const Page = ({params}:{params:{
  branch:string
}}) => {
  console.log(params?.branch)
  return (
    <div>
      <HeroSection />
      {/* <Tabbar /> */}
      <Overview />
      <RoomCarousel />
      <Facilities />
      <NearbyPlaces />
      <OurServices />
    </div>
  );
};

export default Page;
