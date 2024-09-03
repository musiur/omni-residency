import BookingForm from "@/components/core/molecules/booking-form.molecule";
import { RoomGalleryCarousel } from "@/components/core/molecules/room-gallary.molecule";
import {
  AirVent,
  Baby,
  Bath,
  BedDouble,
  Car,
  Coffee,
  DollarSign,
  Home,
  Package2,
  Tv,
  User,
  Wifi,
  Wind,
} from "lucide-react";
import { A__GET__RoomDetails } from "./_utils/action";
import HeroSection from "./_utils/hero.section";
import { A__GET__FavouriteRooms } from "@/app/branches/_utils/action";
import { RoomCarousel } from "@/app/branches/[branch]/_utils/room-carousel.section";

const Page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    id: number;
    branch: number;
  };
}) => {
  const result = await A__GET__RoomDetails({
    branch_id: searchParams.branch?.toString(),
    room_id: searchParams.id?.toString(),
  });
  const roomDetails = result?.data || [];

  const OverviewFeatures = [
    {
      id: 1,
      icon: <User />,
      text: `${roomDetails?.adults} Adult`,
    },
    {
      id: 2,
      icon: <Baby />,
      text: `${roomDetails?.children} Children`,
    },
    {
      id: 3,
      icon: <Home />,
      text: "48 sqm",
    },
    {
      id: 4,
      icon: <DollarSign />,
      text: `${roomDetails?.discounted_price} BDT`,
    },
    {
      id: 5,
      icon: <BedDouble />,
      text: "2 Beds",
    },
    {
      id: 6,
      icon: <Bath />,
      text: "2 bath",
    },
  ];
  const AmenityFeatures = [
    {
      id: 1,
      icon: <AirVent />,
      text: "Air-condition",
    },
    {
      id: 2,
      icon: <Tv />,
      text: "Big TV",
    },
    {
      id: 3,
      icon: <Wifi />,
      text: "Wifi",
    },
    {
      id: 4,
      icon: <Coffee />,
      text: "Coffee maker",
    },
    {
      id: 5,
      icon: <Package2 />,
      text: "Tissue box",
    },
    {
      id: 6,
      icon: <Wind />,
      text: "Hair dryer",
    },
    {
      id: 7,
      icon: <Car />,
      text: "Parking",
    },
  ];

  const favouriteRooms = await A__GET__FavouriteRooms(searchParams.branch);
  return (
    <div>
      <HeroSection params={params} />
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        <RoomGalleryCarousel images={roomDetails?.gallery_set} />
        <BookingForm />
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] md:text-[24px] font-bold">Overview</h2>
          <p>{roomDetails?.overview}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10">
            {OverviewFeatures?.map((feature) => {
              const { id, icon, text } = feature;
              return (
                <div
                  className="flex gap-4 [&>svg]:stroke-[1.3px] [&>svg]:stroke-primary"
                  key={id}
                >
                  {icon}
                  <p className="text-gray-500">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] md:text-[24px] font-bold">
            Free Amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10">
            {AmenityFeatures.map((feature) => {
              const { id, icon, text } = feature;
              return (
                <div
                  className="flex gap-4 [&>svg]:stroke-[1.3px] [&>svg]:stroke-primary"
                  key={id}
                >
                  {icon}
                  <p className="text-gray-500">{text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div />
      </section>
      <RoomCarousel data={favouriteRooms?.data?.results} />
    </div>
  );
};

export default Page;
