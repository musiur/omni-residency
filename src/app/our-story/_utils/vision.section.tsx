const Vision = () => {
  return (
    <section className="container section">
      <h2 className="text-4xl font-semibold mb-8">Vision & Mission</h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-medium mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            At Hotel Omni Residency, our vision is to be the leading choice for
            luxury accommodation in Dhaka, offering guests a harmonious blend of
            modern elegance, comfort, and unparalleled service.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to simple to create unforgettable experiences for
            every guests, every time. Whether you&apos;re staying for business,
            leisure, or a special occasion, we are committed to ensuring that
            every aspect of your stay is seamless and memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
