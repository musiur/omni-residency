import { A__GET__Bookings } from "@/app/booking-checkout/_utils/actions";
import { Payment } from "./_utils/types";
import DataTable from "./_utils/table";
import { Columns___Booking } from "./_utils/column";

const Bookings = async () => {
  const result = await A__GET__Bookings();
  const data: Payment[] = result?.data?.results?.map((item: any) => {
    const {
      id,
      full_name,
      email,
      mobile,
      status,
      check_in,
      check_out,
      branch,
      placed_at,
      billing,
    } = item;
    const { subtotal, total_due, paid, payment_status } = billing;
    return {
      id,
      full_name,
      email,
      mobile,
      status,
      check_in,
      check_out,
      branch,
      placed_at,
      subtotal,
      total_due,
      paid: parseFloat(paid || "0"),
      payment_status,
    };
  });
  console.log(result)
  return (
    <div>
      {
        data ? <DataTable data={data} columns={Columns___Booking} />: null
      }
    </div>
  );
};
export default Bookings;
