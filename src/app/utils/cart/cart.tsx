"use client";

import { useEffect, useState } from "react";
import { A__POST__CreateCart } from "./actions";
import { ShoppingBagIcon } from "lucide-react";

const CLIENT__SIDE = typeof window !== "undefined";

const Cart = () => {
  const [cart, setCart] = useState<any>(null);

  const CreateNewCart = async () => {
    const result = await A__POST__CreateCart();
    if (result?.data) {
      localStorage.setItem("cart", JSON.stringify(result.data));
      setCart(result.data);
    }
  };
  useEffect(() => {
    if (CLIENT__SIDE) {
      localStorage.getItem("cart")
        ? setCart(localStorage.getItem("cart"))
        : CreateNewCart();
    }
  }, []);

  console.log(cart);
  return (
    <div className="w-16 h-16 rounded-full bg-white shadow-2xl border border-primary fixed bottom-4 right-4 z-50 flex items-center justify-center">
      <div className="relative">
        <ShoppingBagIcon className="" />
        <span className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-[10px]">
          {cart?.items?.length}
        </span>
      </div>
    </div>
  );
};

export default Cart;
