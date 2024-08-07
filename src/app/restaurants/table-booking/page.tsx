import HeroSection from "@/app/restaurants/_utils/table.booking.hero.section";

import ReservationForm from "@/app/restaurants/_utils/reservation.form.section";

const Page = () => {
  return (
    <>
      <HeroSection />
      <section className="container">
        {/* <RestaurantOverview details={RestaurantsOverviewData[0]} /> */}
      </section>
      <ReservationForm />
    </>
  );
};

export default Page;
