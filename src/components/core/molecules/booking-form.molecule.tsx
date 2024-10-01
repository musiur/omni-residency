/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useSearchParams } from "next/navigation";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputX from "./input-x.molecule";
import AddToCart from "@/app/_utils/cart/add-to-cart";
import { useEffect, useState } from "react";
import { Utils___CalculateBookingPrice } from "@/lib/utils";
import { useCartContext } from "@/lib/context/cart-provider.context";

const BookingFormSchema = z.object({
  branch: z.string(),
  checkin: z.instanceof(Date),
  checkout: z.instanceof(Date),
  persons: z.string(),
});

type TBookingFormSchema = z.infer<typeof BookingFormSchema>;

const BookingForm = ({ price }: { price: string }) => {
  const { deleteCart, createCart } = useCartContext();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [calculatedPrice, setCalculatedPrice] = useState(parseFloat(price));

  const searchParams = useSearchParams();
  const timeNow = new Date();
  const tomorrow = new Date(timeNow);
  tomorrow.setDate(timeNow.getDate() + 1);

  // Function to get initial values
  const getInitialValues = (): TBookingFormSchema => {
    let storedSearch: Partial<{
      branch: string;
      checkin: string;
      checkout: string;
      persons: string;
    }> = {};

    // Try to get values from localStorage
    if (typeof window !== "undefined") {
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
      branch: storedSearch.branch || "1",
      checkin: storedSearch.checkin ? new Date(storedSearch.checkin) : timeNow,
      checkout: storedSearch.checkout
        ? new Date(storedSearch.checkout)
        : tomorrow,
      persons: storedSearch.persons || "1",
    };
  };

  const form = useForm<TBookingFormSchema>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: getInitialValues(),
  });

  // Update localStorage when form values change
  const updateLocalStorage = () => {
    deleteCart();
    
    const formValues = form.getValues();
    const searchData = {
      ...formValues,
      checkin: formValues.checkin.toISOString(),
      checkout: formValues.checkout.toISOString(),
    };
    localStorage.setItem("search", JSON.stringify(searchData));

    setTimeout(() => {
      
      window.location.replace(window.location.href);
    }, 1000);
  };

  const CalculatePrice = () => {
    setCalculatedPrice(
      Utils___CalculateBookingPrice(
        form.getValues("checkin"),
        form.getValues("checkout"),
        parseFloat(price)
      )
    );
  };

  if (isClient) {
    form.watch(() => {
      if (typeof window !== "undefined") {
        updateLocalStorage();
        CalculatePrice();
      }
    });
  }

  useEffect(() => {
    if (isClient) {
      CalculatePrice();
    }
  }, [isClient]);

  return (
    <div className="border p-4 md:p-8 rounded-[10px] w-full flex flex-col items-center justify-between gap-8">
      <div className="grid grid-cols-1 gap-8 w-full">
        <div className="w-full">
          <p className="inline-flex text-[16px] md:text-[20px] font-semibold text-primary pb-2 border-b-2 border-primary">
            Booking
          </p>
        </div>
        {isClient ? (
          <Form {...form}>
            <form>
              <p className="border border-primary/30 p-4 rounded-md mb-8 bg-primary/10">
                <span className="pr-2 font-semibold">
                  Changing checkin-checkout date will remove items from your
                  cart.
                </span>
                &nbsp;Newly created cart will be given to add new items for new
                checkin-checkout date.
              </p>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-1 gap-[16px]">
                  <InputX
                    form={form}
                    name="checkin"
                    label="Check in"
                    type="date"
                  />
                </div>
                <div className="grid grid-cols-1 gap-[16px]">
                  <InputX
                    form={form}
                    name="checkout"
                    label="Check out"
                    type="date"
                  />
                </div>
              </div>
            </form>
          </Form>
        ) : null}
      </div>
      <div className="w-full flex items-center justify-between gap-4 bg-primary/20 p-2 md:p-4 rounded-[10px]">
        {searchParams.get("id") ? (
          <AddToCart
            data={{
              room_category_id: parseInt(searchParams.get("id") || "0"),
              quantity: 1,
            }}
          />
        ) : null}
        <div className="flex flex-col items-end justify-end">
          <p className="font-bold text-[12px] md:text-[16px]">
            BDT&nbsp;
            {calculatedPrice}&nbsp;
          </p>
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
