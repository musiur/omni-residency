import TwoSiderMolecule from "../../components/core/molecules/twosider.molecule";

const ExploreDestination = () => {
  return (
    <section className="container py-[90px]">
      <TwoSiderMolecule
        details={{
          image: "/explore-destination.png",
          highlighter: "Explore Destination",
          h2: (
            <>
              Enjoy unforgettable experiences with&nbsp;<span>Omni</span>
            </>
          ),
          p: "Established in 2019, Hotel Omni Residency offers an unparalleled experience of luxury and comfort with two premier branches located in Baridhara and Banani, Dhaka. Designed for both business and leisure travelers, our hotels provide a perfect blend of modern elegance, world-class services, and a rich array of amenities to ensure a memorable stay.",
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
