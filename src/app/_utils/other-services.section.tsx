import TwoSiderMolecule from "../../components/core/molecules/twosider.molecule";

const OtherServices = () => {
  return (
    <section>
      <TwoSiderMolecule
        details={{
          image: "/other-services.png",
          highlighter: "Other Services",
          h2: (
            <>
              Indulge in our wide variety of&nbsp;
              <span>service & facilities</span>
            </>
          ),
          p: "We are best agency for homestay buat penginapan kamu bersama orang tercinta dan orang tersayang yang kamu sukai dan sayangi untuk selamanya di dunia ini",
          btnLink: "/",
          btnText: "",
          imgOnRight: false,
          imgMaxW: true,
        }}
      />
    </section>
  );
};

export default OtherServices;
