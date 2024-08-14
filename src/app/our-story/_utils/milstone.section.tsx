import { Card } from "@/components/ui/card";

const MileStone = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container section">
        <h2 className="text-4xl font-semibold mb-8 text-center">Milestones</h2>
        <div className="space-y-8">
          <Card className="p-6 bg-white shadow-md">
            <h3 className="text-2xl font-medium mb-2">Year 2000 - Inception</h3>
            <p className="text-gray-700">
              The beginning of our journey, marked by the opening of our first
              hotel in the heart of the city.
            </p>
          </Card>
          <Card className="p-6 bg-white shadow-md">
            <h3 className="text-2xl font-medium mb-2">Year 2010 - Expansion</h3>
            <p className="text-gray-700">
              With our guests overwhelming support, we expanded our presence to
              new cities, bringing luxury to more travelers.
            </p>
          </Card>
          <Card className="p-6 bg-white shadow-md">
            <h3 className="text-2xl font-medium mb-2">
              Year 2020 - Innovation
            </h3>
            <p className="text-gray-700">
              Embracing innovation, we introduced new services and digital
              solutions to enhance the guest experience.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MileStone;
