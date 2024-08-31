import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Grand Opening",
      date: "August 10, 2024",
      summary:
        "We are excited to announce the grand opening of our newest hotel in the heart of downtown.",
      image: "/images/branches/hotel1.avif",
    },
    {
      id: 2,
      title: "New Dining Experience",
      date: "July 15, 2024",
      summary:
        "Discover our newly renovated restaurant, offering a fusion of global cuisines.",
      image: "/images/branches/hotel2.avif",
    },
    {
      id: 3,
      title: "Sustainability Initiatives",
      date: "June 20, 2024",
      summary:
        "We are committed to sustainability with our new eco-friendly initiatives.",
      image: "/images/branches/hotel3.avif",
    },
  ];
  return (
    <section className="container section">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {newsItems.map((item) => (
          <Card key={item.id} className="bg-white shadow-md px-0">
            <CardContent className="p-0">
              <div className="relative w-full h-[240px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center rounded-t-lg mb-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                <p className="text-gray-700 mb-4">{item.summary}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))} */}
        Comming soon...
      </div>
    </section>
  );
};

export default News;
