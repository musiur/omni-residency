"use client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputX from "./input-x.molecule";
import { useEffect } from "react";
import AddToCart from "@/app/_utils/cart/add-to-cart";

const BookingFormSchema = z.object({
  branch: z.string(),
  checkin: z.instanceof(Date),
  checkout: z.instanceof(Date),
  persons: z.string(),
});

type TBookingFormSchema = z.infer<typeof BookingFormSchema>;

const BookingForm = ({ price, roomCount }: { price: string, roomCount:number }) => {
  const searchParams = useSearchParams();
  const timeNow = new Date();

  const roomID = searchParams.get("id");
  const parsedRoomID = roomID ? parseInt(roomID, 10) : undefined;

  // Function to get initial values
  const getInitialValues = (): TBookingFormSchema => {
    let storedSearch: Partial<{
      branch: string;
      checkin: string;
      checkout: string;
      persons: string;
    }> = {};

    // Try to get values from localStorage
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem("search");
      if (storedData) {
        try {
          storedSearch = JSON.parse(storedData);
        } catch (error) {
          console.error("Error parsing stored search data:", error);
        }
      }
    }

    // If branch is not in localStorage, get it from URL
    if (!storedSearch.branch) {
      const branchFromUrl = searchParams.get("branch");
      if (branchFromUrl) {
        storedSearch.branch = branchFromUrl;
      }
    }

    return {
      branch: storedSearch.branch || '1',
      checkin: storedSearch.checkin
        ? new Date(storedSearch.checkin)
        : timeNow,
      checkout: storedSearch.checkout
        ? new Date(storedSearch.checkout)
        : timeNow,
      persons: storedSearch.persons || "1",
    };
  };

  const form = useForm<TBookingFormSchema>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: getInitialValues(),
  });

  // Watch for changes in form values
  const watchedValues = form.watch();

  // Update localStorage when form values change
  useEffect(() => {
    const updateLocalStorage = () => {
      const searchData = {
        ...watchedValues,
        checkin: watchedValues.checkin.toISOString(),
        checkout: watchedValues.checkout.toISOString(),
      };
      localStorage.setItem("search", JSON.stringify(searchData));
    };

    updateLocalStorage();
  }, [watchedValues]);

  return (
    <div className="border p-4 md:p-8 rounded-[10px] flex flex-col items-center justify-between gap-8">
      <div className="grid grid-cols-1 gap-8">
        <div className="w-full">
          <p className="inline-flex text-[16px] md:text-[20px] font-semibold text-primary pb-2 border-b-2 border-primary">
            Booking
          </p>
        </div>
        <Form {...form}>
          <form>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="grid grid-cols-1 gap-[16px]">
                <InputX
                  form={form}
                  name="checkin"
                  label="Check in"
                  type="date" />
              </div>
              <div className="grid grid-cols-1 gap-[16px]">
                <InputX
                  form={form}
                  name="checkout"
                  label="Check out"
                  type="date"
                />
              </div>
              <div className="grid grid-cols-1 gap-[16px]">
                <InputX
                  form={form}
                  name="persons"
                  label="Persons"
                  type="select"
                  options={Data__PersonTypes}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full flex items-center justify-between gap-4 bg-primary/20 p-2 md:p-4 rounded-[10px]">
        {parsedRoomID !== undefined ? (
          <AddToCart data={{ room_category_id: parsedRoomID, quantity: 1 }} />
        ) : (
          <Button>Book now</Button>
        )}
        <div className="flex flex-col items-end justify-end">
          <p className="font-bold text-[12px] md:text-[16px]">Total {price}</p>
          {/* <p>Available rooms {roomCount || "N/A"}  </p> */}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

const Data__PersonTypes = [
  { label: "1 Adult", value: "1" },
  { label: "2 Adult", value: "2" },
  { label: "3 Adult", value: "3" },
  { label: "4 Adult", value: "4" },
  { label: "5 Adult", value: "5" },
  { label: "6 Adult", value: "6" },
];