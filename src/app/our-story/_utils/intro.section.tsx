import Image from "next/image";

const Intro = () => {
  return (
    <section className="container section">
      <h2 className="text-4xl font-semibold mb-8">Introduction</h2>
      <div className="flex flex-col lg:flex-row gap-12 overflow-hidden rounded-b-lg">
        <div className="lg:w-1/2 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Welcome to Hotel Omni Residency, where luxury meets comfort in the
            vibrant city of Dhaka. Established in 2019, we are proud to offer
            two branches located in teh prestigious neighborhoods of Baridhara
            and Banani, each designed to provide an exceptional hospitality
            experience for both business and leisure travelers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Hotel Omni Residency, we believe in creating more than just a
            place to stay. We aim to deliver a personalized, 5-star experience
            that makes every guest feel at home. Our hotels are equipped with
            state-of-the-art facilities and world-class amenities, ensuring your
            stay is as relaxing and fulfilling as possible.
          </p>
          <Image
            src="/omni-building-baridhara.jpg"
            alt="Hotel Introduction"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/omni-building-banani.jpg"
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


