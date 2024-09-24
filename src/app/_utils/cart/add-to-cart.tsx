"use client";

import { Button } from "@/components/ui/button";
import { useCartContext } from "@/lib/context/cart-provider.context";

// const CLIENT__SIDE = typeof window !== "undefined";
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
  const { cart, addToCart, loading } = useCartContext();
  const uniqueToken = "addToCart" + data?.room_category_id.toString();

  return (
    <Button onClick={() => addToCart(data, uniqueToken)} disabled={loading.status}>
      {cart?.items?.find(
        (item: any) => item?.room_category?.id === data?.room_category_id
      )
        ? loading.status && loading.token === uniqueToken ? "Removing..." : "Remove from cart"
        : loading.status && loading.token === uniqueToken ? "Adding..." : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
