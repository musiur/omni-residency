/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import {
  A__DELETE__CartItem,
  A__GET__CartItem,
  A__POST__AddToCart,
} from "./actions";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CLIENT__SIDE = typeof window !== "undefined";
const AddToCart = ({
  data = {
    quantity: 1,
    room_category_id: 1,
  },
}: {
  data: {
    room_category_id: number;
    quantity: number;
  };
}) => {
  const [added, setAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const GetCartData = async () => {
    if (CLIENT__SIDE) {
      const cartData: any = localStorage.getItem("cart");
      const parsedCartData = JSON.parse(cartData);
      const thisItem = parsedCartData?.items?.filter(
        (item: any) => item.room_category.id === data.room_category_id
      )[0];
      console.log({ thisItem }, "<--");
      if (parsedCartData?.id && thisItem?.id) {
        const result = await A__GET__CartItem(
          parsedCartData.id, // cart id
          thisItem.id // item id
        );
        if (result?.data?.id) {
          setAdded(true);
        }
      }
    }
  };
  useEffect(() => {
    GetCartData();
  }, [CLIENT__SIDE]);

  const handleAddToCart = async () => {
    setIsLoading(true);
    if (CLIENT__SIDE) {
      const cartData: any = localStorage.getItem("cart");
      const parsedCartData = JSON.parse(cartData);
      if (parsedCartData?.id) {
        if (
          !parsedCartData?.items?.find(
            (item: any) => item.room_category.id === data.room_category_id
          )
        ) {
          const result = await A__POST__AddToCart(
            parsedCartData.id, // cart id
            data,
            pathname
          );

          if (result?.data) {
            localStorage.setItem(
              "cart",
              JSON.stringify({
                ...parsedCartData,
                items: [...parsedCartData.items, result.data],
              })
            );
            setAdded(true);
          }
        } else {
          const thisItem = parsedCartData?.items?.filter(
            (item: any) => item.room_category.id === data.room_category_id
          )[0];
          const result = await A__DELETE__CartItem(
            parsedCartData.id, // cart id
            thisItem.id,
            pathname
          );
          //   console.log("Clicked", result);
          if (result?.data) {
            localStorage.setItem(
              "cart",
              JSON.stringify({
                ...parsedCartData,
                items: parsedCartData?.item?.filter(
                  (item: any) => item.room_category.id !== data.room_category_id
                ),
              })
            );
            setAdded(false);
          }
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <Button onClick={handleAddToCart}>
      {isLoading ? "Processing" : added ? "Remove from cart" : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
