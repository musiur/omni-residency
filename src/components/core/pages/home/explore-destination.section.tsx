import TwoSiderMolecule from "../../molecules/twosider.molecule";

const ExploreDestination = () => {
  return (
    <section className="container py-[90px]">
      <TwoSiderMolecule
        details={{
          image: "/images/home/explore-destination.png",
          highlighter: "Explore Destination",
          h2: (
            <>
              Enjoy unforgettable experiences with&nbsp;<span>Omni</span>
            </>
          ),
          p: "We are best agency for homestay buat penginapan kamu bersama orang tercinta dan orang tersayang yang kamu sukai dan sayangi untuk selamanya di dunia ini",
          btnLink: "/",
          btnText: "Explore Now",
          imgOnRight: false,
          imgMaxW: true,
        }}
      />
    </section>
  );
};

export default ExploreDestination;
