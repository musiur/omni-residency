import Testimonial from "@/components/core/pages/home/testimonial.section";
import HeroSection from "@/components/core/pages/search/hero.section";
import RoomCard from "@/components/core/pages/search/room.card";
import {
  AreaChart,
  Baby,
  Bath,
  BedDouble,
  CarFront,
  User2,
} from "lucide-react";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <section className="container grid grid-cols-1 gap-[64px]">
        {Rooms.map((item) => {
          return <RoomCard key={item.id} details={item} />;
        })}
      </section>
      <Testimonial />
    </div>
  );
};

export default Page;

const Rooms = [
  {
    id: 1,
    title: "Standard Room",
    startFrom: 100,
    shortDescription:
      "All our delux room has big windows to help you take a broad view of the cityscape and nature",
    facilities: [
      { id: 1, icon: <User2 />, key: "adults", value: 2 },
      { id: 2, icon: <Baby />, key: "children", value: 2 },
      { id: 3, icon: <AreaChart />, key: "area", value: 30 },
      { id: 4, icon: <BedDouble />, key: "bed", value: 2 },
      { id: 5, icon: <Bath />, key: "bath", value: 1 },
      { id: 6, icon: <CarFront />, key: "parking", value: true },
    ],
    viewLink: "#",
    image: "/images/home/hero-background.png",
    videoLink: "#",
    photosLink: "#",
  },
  {
    id: 2,
    title: "Standard Room",
    startFrom: 100,
    shortDescription:
      "All our delux room has big windows to help you take a broad view of the cityscape and nature",
    facilities: [
      { id: 1, icon: <User2 />, key: "adults", value: 2 },
      { id: 2, icon: <Baby />, key: "children", value: 2 },
      { id: 3, icon: <AreaChart />, key: "area", value: 30 },
      { id: 4, icon: <BedDouble />, key: "bed", value: 2 },
      { id: 5, icon: <Bath />, key: "bath", value: 1 },
      { id: 6, icon: <CarFront />, key: "parking", value: true },
    ],
    viewLink: "#",
    image: "/images/home/hero-background.png",
    videoLink: "#",
    photosLink: "#",
  },
  {
    id: 3,
    title: "Standard Room",
    startFrom: 100,
    shortDescription:
      "All our delux room has big windows to help you take a broad view of the cityscape and nature",
    facilities: [
      { id: 1, icon: <User2 />, key: "adults", value: 2 },
      { id: 2, icon: <Baby />, key: "children", value: 2 },
      { id: 3, icon: <AreaChart />, key: "area", value: 30 },
      { id: 4, icon: <BedDouble />, key: "bed", value: 2 },
      { id: 5, icon: <Bath />, key: "bath", value: 1 },
      { id: 6, icon: <CarFront />, key: "parking", value: true },
    ],
    viewLink: "#",
    image: "/images/home/hero-background.png",
    videoLink: "#",
    photosLink: "#",
  },
];
