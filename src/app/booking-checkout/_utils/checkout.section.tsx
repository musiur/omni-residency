"use client";
import { useCartContext } from "@/lib/context/cart-provider.context";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CheckoutForm from "./checkout.form";
import QuantityCalculator from "@/app/_utils/cart/quantity-calculator";
import { useEffect, useState } from "react";
import {
  Utils___CalculateBookingPrice,
  Utils___DateDifference,
} from "@/lib/utils";

const CheckoutSection = () => {
  const { cart, addToCart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchData = localStorage.getItem("search");
      if (searchData && cart?.total_price) {
        const dates = JSON.parse(searchData);
        const checkin = new Date(dates.checkin);
        const checkout = new Date(dates.checkout);
        const countedDays = Utils___DateDifference(checkout, checkin);
        countedDays && setDays(countedDays);

        
        const calculatedPrice = Utils___CalculateBookingPrice(
          checkin,
          checkout,
          cart.total_price
        );
        calculatedPrice && setTotalPrice(calculatedPrice);
      }
    }
  }, [cart]);
  return (
    <section className="container">
      <div className="max-w-[440px] mx-auto">
        {cart?.items?.length ? (
          <div className="space-y-4">
            <h6 className="font-semibold">Available items in cart</h6>
            <div className="space-y-4">
              {cart.items.map((item: any) => {
                const { id, room_category, quantity, total_price } = item;

                const { room_name, regular_price, discounted_price } =
                  room_category;

                return (
                  <div
                    key={id}
                    className="flex items-center justify-center gap-2 md:gap-4"
                  >
                    <Image
                      src={room_category?.featured_image || "room-image"}
                      alt="room-image"
                      width={300}
                      height={300}
                      className="h-20 mb-auto w-auto rounded-md"
                    />
                    <div className="w-full flex flex-col items-start justify-center">
                      <p>{room_name}</p>
                      <p>
                        BDT <s className="text-gray-400">{regular_price}</s>{" "}
                        {discounted_price}
                        &nbsp;x&nbsp;
                        <span className="font-semibold">{quantity}</span>
                      </p>
                      <QuantityCalculator itemId={id} quantity={quantity} />
                      <div className="rounded-md bg-white/50 backdrop-blur w-full flex items-center justify-end p-1">
                        <Trash2Icon
                          className="p-[4px] border rounded-md border-gray-300 hover:stroke-red-600 hover:border-red-400 cursor-pointer"
                          onClick={() =>
                            addToCart({
                              room_category_id: room_category.id,
                              quantity: item.quantity,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="text-primary font-bold text-xl">
                {days && cart.total_price && totalPrice ? (
                  <div>
                    BDT {cart.total_price} /night x {days} days = BDT{" "}
                    {totalPrice}
                  </div>
                ) : null}
              </div>
            </div>
            <CheckoutForm />
          </div>
        ) : (
          <div>
            No items added!{" "}
            <Link href="/" className="text-primary hover:underline">
              Select your room
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckoutSection;
