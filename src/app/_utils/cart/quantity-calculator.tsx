"use client";

import { Minus, Plus, Sun } from "lucide-react";
import { A__PATCH__CartItemRoomQuantity } from "./actions";
import { useCartContext } from "@/lib/context/cart-provider.context";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";

const QuantityCalculator = ({
  itemId,
  quantity,
}: {
  itemId: number;
  quantity: number;
}) => {
  const { updateCartItem, loading } = useCartContext();
  const [uniqueToken, setUniqueToken] = useState("")
  const buttonStyle =
    "border border-gray-300 rounded-md hover:bg-gray-100 active:scale-75 p-1 cursor-pointer";

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setUniqueToken(type + itemId);
    updateCartItem(itemId, type === "increment" ? quantity + 1 : quantity - 1, type + itemId);
  };
  return (
    <div className="flex items-center justify-start gap-2">
      {
        loading.status && loading.token === uniqueToken && loading.token?.includes("decrement") ? <Sun className={cn(buttonStyle, "animate-spin")} /> :
          <Minus
            className={buttonStyle}
            onClick={() => !loading.status && handleQuantityChange("decrement")}
          />
      }
      {
        loading.status && loading.token === uniqueToken && loading.token?.includes("increment") ? <Sun className={cn(buttonStyle, "animate-spin")} /> :
          <Plus
            className={buttonStyle}
            onClick={() => !loading.status && handleQuantityChange("increment")}
          />
      }
    </div>
  );
};

export default QuantityCalculator;
