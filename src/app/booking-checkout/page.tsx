import PrivateRoutes from "@/components/core/layouts/private.layout";
import CheckoutSection from "./_utils/checkout.section";
import HeroSection from "./_utils/hero.section";

const Page = () => {
  return (
    <PrivateRoutes>
      <>
        <HeroSection />
        <CheckoutSection />
      </>
    </PrivateRoutes>
  );
};

export default Page;
