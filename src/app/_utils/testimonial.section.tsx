import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Star } from "lucide-react";

type T__TestimonialCard = {
  id: number;
  name: string;
  address: string;
  rating: number;
  text: string;
  image: string;
};

const Testimonial = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="container flex flex-col items-center justify-center gap-[24px]">
        <p className="px-[16px] py-[12px] rounded-full bg-muted_orange text-primary font-medium inline-flex text-center">
          Testimonial
        </p>
        <h4 className="text-[20px] md:text-[24px] font-extrabold">
          Some of our customer reviews
        </h4>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-cols-3 gap-[24px] lg:gap-[48px] pt-[48px]">
        {cardData.map((item: T__TestimonialCard) => {
          const { id, name, address, rating, text, image } = item;
          return (
            <div
              key={id}
              className={clsx(
                "p-[16px] md:p-[20px] rounded-[10px] drop-shadow-spreed bg-white",
                {
                  "col-span-1 sm:col-span-2 min-[1100px]:col-span-1": id === 3,
                  "col-span-1": id !== 3,
                }
              )}
            >
              <div className="flex items-center justify-between gap-[12px]">
                <div className="flex items-center justify-start gap-[12px]">
                  <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-plain_gray">{address}</p>
                  </div>
                </div>
                <div className="text-plain_gray flex items-center gap-[4px]">
                  <Star className="h-4 w-4 stroke-plain_gray mt-[-2px] fill-plain_gray" />
                  {rating}
                </div>
              </div>
              <div className="text-plain_gray italic pt-[16px]">{text}</div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center pt-[32px]">
        <Button variant={"outline"} className="border-primary">
          View all reviews
        </Button>
      </div>
    </section>
  );
};

export default Testimonial;

const cardData: T__TestimonialCard[] = [
  {
    id: 1,
    name: "Cecep Akbar",
    address: "Sukabumi, Indonesia",
    rating: 4.9,
    text: "“Hade mang aslina euy mantap lah lumayan apalagi buat rumah kedua kalau suntuk pas dirumah terus yang bikin bosan “",
    image: "",
  },
  {
    id: 2,
    name: "Muhammad Kusoy",
    address: "Tasikmalaya, Indonesia",
    rating: 4.8,
    text: "“Aslina rame pisan didiyeu mah pokokna hotel teh mantap pisan kasurnya juga empuk pisan seperti daging empal sapi “",
    image: "",
  },
  {
    id: 3,
    name: "Putri Evelyn",
    address: "Jakarta, Indonesia",
    rating: 4.9,
    text: "“Baik banget disini mah pelayanannya sangat bagus dan juga tempanya sangat nyaman serta harga yang sangat terjangkau ”",
    image: "",
  },
];
