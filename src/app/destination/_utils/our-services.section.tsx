import Breakfast from "@/components/assets/breakfast.icon";
import DeliveryLocation from "@/components/assets/delivery-location.icon";
import Parking from "@/components/assets/parking.icon";
import RoomService from "@/components/assets/room-services.icon";
import SwimmingPool from "@/components/assets/swimming-pool.icon";
import Wifi from "@/components/assets/wifi.icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type T__ServiceCard = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const OurServices = () => {
  return (
    <section className="container" id="services">
      <div className="flex items-center justify-between gap-10">
        <div>
          <p className="px-[16px] py-[12px] rounded-full bg-muted_orange text-primary font-medium inline-flex text-center">
            Our Services
          </p>
          <h2 className="pt-[16px]">Hotel Facilites</h2>
        </div>
        <Link href="#" className="group flex items-center gap-2">
          <Button>SEE ALL</Button>
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 min-[480px]:grid-cols-2 min-[800px]:grid-cols-3 gap-[16px] md:gap-[24px] pt-8">
        {servicesCardData.map((card: T__ServiceCard) => {
          const { id, title, description, icon } = card;
          return (
            <div
              className="flex items-end justify-between gap-4 p-[12px] md:p-[24px] rounded-[10px] border"
              key={id}
            >
              <div className="flex flex-col gap-[16px]">
                <h4 className="font-medium text-[16px] md:text-[20px]">
                  {title}
                </h4>
                <p className="text-gray-500">{description}</p>
              </div>
              <div className="min-w-10">{icon}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;

const servicesCardData: T__ServiceCard[] = [
  {
    id: 1,
    title: "Pick Up & Drop",
    description:
      "We'll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
    icon: <DeliveryLocation className="w-10 h-10" />,
  },
  {
    id: 2,
    title: "Parking Space",
    description:
      "Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
    icon: <Parking className="w-10 h-10" />,
  },
  {
    id: 3,
    title: "Room Service",
    description:
      "Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
    icon: <RoomService className="w-10 h-10" />,
  },
  {
    id: 4,
    title: "Swimming Pool",
    description:
      "Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.",
    icon: <SwimmingPool className="w-10 h-10" />,
  },
  {
    id: 5,
    title: "Fibre Internet",
    description:
      "Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
    icon: <Wifi className="w-10 h-10" />,
  },
  {
    id: 6,
    title: "Breakfast",
    description:
      "Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant",
    icon: <Breakfast className="w-10 h-10" />,
  },
];
