"use client";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/lib/context/cart-provider.context";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CheckoutForm from "./checkout.form";
import QuantityCalculator from "@/app/_utils/cart/quantity-calculator";

const CheckoutSection = () => {
  const { cart, addToCart } = useCartContext();
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
                Total BDT {cart?.total_price}
              </div>
            </div>
            <CheckoutForm />
          </div>
        ) : (
          <div>
            No items added! <Link href="/" className="text-primary hover:underline">Select your room</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckoutSection;
