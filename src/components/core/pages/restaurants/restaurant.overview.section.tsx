import { Button } from "@/components/ui/button";
import { AlarmClock } from "lucide-react";
import { RestaurantOverviewGallery } from "../../molecules/overview.gallery.molecules";
import Link from "next/link";
import clsx from "clsx";
import { TRestaurantOverviewData } from "@/lib/type";

const RestaurantOverview = ({
  details,
}: {
  details: TRestaurantOverviewData;
}) => {
  const { id, location, hotelName, shortDescription, hours, cuisine } = details;
  const even = id % 2 === 0;
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
      <aside
        className={clsx("flex flex-col gap-[40px]", {
          "order-1": !even,
          "order-2": even,
        })}
      >
        <div>
          <p className="tracking-widest">{location}</p>
          <h2>{hotelName}</h2>
          <p className="pt-[16px]">{shortDescription}</p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[20px] font-semibold pb-2">
            Hours
          </h3>
          <div className="flex flex-col gap-[16px]">
            {hours.map((item) => {
              const { id, type, time } = item;
              return (
                <div key={id} className="flex items-center gap-[4px]">
                  <AlarmClock className="w-5 h-5 stroke-[1.3px] stroke-secondary" />
                  <span className="font-semibold">{type}:</span>
                  <span>{time}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[20px] font-semibold pb-2">
            Cuisine
          </h3>
          <p>{cuisine}</p>
        </div>
        <Link href={`/restaurants/table-booking?branch=banani`}>
          <Button>Book a Table</Button>
        </Link>
      </aside>
      <aside
        className={clsx({
          "order-2": !even,
          "order-1": even,
        })}
      >
        <RestaurantOverviewGallery />
      </aside>
    </section>
  );
};

export default RestaurantOverview;
