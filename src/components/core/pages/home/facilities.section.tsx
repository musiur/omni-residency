import TwoSiderMolecule from "../../molecules/twosider.molecule";

const Facilities = () => {
  return (
    <section className="container py-[90px] flex flex-col items-center justify-center gap-[90px]">
      <div id="restaurant">
        <TwoSiderMolecule
          details={{
            image: "/images/home/food.png",
            highlighter: "Restaurants",
            h2: <>Enjoy the most lively cuisines at our branches!</>,
            p: "We are best agency for homestay buat penginapan kamu bersama orang tercinta dan orang tersayang yang kamu sukai dan sayangi untuk selamanya di dunia ini",
            btnLink: "/",
            btnText: "Book a table",
            imgOnRight: false,
            imgMaxW: false,
          }}
        />
      </div>
      <div id="gym">
        <TwoSiderMolecule
          details={{
            image: "/images/home/fitness.png",
            highlighter: "Fitness Center",
            h2: <>Keep your health and fitness always in check</>,
            p: "Kami akan selalu ada untuk menampilkan hunian terbaik untuk anda serta memberikan hunian atau tempat berteduh untuk orang yang sangat di sayangi dan juga di cintai",
            btnLink: "/",
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
