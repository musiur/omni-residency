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

  return (
    <Button onClick={() => addToCart(data)} disabled={loading}>
      {cart?.items?.find(
        (item: any) => item?.room_category?.id === data?.room_category_id
      )
        ? loading ? "Removing..." : "Remove from cart"
        : loading ? "Adding..." : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
