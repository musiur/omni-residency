import Booking from "../_uitls/bookings/page";
import Gym from "../_uitls/gym/page";
import Overview from "../_uitls/overview/page";
import Settings from "../_uitls/settings/page";

const Page = ({ params }: { params: { slug: string } }) => {
  // @ts-ignore
  return TabContents[params?.slug || "settings"];
};

export default Page;

const TabContents = {
  settings: <Settings />,
  overview: <Overview />,
  bookings: <Booking />,
  gym: <Gym />,
};
