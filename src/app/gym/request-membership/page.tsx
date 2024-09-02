import ReservationForm from "@/app/restaurants/_utils/reservation.form.section";
import GymRequestMembershipHeroSection from "../_utils/request-membership.hero.section";

const Page = ({
  searchParams,
}: {
  searchParams: { branch: string; branchid: string; name: string; id: string };
}) => {
  return (
    <>
      <GymRequestMembershipHeroSection details={searchParams} />
      <ReservationForm />
    </>
  );
};

export default Page;
