import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { A__GET__AllReviews } from "../reviews/_utils/action";

const Testimonial = async ({
  showReviewBtn = true,
  noOfReviews,
}: {
  showReviewBtn?: boolean,
  noOfReviews?: number
}) => {
  const response = await A__GET__AllReviews();
  const allData = response?.data?.results || [];
  const cardData = noOfReviews ? allData.slice(0, noOfReviews) : allData;
  return (
    <section className="bg-[#fafafa]">
     
          <div className="container flex flex-col items-center justify-center gap-[24px]">
            <p className="px-[16px] py-[12px] rounded-full bg-muted_orange text-primary font-medium inline-flex text-center">
              Testimonial
            </p>
            <h4 className="text-[20px] md:text-[24px] font-extrabold">
              Some of our customer reviews
            </h4>
          </div>
          {
        cardData?.length > 0 ? <>
          <div className="container grid grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-cols-3 gap-[24px] lg:gap-[48px] pt-[48px]">
            {cardData?.map((item: any, index: number) => {
              const { id, guest, rating, description } = item;
              return (
                <div
                  key={id}
                  className={clsx(
                    "p-[16px] md:p-[20px] rounded-[10px] drop-shadow-spreed bg-white",
                    {
                      "col-span-1 sm:col-span-2 min-[1100px]:col-span-1": index === 2 && cardData?.length >= 3,
                      "col-span-1": index !== 2 || cardData?.length < 3,
                    }
                  )}
                >
                  <div className="flex items-center justify-between gap-[12px]">
                    <div className="flex items-center justify-start gap-[12px]">
                      {guest ? (
                        <Image
                          src={guest?.image}
                          alt="testimonial image"
                          width={200}
                          height={200}
                          className="bg-gray-300 h-10 w-10 rounded-full"
                        />
                      ) : (
                        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
                      )}
                      <div>
                        <p className="font-bold">{guest?.name}</p>
                        {/* <p className="text-plain_gray">{guest?.address || "Address N/A"}</p> */}
                      </div>
                    </div>
                    <div className="text-plain_gray flex items-center gap-[4px]">
                      <Star className="h-4 w-4 stroke-plain_gray mt-[-2px] fill-plain_gray" />
                      {rating}
                    </div>
                  </div>
                  <div className="text-plain_gray italic pt-[16px]">{description}</div>
                </div>
              );
            })}
          </div>
          {
            showReviewBtn && <div className="flex items-center justify-center pt-[32px]">
              <Link href={'/reviews'} target="_blank">
                <Button variant={"outline"} className="border-primary">
                  View all reviews
                </Button>
              </Link>
            </div>
          }
        </> : <>
        <div className="text-center py-2 animate-pulse text-primary">No Reviews Found!</div>
        </>
      }
    </section>
  );
};

export default Testimonial;

