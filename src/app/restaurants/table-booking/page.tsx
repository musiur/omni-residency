import HeroSection from "@/app/restaurants/_utils/table.booking.hero.section";

import ReservationForm from "@/app/restaurants/_utils/reservation.form.section";

const Page = ({
  searchParams,
}: {
  searchParams: { branch: string; branchid: string; name: string; id: string };
}) => {
  return (
    <>
      <HeroSection details={searchParams} />
      <ReservationForm />
    </>
  );
};

export default Page;
