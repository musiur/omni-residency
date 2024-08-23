import { A__GET__Bookings } from "@/app/booking-checkout/_utils/actions";

const Bookings = async () => {
  const result = await A__GET__Bookings();
  console.log(result);
  return <div>Booking</div>;
};
export default Bookings;
