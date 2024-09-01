import TwoSiderMolecule from "../../components/core/molecules/twosider.molecule";

const Facilities = () => {
  return (
    <section className="container py-[90px] flex flex-col items-center justify-center gap-[90px]">
      <div id="restaurant">
        <TwoSiderMolecule
          details={{
            image: "/images/home/carousel/restaurants/restaurants4.jpg",
            highlighter: "Restaurants",
            h2: <>Enjoy the most lively cuisines at our branches!</>,
            p: "Indulge in gourmet dining at our restaurants, offering a diverse selection of international and local cuisine prepared by top chefs. Relax with a cup of freshly brewed coffee or a light snack at our stylish cafes, perfect for casual meetings or unwinding after a busy day.",
            btnLink: "/restaurants",
            btnText: "Book a table",
            imgOnRight: false,
            imgMaxW: false,
          }}
        />
      </div>
      <div id="gym">
        <TwoSiderMolecule
          details={{
            image: "/images/home/carousel/gym/gym.jpg",
            highlighter: "Fitness Center",
            h2: <>Keep your health and fitness always in check</>,
            p: "Stay fit and energized during your stay with our state-of-the-art fitness center, equipped with the latest exercise machines and professional trainers.",
            btnLink: "/gym",
            btnText: "Become a member",
            imgOnRight: true,
            imgMaxW: false,
          }}
        />
      </div>
    </section>
  );
};

export default Facilities;
