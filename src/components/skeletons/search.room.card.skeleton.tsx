import clsx from "clsx";
import Skeleton from "../core/atoms/skeleton.atom";

const SearchRoomCardSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((key) => {
        return (
          <section
            key={key}
            className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
          >
            <Skeleton
              className={clsx("min-h-[400px]", {
                "order-2": key % 2 === 0,
                "md:order-1": key % 2 !== 0,
              })}
            />
            <div
              className={clsx("flex flex-col gap-[20px] my-auto", {
                "order-1": key % 2 === 0,
                "md:order-2": key % 2 !== 0,
              })}
            >
              <Skeleton className="min-h-[16px] max-w-[80px]" />
              <Skeleton className="min-h-[40px] max-w-[200px]" />
              <Skeleton className="min-h-[16px]" />
              <Skeleton />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-[16px]">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <div key={item} className="max-w-[100px]">
                      <Skeleton className="min-h-[16px]" />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-[100px]">
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default SearchRoomCardSkeleton;
