import Image from "next/image";

const Intro = () => {
  return (
    <section className="container section">
      <h2 className="text-4xl font-semibold mb-8">Introduction</h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <p className="text-gray-700 leading-relaxed md:text-2xl">
            Hotel Omni Residency was established with a vision to offer
            unmatched luxury and hospitality. Nestled in prime locations, each
            of our hotels is a testament to our commitment to providing
            world-class service and an unforgettable experience.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/branches/ahosan-manzil.avif"
            alt="Hotel Introduction"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
