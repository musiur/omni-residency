import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NearbyPlaces = ({ data }
  : {
    data: any
  }) => {
  return (
    <section className="container flex flex-col-reverse min-[900px]:flex-row  items-center gap-[40px]" id="nearby-attractions">
      <div className="flex-[0.4]">
        <h2 className="pt-[16px]">Nearby Attractions</h2>
        <p className="text-plain_gray py-[10px] text-[16px] md:text-[20px] leading-snug pb-[40px]">
          We are best agency for homestay buat penginapan kamu bersama orang
          tercinta dan orang tersayang yang kamu sukai dan sayangi untuk
          selamanya di dunia ini
        </p>
        <Link href="#">
          <Button>View All</Button>
        </Link>
      </div>
      <div className="flex-[0.6] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {data?.map((item:any) => {
          const { id, name,featured_image, distance_from_hotel_in_km } = item;
          return (
            <div
              className="relative rounded-[10px] overflow-hidden min-h-[300px] flex items-end"
              key={id}
            >
              <Image
                src={featured_image}
                alt="omni-iconic"
                fill
                quality={100}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="w-full bg-white/30 backdrop-blur p-[16px] flex flex-col gap-[4px]">
                <div className="flex flex-wrap items-center gap-[8px]">
                  <h4 className="font-semibold text-white">{name}</h4>
                  <p className="flex item-center gap-[8px]">
                    <MapPin className="w-[16px] h-[16px] mt-[5px] stroke-[1.5px] stroke-white" />
                    <span className="text-white font-light">
                      {distance_from_hotel_in_km}&nbsp;Km Away
                    </span>
                  </p>
                </div>
                <p className="text-gray-100 font-light">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NearbyPlaces;

// const placesCardData = [
//   {
//     id: 1,
//     image: "/images/branches/bashundhara-city.avif",
//     name: "Bashundhara City",
//     distance: "1.4 km",
//     intro: "Lorem ipsum kil telier here kiva algese",
//   },
//   {
//     id: 2,
//     image: "/images/branches/ahosan-manzil.avif",
//     name: "Ahosan Manzil",
//     distance: "800 m",
//     intro: "Lorem ipsum kil telier here kiva algese",
//   },
// ];
