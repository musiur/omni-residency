import { Button } from "@/components/ui/button";
import { AlarmClock, BadgeDollarSignIcon } from "lucide-react";
import { RestaurantOverviewGallery } from "../../../components/core/molecules/overview.gallery.molecules";
import Link from "next/link";
import clsx from "clsx";

type GymData = {
  id: number;
  name: string;
  branch: {
    id: number;
    name: string;
  };
  status: string;
  featured_image: string;
  overview: string;
  gallery: [
    {
      id: number;
      image: string;
    },
    {
      id: number;
      image: string;
    },
    {
      id: number;
      image: string;
    },
    {
      id: number;
      image: string;
    }
  ];
  gender_allowance: [
    {
      id: number;
      gender: string;
    },
    {
      id: number;
      gender: string;
    }
  ];
  area: number;
  fees: string;
  opening: string;
  closing: string;
  discount_in_percentage: string;
  created_at: string;
};

const GymOverview = ({
  details,
  index,
}: {
  details: GymData;
  index: number;
}) => {
  const {
    id,
    branch,
    name,
    overview,
    gender_allowance,
    opening,
    closing,
    area,
    fees,
    discount_in_percentage,
  } = details;
  const even = index % 2 === 0;
  const name_as_path = name?.replaceAll(" ", "-")?.toLowerCase();
  const discountPrice =
    parseInt(fees) - parseInt(fees) * (parseInt(discount_in_percentage) / 100);
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
          <div className="pt-12">
            <div className="flex items-center gap-2 text-xl">
              {parseInt(discount_in_percentage)}% on
              <s className="text-xl">BDT {fees}</s>
              <span className="font-semibold text-xl">BDT {discountPrice}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[20px] font-semibold pb-2">
            Hours
          </h3>
          <span>
            {opening} - {closing}
          </span>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[20px] font-semibold pb-2">
            Gender allowance
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            {gender_allowance?.map((item: any) => (
              <p
                className="border px-3 py-1 rounded-full shadow-md"
                key={item.id}
              >
                {item.gender}
              </p>
            ))}
          </div>
        </div>
        <Link
          href={`/gym/request-membership?branch=${branch?.name?.toLowerCase()}&branchid=${
            branch?.id
          }&name=${name_as_path}&id=${id}`}
        >
          <Button>Request membership</Button>
        </Link>
      </aside>
      <aside
        className={clsx({
          "order-2": !even,
          "order-1": even,
        })}
      >
        <RestaurantOverviewGallery images={details.gallery} />
      </aside>
    </section>
  );
};

export default GymOverview;
