import { A__GET__Bookings } from "@/app/booking-checkout/_utils/actions";
import { Payment } from "./_utils/types";
import DataTable from "./_utils/table";
import { Columns___Booking } from "./_utils/column";

const Bookings = async () => {
  const result = await A__GET__Bookings();
  console.log(result);
  return (
    <div>
      <DataTable data={data} columns={Columns___Booking} />
    </div>
  );
};
export default Bookings;

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];
