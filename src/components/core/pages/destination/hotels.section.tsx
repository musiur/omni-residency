import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookingDotComRating from "../../molecules/booking.com.molecule";

const Hotels = () => {
  return (
    <>
      <section className="container">
        <h2 className="pt-[16px]">Dhaka</h2>
        <p className="text-plain_gray py-[10px] text-[16px] md:text-[20px] leading-snug  md:leading-loose pb-[40px]">
          We are best hotel for homestay buat penginapan kamu bersama orang
          tercinta dan orang tersayang yang kamu sukai dan sayangi untuk
          selamanya di dunia ini
        </p>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-[16px] md:gap-[40px]">
          {HotelsList.map((hotel) => {
            const { id, title, location, address, roomsLink, image, rating } =
              hotel;
            return (
              <div
                key={id}
                className="flex flex-col flex-col min-[1120px]:flex-row items-center justify-start gap-[8px] md:gap-[16px] p-[8px] md:p-[16px] rounded-[10px] items-stretch border"
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
                    <BookingDotComRating rating={8.9} />
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
      <section className="container flex flex-col md:flex-row items-stretch items-center gap-[40px]">
        <div className="flex-1">
          <h2 className="pt-[16px]">Cox&apos;s Bazar</h2>
          <p className="text-plain_gray py-[10px] text-[16px] md:text-[20px] leading-snug  md:leading-loose pb-[40px]">
            We are best hotel for homestay buat penginapan kamu bersama orang
            tercinta dan orang tersayang yang kamu sukai dan sayangi untuk
            selamanya di dunia ini
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

const HotelsList = [
  {
    id: 1,
    title: "Hotel Omni Residency",
    location: "Banani",
    address: "S.S Khaled Road, Lalkhan Bazar",
    rating: 8.9,
    roomsLink: "#",
    image: "/images/destination/omni.png",
  },
  {
    id: 1,
    title: "Hotel Omni Residency",
    location: "Baridhara",
    address: "S.S Khaled Road, Lalkhan Bazar",
    rating: 8.9,
    roomsLink: "#",
    image: "/images/destination/radison-blue.png",
  },
];
