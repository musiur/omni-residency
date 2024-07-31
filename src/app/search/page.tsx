import Testimonial from "@/components/core/pages/home/testimonial.section";
import HeroSection from "@/components/core/pages/search/hero.section";
import RoomCard from "@/components/core/pages/search/room.card";
import { A__SearchRooms } from "./_utils/actions";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    branch: string;
    checkin: string;
    checkout: string;
    persons: string;
  };
}) => {
  const result = await A__SearchRooms({
    branch: searchParams?.branch,
    check_in: searchParams?.checkin,
    check_out: searchParams?.checkout,
    adults: searchParams?.persons,
  });
  const rooms: any[] = result?.data?.results || [];

  return (
    <div>
      <HeroSection defaultValues={{ ...searchParams }} />
      <section className="container grid grid-cols-1 gap-[64px]">
        {rooms?.length > 0 ? rooms?.map((item: any) => {
          return <RoomCard key={item.id} details={item} />;
        }) : <p className="text-center animate-pulse">No Room Available!</p>}
      </section>
      <Testimonial />
    </div>
  );
};

export default Page;

{
  /* <SearchRoomCardSkeleton /> */
}
// async function sleeper(ms: number) {
//   return async function (x: any) {
//     const value = await new Promise((resolve) =>
//       setTimeout(() => resolve(x), ms)
//     );
//     return value;
//   };
// }

// const roomsData = [
//   {
//     id: 1,
//     title: "Standard Room",
//     startFrom: 100,
//     shortDescription:
//       "All our delux room has big windows to help you take a broad view of the cityscape and nature",
//     facilities: [
//       { id: 1, icon: <User2 />, key: "adults", value: 2 },
//       { id: 2, icon: <Baby />, key: "children", value: 2 },
//       { id: 3, icon: <AreaChart />, key: "area", value: 30 },
//       { id: 4, icon: <BedDouble />, key: "bed", value: 2 },
//       { id: 5, icon: <Bath />, key: "bath", value: 1 },
//       { id: 6, icon: <CarFront />, key: "parking", value: true },
//     ],
//     viewLink: "#",
//     image: "/images/home/hero-background.png",
//     videoLink: "#",
//     photosLink: "#",
//   },
//   {
//     id: 2,
//     title: "Standard Room",
//     startFrom: 100,
//     shortDescription:
//       "All our delux room has big windows to help you take a broad view of the cityscape and nature",
//     facilities: [
//       { id: 1, icon: <User2 />, key: "adults", value: 2 },
//       { id: 2, icon: <Baby />, key: "children", value: 2 },
//       { id: 3, icon: <AreaChart />, key: "area", value: 30 },
//       { id: 4, icon: <BedDouble />, key: "bed", value: 2 },
//       { id: 5, icon: <Bath />, key: "bath", value: 1 },
//       { id: 6, icon: <CarFront />, key: "parking", value: true },
//     ],
//     viewLink: "#",
//     image: "/images/home/hero-background.png",
//     videoLink: "#",
//     photosLink: "#",
//   },
//   {
//     id: 3,
//     title: "Standard Room",
//     startFrom: 100,
//     shortDescription:
//       "All our delux room has big windows to help you take a broad view of the cityscape and nature",
//     facilities: [
//       { id: 1, icon: <User2 />, key: "adults", value: 2 },
//       { id: 2, icon: <Baby />, key: "children", value: 2 },
//       { id: 3, icon: <AreaChart />, key: "area", value: 30 },
//       { id: 4, icon: <BedDouble />, key: "bed", value: 2 },
//       { id: 5, icon: <Bath />, key: "bath", value: 1 },
//       { id: 6, icon: <CarFront />, key: "parking", value: true },
//     ],
//     viewLink: "#",
//     image: "/images/home/hero-background.png",
//     videoLink: "#",
//     photosLink: "#",
//   },
// ];
