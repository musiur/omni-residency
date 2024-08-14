const Vision = () => {
  return (
    <section className="container section">
      <h2 className="text-4xl font-semibold mb-8">Vision & Mission</h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-medium mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the preferred destination for travelers seeking unparalleled
            luxury, comfort, and personalized service.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-medium mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To create memorable experiences for our guests by offering
            exceptional hospitality, innovative services, and a commitment to
            excellence in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
