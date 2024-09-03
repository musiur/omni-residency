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

  const overviewData = branchesData.find((branch)=>branch.branch_name===params?.branch.toLowerCase())

  return (
    <div>
      <HeroSection />
      {/* <Tabbar /> */}
      <Overview data={overviewData} />
      <RoomCarousel data={favouriteRooms?.data?.results} />
      <Facilities />
      <NearbyPlaces data={nearbyTouristSpots?.data?.results} />
      <OurServices />
    </div>
  );
};

export default Page;


const branchesData = [
  {
    id: 1,
    branch_name: "banani",
    overview: <>Located in one of Dhaka&apos;s liveliest neighborhoods, the <span className="font-semibold">Banani branch</span> of Hotel Omni Residency is perfect for
      travelers who want to experience the energetic pulse of the city. Surrounded by the best shopping, dining, and
      entertainment venues, this branch offers a luxurious oasis amidst the vibrant city life.</>,
      images:{
        img1:'/images/branches/banani/image1.jpg',
        img2:'/images/branches/banani/image2.jpg',
        img3:'/images/branches/banani/image3.jpg',
        img4:'/images/branches/banani/image4.jpg'
      }
  },
  {
    id: 1,
    branch_name: "baridhara",
    overview: <>Nestled in Dhaka&apos;s exclusive diplomatic zone, our <span>Baridhara branch</span> offers a peaceful escape from the hustle and
      bustle of the city. Ideal for both business travelers and vacationers, this branch provides a serene and sophisticated
      environment, ensuring every guest feels pampered and relaxed.
    </>,
     images:{
      img1:'/images/branches/baridhara/image1.jpg',
      img2:'/images/branches/baridhara/image2.jpg',
      img3:'/images/branches/baridhara/image3.jpg',
      img4:'/images/branches/baridhara/image4.jpg'
    }
    
  }
]