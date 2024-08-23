"use client";

import { Minus, Plus } from "lucide-react";

const QuantityCalculator = () => {
  const buttonStyle =
    "border border-gray-300 rounded-md hover:bg-gray-100 active:scale-75 p-1 cursor-pointer";
  return (
    <div className="flex items-center justify-start gap-2">
      <Minus className={buttonStyle} />
      <Plus className={buttonStyle} />
    </div>
  );
};

export default QuantityCalculator;
