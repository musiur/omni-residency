"use client";

import {
  A__DELETE__Cart,
  A__DELETE__CartItem,
  A__GET__Cart,
  A__PATCH__Cart,
  A__PATCH__CartItemRoomQuantity,
  A__POST__AddToCart,
  A__POST__CreateCart,
} from "@/app/_utils/cart/actions";
import { T__CartItemAdder } from "@/app/_utils/cart/types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the types
export type RoomCategory = {
  id: number;
  room_name: string;
  regular_price: string;
  discounted_price: number;
};

export type CartItemDetail = {
  id: number;
  room_category: RoomCategory;
  quantity: number;
  total_price: number;
  days: number;
};

export type CartItem = {
  id: string;
  items: CartItemDetail[];
  quantity: number;
  total_price: number;
  created_at: string;
  check_in: string;
  check_out: string;
};

type CartContextType = {
  cart: CartItem | null;
  createCart: (token?: string) => void;
  deleteCart: (token?: string) => void;
  addToCart: (item: T__CartItemAdder, token?: string) => void;
  updateCartItem: (itemId: number, quantity: number, token?: string) => void;
  removeFromCart: (itemId: number, token?: string) => void;
  updateCart: (check_in: string, check_out: string) => void;
  clearCart: () => void;
  loading: {
    token: string;
    status: boolean;
  };
  setLoading: Function;
};

// Create the context
const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem | null>(null);
  const [loading, setLoading] = useState<{ token: string; status: boolean }>({
    token: "na",
    status: false,
  });

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

  const createCart = async (token?: string) => {
    setLoading({
      token: token || "createCart",
      status: true,
    });
    // Call your API to create a new cart
    const result = await A__POST__CreateCart();
    setLoading({
      token: "createCart",
      status: false,
    });
    const newCart = result?.data;
    if (newCart) setCart(newCart);
  };

  const updateCart = async (check_in: string, check_out: string) => {
    if (cart) {
      setLoading({
        token: "updateCart",
        status: true,
      });
      const result = await A__PATCH__Cart(cart.id, check_in, check_out);
      setLoading({
        token: "updateCart",
        status: false,
      });
      if (result?.success) {
        setCart(result?.data);
      }
    }
  };

  const deleteCart = async (token?: string) => {
    // Call your API to delete the cart
    if (cart?.id) {
      setLoading({
        token: token || "deleteCart",
        status: false,
      });
      const result = await A__DELETE__Cart(cart.id);

      if (result?.success) {
        setCart(null);
        localStorage.removeItem("cart");
        
      }
      setLoading({
        token: "na",
        status: false,
      });
    }
  };

  const addToCart = async (payload: T__CartItemAdder, token?: string) => {
    // Call your API to add item to the cart
    if (cart) {
      const alreadyExists = cart?.items?.find(
        (item: any) => item?.room_category?.id === payload?.room_category_id
      );

      setLoading({
        token: token || "addToCart",
        status: true,
      });
      const result = alreadyExists
        ? await A__DELETE__CartItem(cart.id, alreadyExists?.id)
        : await A__POST__AddToCart(cart.id, payload);

      if (result?.success) {
        const cartFromServer = await A__GET__Cart(cart.id);

        if (cartFromServer?.success) {
          setCart(cartFromServer.data);
        }
      }
      setLoading({
        token: "na",
        status: false,
      });
    }
  };

  const updateCartItem = async (
    itemId: any,
    quantity: number,
    token?: string
  ) => {
    // Call your API to update item quantity in the cart
    if (cart) {
      setLoading({
        token: token || "updateCartItem",
        status: true,
      });
      const result = await A__PATCH__CartItemRoomQuantity(
        cart.id,
        itemId,
        quantity
      );

      if (result?.success) {
        const cartFromServer = await A__GET__Cart(cart.id);
        if (cartFromServer?.success) {
          setCart(cartFromServer.data);
        }
      }

      setLoading({
        token: "na",
        status: false,
      });
    }
  };

  const removeFromCart = async (itemId: number) => {
    // Call your API to remove item from the cart
    if (cart) {
      setLoading({
        token: "removeFromCart",
        status: true,
      });
      const result = await A__DELETE__CartItem(cart.id, itemId);

      if (result?.success) {
        const cartFromServer = await A__GET__Cart(cart.id);
        if (cartFromServer?.success) {
          setCart(cartFromServer.data);
        }
      }

      setLoading({
        token: "na",
        status: false,
      });
    }
  };

  const clearCart = () => {
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
        updateCartItem,
        removeFromCart,
        clearCart,
        updateCart,
        loading,
        setLoading,
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
