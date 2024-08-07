"use client";

import { ShoppingBagIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartContext } from "@/lib/context/cart-provider.context";

// const CLIENT__SIDE = typeof window !== "undefined";

const Cart = () => {
  const { cart } = useCartContext();

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
        <PopoverContent>
          {cart?.items?.length ? <div>Items</div> : <div>No items added!</div>}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Cart;
