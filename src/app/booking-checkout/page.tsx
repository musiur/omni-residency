import PrivateRoutes from "@/components/core/layouts/private.layout";
import CheckoutSection from "./_utils/checkout.section";
import HeroSection from "./_utils/hero.section";

const Page = () => {
  return (
    <PrivateRoutes from_location={"/booking-checkout"}>
      <>
        <HeroSection />
        <CheckoutSection />
      </>
    </PrivateRoutes>
  );
};

export default Page;
