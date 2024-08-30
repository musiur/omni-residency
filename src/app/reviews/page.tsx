import Testimonial from "../_utils/testimonial.section";
import HeroSection from "./_utils/hero.section";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Testimonial showReviewBtn={false} />
    </div>
  );
};

export default Page;
