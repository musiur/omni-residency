import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Overview = () => {
  return (
    <section className="container" id="overview">
      <div className="flex items-center gap-10">
        <p className="px-[16px] py-[12px] rounded-full bg-muted_orange text-primary font-medium inline-flex text-center">
          DESTINATIONS
        </p>
        <Link href="/reviews" className="group flex items-center gap-2">
          <span className="text-primary/80 group-hover:text-primary font-medium">
            View All Review
          </span>
          <ChevronRight className="w-4 h-4 stroke-primary/80 group-hover:stroke-primary translate-x-0 group-hover:translate-x-[10px] transition ease-in-out duration-500" />
        </Link>
      </div>
      <h2 className="pt-[16px]">Overview</h2>
      <p className="text-plain_gray py-[10px] leading-snug  md:leading-loose pb-[40px] [&>span]:font-semibold [&>span]:px-2 [&>span]:text-black [&>span]:bg-primary/10">
        <span>Hotel Omni Residency</span> is proud to offer you a premium stay
        at two of Bangladesh&apos;s most exciting destinations —
        <span>Dhaka</span>, the vibrant capital city, and
        <span>Cox&apos;sBazaar</span>, home to the world&apos;s longest unbroken
        sea beach. Whether you&apos;re visiting for business or leisure, our
        luxurious accommodations and exceptional service make your stay
        memorable and relaxing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[40px]">
        {places.map(
          (place: {
            id: number;
            image: string;
            name: string;
            link: string;
          }) => {
            const { id, image, name, link } = place;
            return (
              <div
                className="relative p-4 md:p-8 min-h-[323px] flex items-end justify-end rounded-[10px] overflow-hidden"
                key={id}
              >
                <Image
                  src={image}
                  alt="image-of-dhaka"
                  fill
                  quality={100}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="z-[-1]"
                />
                <div className="w-full flex items-center justify-between gap-10">
                  <p className="text-white font-semibold text-[16px] md:text-[20px]">
                    {name}
                  </p>
                  {/* <Link href={link}>
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white backdrop-blur text-white font-medium"
                    >
                      See Hotel(s)
                    </Button>
                  </Link> */}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="space-y-8 py-8">
        {destinations__data.map((destination: any) => {
          const { id, title, paragraphs } = destination;
          return (
            <div key={id}>
              <h3 className="text-3xl font-semibold mb-8">{title}</h3>
              <div className="flex flex-wrap gap-4">
                {paragraphs.map((paragraph: any, index: number) => (
                  <div
                    key={index}
                    className="leading-relaxed [&>span]:font-semibold [&>span]:px-2 [&>span]:text-black [&>span]:bg-primary/10"
                  >
                    {paragraph}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Overview;

const places = [
  {
    id: 1,
    image: "/images/destination/dhaka.avif",
    name: "Dhaka",
    link: "#",
  },
  {
    id: 2,
    image: "/images/destination/coxs-bazar.avif",
    name: "Cox's Bazar",
    link: "#",
  },
];

const destinations__data = [
  {
    id: 1,
    title: <>Dhaka: The Heart of Bangladesh</>,
    paragraphs: [
      <>
        As the bustling capital and largest city of Bangladesh, Dhaka is a
        dynamic destination that blends rich history with modern culture.
        Whether you&apos;re here for business, cultural exploration, or leisure,
        Dhaka offers a wealth of experiences. Hotel Omni Residency currently has
        two premierbranchesinDhaka, located in Baridhara and Banani, two of the
        city&apos;s most prestigious neighborhoods.
      </>,
      <>
        <span>Baridhara Branch:</span> Enjoy the peaceful, diplomatic enclave of
        Baridhara, known for its security, green spaces, and proximity to major
        embassies and international organizations.
      </>,
      <>
        <span>Banani Branch:</span> Stayin the lively Banani area, surrounded by
        upscale shopping, trendy cafes, and top dining spots, offering the
        perfect mix of luxury and convenience
      </>,
      <>
        Both branches are well-positioned to allow easy access to the
        city&apos;s key attractions such as
        <span>Gulshan Lake Park, Bangladesh National Museum</span>, and the
        <span>LalbaghFort</span>. With modern amenities, fine dining, and
        excellent service, we ensure your time in Dhaka is nothing short of
        extraordinary.
      </>,
    ],
  },
  {
    id: 2,
    title: <> Cox&apos;sBazaar: Your Coastal Paradise Awaits</>,
    paragraphs: [
      <>
        Comingsoon, <span>Hotel Omni Residency</span> is expanding to the
        beautiful
        <span>coastal city of Cox&apos;s Bazaar</span>, where we are
        constructing a luxurious new branch. Known for its
        <span>stunning 120km longbeach, Cox&apos;s Bazaar</span> is the ultimate
        destination for beach lovers, nature enthusiasts, and those seeking a
        tranquil retreat by the sea.
      </>,
      <> Our upcoming branch in Cox&apos;s Bazaar will offer:</>,
      <>
        <span>Exclusive Beach front Access:</span> Wake up to breathtaking ocean
        views and direct access to the world-famous beach.
      </>,
      <>
        <span>Luxurious Accommodations:</span> Modern, spacious rooms designed
        to offer maximum comfort and relaxation, with the beach as your
        backdrop.
      </>,
      <>
        <span>Premium Amenities:</span> Fromastate-of-the-art gym to fine dining
        restaurants and an inviting swimming pool, our new branch will ensure a
        lavish stay by the sea.
      </>,
      <>
        This branch is set to elevate the hospitality experience in Cox&apos;s
        Bazaar, making it the perfect escape for both domestic and international
        travelers. Whether you&apos;re looking to relax on the beach, explore
        the nearby <span>Himchari National Park</span>, or indulge in the
        vibrant local culture, our Cox&apos;s Bazaar branch will be the ideal
        destination
      </>,
    ],
  },
  {
    id: 3,
    title: <>Discover Bangladesh with Hotel Omni Residency</>,
    paragraphs: [
      <>
        Whether you&apos;re exploring the bustling streets of Dhaka or relaxing
        on the golden sands of Cox&apos;s Bazaar,
        <span>Hotel Omni Residency</span> provides the perfect base for your
        journey. Stay with us and experience the best that Bangladesh has to
        offer, paired with our signature 5-star service and exceptional
        accommodations.
      </>,
      <>
        <span>Stay tuned for our grand opening in Cox&apos;s Bazaar!</span>
      </>,
    ],
  },
];
