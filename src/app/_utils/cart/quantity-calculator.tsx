"use client";

import { Minus, Plus } from "lucide-react";
import { A__PATCH__CartItemRoomQuantity } from "./actions";
import { useCartContext } from "@/lib/context/cart-provider.context";
import { useState } from "react";

const QuantityCalculator = ({
  itemId,
  quantity,
}: {
  itemId: number;
  quantity: number;
}) => {
  const { updateCart } = useCartContext();
  const [pending, setPending] = useState(false);
  const buttonStyle =
    "border border-gray-300 rounded-md hover:bg-gray-100 active:scale-75 p-1 cursor-pointer";

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setPending(true);
    updateCart(itemId, type === "increment" ? quantity + 1 : quantity - 1);
    setPending(false);
  };
  return (
    <div className="flex items-center justify-start gap-2">
      <Minus
        className={buttonStyle}
        onClick={() => !pending && handleQuantityChange("decrement")}
      />
      <Plus
        className={buttonStyle}
        onClick={() => !pending && handleQuantityChange("increment")}
      />
    </div>
  );
};

export default QuantityCalculator;
