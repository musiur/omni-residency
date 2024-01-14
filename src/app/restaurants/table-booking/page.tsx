"use client";
import HeroSection from "@/components/core/pages/restaurants/table.booking.hero.section";

import { useSearchParams } from "next/navigation";
import RestaurantOverview from "@/components/core/pages/restaurants/restaurant.overview.section";
import ReservationForm from "@/components/core/pages/restaurants/reservation.form.section";
import { RestaurantsOverviewData } from "@/lib/data";

const Page = () => {
  const params = useSearchParams();
  return (
    <>
      <HeroSection />
      <section className="container">
        <RestaurantOverview details={RestaurantsOverviewData[0]} />
      </section>
      <ReservationForm />
    </>
  );
};

export default Page;
