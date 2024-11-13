import { Fragment } from "react";
import { A___GET__NewsBySlug } from "../_utils/actions";
import HeroSection from "../_utils/hero.section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { data } = await A___GET__NewsBySlug(params.slug);
  const markup = { __html: data?.description };

  return (
    <Fragment>
      <HeroSection title={data?.header || params.slug} />
      {data ? (
        <div className="container">
          <div className="max-w-4xl mx-auto py-16 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">
                {data?.title}
                <div className="flex items-center gap-2 py-2 text-gray-400 font-normal">
                  <p className="text-sm md:text-base font-semibold text-gray-900">{data?.author}</p>|
                  <p className="text-sm md:text-base">
                    Published on {data?.created_at?.split("T")[0]}
                  </p>
                  |
                  <p className="text-sm md:text-base">
                    Last updated on {data?.last_update?.split("T")[0]}
                  </p>
                </div>
              </h1>
            </div>
            <Image
              src={data?.image}
              alt="blog-image"
              width={1000}
              height={600}
              className="w-full max-h-[50vh] rounded-xl"
            />
            <article>
              <div dangerouslySetInnerHTML={markup} className="article"></div>
            </article>
            <div className="py-16 flex items-center justify-center">
              <Link href="/latest-news">
                <Button variant="outline">Read others news</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>No data found!</div>
      )}
    </Fragment>
  );
};

export default Page;
