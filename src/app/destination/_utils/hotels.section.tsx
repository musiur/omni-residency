import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookingDotComRating from "../../../components/core/molecules/booking.com.molecule";

type T__Hotel = {
  id: number;
  title: string;
  location: string;
  address: string;
  roomsLink: string;
  image: string;
  rating: number;
};

const Hotels = () => {
  return (
    <>
      <section className="container">
        <h2 className="pt-[16px]">Dhaka</h2>
        <p className="text-plain_gray py-[10px] text-[16px] md:text-[20px] leading-snug  md:leading-loose pb-[40px]">
          Welcome to Hotel Omni Residency. Our four-star luxury hotel is
          situated at the heart of Dhaka city in the sophisticated area of
          Banani. We are surrounded by the most exclusive restaurants, large
          marketplaces and high-class extravagant services. Adjacent to several
          commercial and diplomatic areas like Gulshan and Banani, Omni
          Residency is accessible from all points of the vibrant city. The hotel
          is equipped with advanced fire security systems and is completely
          noise free and highly secured.
        </p>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-[16px] md:gap-[40px]">
          {HotelsList.map((hotel: T__Hotel) => {
            const { id, title, location, address, roomsLink, image, rating } =
              hotel;
            return (
              <div
                key={id}
                className="flex flex-col min-[1120px]:flex-row justify-start gap-[8px] md:gap-[16px] p-[8px] md:p-[16px] rounded-[10px] items-stretch border"
              >
                <div className="relative min-h-[300px] min-[1120px]:min-h-[200px] min-w-[230px]">
                  <Image
                    src={image}
                    alt="hotel-image"
                    fill
                    quality={100}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="rounded-[4px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] pt-[16px] min-[1120px]:pt-0">
                  <h3 className="text-[16px] md:text-[24px] font-semibold">
                    {title}
                  </h3>
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-primary">{location}</p>
                    <p className="flex items-center gap-[8px]">
                      <MapPin className="min-w-4 min-h-4 w-4 h-4" />
                      <span>{address}</span>
                    </p>
                  </div>
                  <div className="py-5">
                    <BookingDotComRating rating={rating} />
                  </div>
                  <Link href={roomsLink}>
                    <Button>View Room(s)</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
      <section className="container flex flex-col md:flex-row items-stretch gap-[40px]">
        <div className="flex-1">
          <h2 className="pt-[16px]">Cox&apos;s Bazar</h2>
          <p className="text-plain_gray py-[10px] text-[16px] md:text-[20px] leading-snug  md:leading-loose pb-[40px]">
            Comingsoon, Hotel Omni Residency is expanding to the
            beautifulcoastal city of Cox&apos;s Bazaar, where we are
            constructing a luxurious new branch. Known for itsstunning 120km
            longbeach, Cox&apos;s Bazaar is the ultimate destination for beach
            lovers, nature enthusiasts, and those seeking a tranquil retreat by
            the sea.
          </p>
          <p className="text-[16px] md:text-[20px] font-bold text-primary">
            COMMING SOON!
          </p>
        </div>
        <div className="flex-1 relative rounded-[10px] overflow-hidden min-h-[300px]">
          <Image
            src="/images/destination/omni-iconic.png"
            alt="omni-iconic"
            fill
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </section>
    </>
  );
};

export default Hotels;

const HotelsList: T__Hotel[] = [
  {
    id: 1,
    title: "Hotel Omni Residency",
    location: "Banani",
    address:
      "House No 42, Road No 15, Block - D, Banani, Dhaka, Gulshan, 1213 Dhaka, Bangladesh",
    rating: 8.3,
    roomsLink: "/branches/banani",
    image: "/omni-building-banani.jpg",
  },
  {
    id: 1,
    title: "Hotel Omni Residency",
    location: "Baridhara",
    address:
      "House #06, Road #14.Block #K, Baridhara Diplomatic zone, 1213 Dhaka, Bangladesh",
    rating: 10,
    roomsLink: "/branches/baridhara",
    image: "/omni-building-baridhara.jpg",
  },
];
