import GymRequestMembershipHeroSection from "../_utils/request-membership.hero.section";
import GymRequestMembershipForm from "../_utils/request-membership.form";

const Page = ({
  searchParams,
}: {
  searchParams: { branch: string; branchid: string; name: string; id: string };
}) => {
  return (
    <>
      <GymRequestMembershipHeroSection details={searchParams} />
      <GymRequestMembershipForm />
    </>
  );
};

export default Page;
