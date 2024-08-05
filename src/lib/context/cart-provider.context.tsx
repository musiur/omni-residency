"use client";

import {
  A__DELETE__Cart,
  A__DELETE__CartItem,
  A__POST__AddToCart,
  A__POST__CreateCart,
} from "@/app/utils/cart/actions";
import { T__CartItemAdder } from "@/app/utils/cart/types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the types
type RoomCategory = {
  id: number;
  room_name: string;
  regular_price: string;
  discounted_price: number;
};

type CartItemDetail = {
  id: number;
  room_category: RoomCategory;
  quantity: number;
  total_price: number;
};

type CartItem = {
  id: string;
  items: CartItemDetail[];
  quantity: number;
  total_price: number;
  created_at: string;
};

type CartContextType = {
  cart: CartItem | null;
  createCart: () => void;
  deleteCart: () => void;
  addToCart: (item: T__CartItemAdder) => void;
  updateCart: (itemId: number, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
};

// Create the context
const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem | null>(null);

  useEffect(() => {
    // Load cart from local storage on mount
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      createCart();
    }
  }, []);

  useEffect(() => {
    // Store cart in local storage on cart change
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const createCart = async () => {
    // Call your API to create a new cart
    const result = await A__POST__CreateCart();
    const newCart = result?.data;
    if (newCart) setCart(newCart);
  };

  const deleteCart = async () => {
    // Call your API to delete the cart
    if (cart?.id) {
      const result = await A__DELETE__Cart(cart.id);
      if (result?.success) {
        setCart(null);
        localStorage.removeItem("cart");
      }
    }
  };

  const addToCart = async (payload: T__CartItemAdder) => {
    // Call your API to add item to the cart
    if (cart) {
      const alreadyExists = cart?.items?.find(
        (item: any) => item?.room_category?.id === payload?.room_category_id
      );
      console.log("Clicked", alreadyExists);
      const result = alreadyExists
        ? await A__DELETE__CartItem(cart.id, alreadyExists?.id)
        : await A__POST__AddToCart(cart.id, payload);
      const data = result?.data;
      console.log({ result });
      if (result?.success) {
        setCart((prevCart) => {
          if (prevCart) {
            const deletedItem = prevCart?.items?.filter(
              (item: any) =>
                item?.room_category?.id === payload.room_category_id
            )[0];
            return {
              ...prevCart,
              items: alreadyExists
                ? prevCart?.items?.filter(
                    (item: any) =>
                      item?.room_category?.id === payload.room_category_id
                  )
                : [...prevCart.items, data],
              quantity: alreadyExists
                ? prevCart.quantity - deletedItem.quantity
                : prevCart.quantity + data.quantity,
              total_price: alreadyExists
                ? prevCart.total_price - deletedItem.quantity
                : prevCart.total_price + data.total_price,
            };
          }
          return prevCart;
        });
      }
    }
  };

  const updateCart = async (itemId: number, quantity: number) => {
    // Call your API to update item quantity in the cart
    if (cart) {
      await fetch(`/api/cart/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({ quantity }),
        headers: { "Content-Type": "application/json" },
      });

      setCart((prevCart) => {
        if (prevCart) {
          return {
            ...prevCart,
            items: prevCart.items.map((item) =>
              item.id === itemId ? { ...item, quantity } : item
            ),
            quantity: prevCart.items.reduce(
              (acc, item) =>
                acc + (item.id === itemId ? quantity : item.quantity),
              0
            ),
            total_price: prevCart.items.reduce(
              (acc, item) =>
                acc +
                (item.id === itemId
                  ? item.room_category.discounted_price * quantity
                  : item.total_price),
              0
            ),
          };
        }
        return prevCart;
      });
    }
  };

  const removeFromCart = async (itemId: number) => {
    // Call your API to remove item from the cart
    if (cart) {
      await fetch(`/api/cart/${itemId}`, {
        method: "DELETE",
      });

      setCart((prevCart) => {
        if (prevCart) {
          const updatedItems = prevCart.items.filter(
            (item) => item.id !== itemId
          );
          return {
            ...prevCart,
            items: updatedItems,
            quantity: updatedItems.reduce(
              (acc, item) => acc + item.quantity,
              0
            ),
            total_price: updatedItems.reduce(
              (acc, item) => acc + item.total_price,
              0
            ),
          };
        }
        return prevCart;
      });
    }
  };

  const clearCart = async () => {
    // Call your API to clear the cart
    await fetch("/api/cart", {
      method: "DELETE",
    });

    setCart(null);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        createCart,
        deleteCart,
        addToCart,
        updateCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
