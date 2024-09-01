import HeroSection from "./_utils/hero.section";
import NearbyPlaces from "./_utils/nearyby.section";
import Overview from "./_utils/overview.section";
import { RoomCarousel } from "./_utils/room-carousel.section";
import OurServices from "@/app/destination/_utils/our-services.section";
import Facilities from "@/app/_utils/facilities.section";
import { A__GET__BranchList, A__GET__FavouriteRooms, A__GET__NearbyTouristSpots } from "../_utils/action";

const Page = async ({ params }: {
  params: {
    branch: string,
  }
}) => {
  const result = await A__GET__BranchList();

  const branches: any[] =
    result?.data?.results?.map((item: any) => ({
      id: item?.id,
      nick_name: item?.nick_name,
    })) || [];

  const matchedBranch = branches.find(
    (branch) => branch.nick_name.toLowerCase() === params?.branch.toLowerCase()
  );
  const matchedBranchId: number | undefined = parseInt(matchedBranch?.id);

  const favouriteRooms = await A__GET__FavouriteRooms(matchedBranchId);

  const nearbyTouristSpots = await A__GET__NearbyTouristSpots(matchedBranchId);

  return (
    <div>
      <HeroSection />
      {/* <Tabbar /> */}
      <Overview />
      <RoomCarousel data={favouriteRooms?.data?.results} />
      <Facilities />
      <NearbyPlaces data = {nearbyTouristSpots?.data?.results} />
      <OurServices />
    </div>
  );
};

export default Page;
