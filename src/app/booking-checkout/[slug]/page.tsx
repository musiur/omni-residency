import BookingForm from "@/components/core/molecules/booking-form.molecule";
import { RoomGalleryCarousel } from "@/components/core/molecules/room-gallary.molecule";
import YouMayLike from "@/components/core/molecules/you-may-like.molecule";
import HeroSection from "@/components/core/pages/booking-checkout/hero.section";
import {
  AirVent,
  Baby,
  Bath,
  BedDouble,
  Car,
  Coffee,
  DollarSign,
  Home,
  Key,
  Package2,
  Scale,
  Tv,
  User,
  Wifi,
  Wind,
} from "lucide-react";

const Page = ({ params }: { params: { slug: string } }) => {
  const OverviewFeatures = [
    {
      id: 1,
      icon: <User />,
      text: "2 Adult",
    },
    {
      id: 2,
      icon: <Baby />,
      text: "2 Children",
    },
    {
      id: 3,
      icon: <Home />,
      text: "48 sqm",
    },
    {
      id: 4,
      icon: <DollarSign />,
      text: "$100",
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
  return (
    <div>
      <HeroSection params={params} />
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        <RoomGalleryCarousel />
        <BookingForm />
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] md:text-[24px] font-bold">Overview</h2>
          <p>
            Our Vip Room offers a stunning view of the white sand beach. This
            room is designed and decorated with modern style and equipped with
            the most luxurious facilites. Little luxuries include free Wi-Fi,
            deluxe bath amenities and a 4K technology flat-screen television
            with cable channels.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10">
            {OverviewFeatures.map((feature) => {
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
      <YouMayLike />
    </div>
  );
};

export default Page;
