"use client";

import { ShoppingBagIcon, Sun, Trash2Icon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartContext } from "@/lib/context/cart-provider.context";
import Image from "next/image";
import QuantityCalculator from "./quantity-calculator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Utils___CalculateBookingPrice,
  Utils___DateDifference,
} from "@/lib/utils";

const Cart = () => {
  const { cart, addToCart, loading } = useCartContext();
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
    <div className="w-16 h-16 rounded-full bg-white shadow-2xl border border-primary fixed bottom-4 right-4 z-50 flex items-center justify-center">
      <Popover>
        <PopoverTrigger>
          <div className="relative">
            <ShoppingBagIcon className="" />
            <span className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-[10px]">
              {cart?.items?.length || 0}
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="mr-3 min-w-[280px] shadow-2xl border-2 border-primary">
          {cart?.items?.length ? (
            <div className="space-y-4">
              <h6 className="font-semibold">Available items in cart</h6>
              <div className="space-y-2">
                {cart.items.map((item: any) => {
                  const { id, room_category, quantity, total_price } = item;

                  const { room_name, regular_price, discounted_price } =
                    room_category;

                  const uniqueToken =
                    item?.id?.toString() +
                    room_category?.id?.toString() +
                    "remove";

                  return (
                    <div
                      key={id}
                      className="relative flex items-center justify-start gap-2 group"
                    >
                      <div className="absolute top-0 right-0 z-50">
                        <div className="rounded-md bg-white/50 backdrop-blur flex items-center justify-between p-1">
                          {loading.status && loading.token === uniqueToken ? (
                            <Sun className="p-[4px] border rounded-full border-gray-300 hover:stroke-red-600 hover:border-red-400 cursor-pointer animate-spin" />
                          ) : (
                            <Trash2Icon
                              className="p-[4px] border rounded-md border-gray-300 hover:stroke-red-600 hover:border-red-400 cursor-pointer"
                              onClick={() =>
                                addToCart(
                                  {
                                    room_category_id: room_category.id,
                                    quantity: item.quantity,
                                  },
                                  uniqueToken
                                )
                              }
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <Image
                          src={room_category?.featured_image || "room-image"}
                          alt="room-image"
                          width={300}
                          height={300}
                          className="w-16 h-16 rounded-md"
                        />
                      </div>
                      <div>
                        <p>{room_name}</p>
                        <p></p>
                        <p>
                          BDT <s className="text-gray-400">{regular_price}</s>{" "}
                          {discounted_price}
                          &nbsp;x&nbsp;
                          <span className="font-semibold">{quantity}</span>
                        </p>
                        <QuantityCalculator itemId={id} quantity={quantity} />
                      </div>
                    </div>
                  );
                })}
              </div>
              {days && cart.total_price && totalPrice ? (
                <div>
                  BDT {cart.total_price} /night x {days} days = BDT {totalPrice}
                </div>
              ) : null}
              <div>
                <Link href="/booking-checkout">
                  <Button>Checkout</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>No items added!</div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Cart;
