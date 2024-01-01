import { RoomCarousel } from "../../molecules/room-carousel.molecule";

const DealsOfTheDay = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center justify-center gap-[8px] pb-[32px]">
        <h3 className="text-[24px] md:text-[36px] font-extrabold">
          Deals of the day
        </h3>
        <div className="min-w-[150px] border-2 border-primary rounded-full"></div>
        <p className="text-plain_gray pt-[16px]">
          Get Up to 40% off on selected rooms!
        </p>
      </div>
      <RoomCarousel />
    </section>
  );
};

export default DealsOfTheDay;
