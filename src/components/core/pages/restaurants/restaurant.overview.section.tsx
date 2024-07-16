import { Button } from "@/components/ui/button";
import { AlarmClock } from "lucide-react";
import { RestaurantOverviewGallery } from "../../molecules/overview.gallery.molecules";
import Link from "next/link";
import clsx from "clsx";
import { TRestaurantOverviewData } from "@/lib/type";

type RestaurantsData = {
  id: number;
  name: string;
  branch: {
    id: number;
    name: string;
  };
  status: string;
  overview: string;
  featured_image: string;
  gallery_set: Array<{ id: number; image: string }>;
  cuisines: Array<{ id: number; cuisine: string }>;
  breakfast_opening: string;
  breakfast_closing: string;
  lunch_opening: string;
  lunch_closing: string;
  dinner_opening: string;
  dinner_closing: string;
  discount_in_percentage: string;
  created_at: string;
};

const RestaurantOverview = ({ details }: { details: RestaurantsData }) => {
  const { id, branch, name, overview, cuisines } = details;
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
          <p className="tracking-widest">{branch.name}</p>
          <h2>{name}</h2>
          <p className="pt-[16px]">{overview}</p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[20px] font-semibold pb-2">
            Hours
          </h3>
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[4px]">
              <AlarmClock className="w-5 h-5 stroke-[1.3px] stroke-secondary" />
              <span className="font-semibold">Breakfast:</span>
              <span>
                {details.breakfast_opening} - {details.breakfast_closing}
              </span>
            </div>
            <div className="flex items-center gap-[4px]">
              <AlarmClock className="w-5 h-5 stroke-[1.3px] stroke-secondary" />
              <span className="font-semibold">Lunch:</span>
              <span>
                {details.lunch_opening} - {details.lunch_closing}
              </span>
            </div>
            <div className="flex items-center gap-[4px]">
              <AlarmClock className="w-5 h-5 stroke-[1.3px] stroke-secondary" />
              <span className="font-semibold">Dinner:</span>
              <span>
                {details.dinner_opening} - {details.dinner_closing}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[20px] font-semibold pb-2">
            Cuisine
          </h3>
          <div className="flex items-center gap-2">
            {cuisines.map((item: any) => (
              <p
                className="border px-3 py-1 rounded-md shadow-sm"
                key={item.id}
              >
                {item.cuisine}
              </p>
            ))}
          </div>
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
        <RestaurantOverviewGallery images={details.gallery_set} />
      </aside>
    </section>
  );
};

export default RestaurantOverview;
