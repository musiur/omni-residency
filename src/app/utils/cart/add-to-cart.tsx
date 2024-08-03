/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";

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
  const handleAddToCart = async () => {};

  return <Button onClick={handleAddToCart}>Add to cart</Button>;
};

export default AddToCart;
