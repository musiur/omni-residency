"use client";

import { ShoppingBagIcon, Trash2Icon } from "lucide-react";
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

const Cart = () => {
  const { cart, addToCart } = useCartContext();

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
        <PopoverContent className="mr-3 min-w-[280px]">
          {cart?.items?.length ? (
            <div className="space-y-4">
              <h6 className="font-semibold">Available items in cart</h6>
              <div className="space-y-2">
                {cart.items.map((item: any) => {
                  const { id, room_category, quantity, total_price } = item;

                  const { room_name, regular_price, discounted_price } =
                    room_category;

                  return (
                    <div
                      key={id}
                      className="relative flex items-center justify-start gap-2 group"
                    >
                      <div className="absolute top-0 right-0 z-50">
                        <div className="rounded-md bg-white/50 backdrop-blur flex items-center justify-between p-1 border">
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
                      </div>
                    </div>
                  );
                })}
              </div>
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
