"use server";

import { T__CartItemAdder } from "./types";

const BASEURL = process.env.BASEURL;

export const A__POST__CreateCart = async () => {
  try {
    const response = await fetch(`${BASEURL}/segments/carts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Response not in JSON format");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
      error
    };
  }
};

export const A__GET__Cart = async (id: string) => {
  try {
    const response = await fetch(`${BASEURL}/segments/carts/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

export const A__PATCH__Cart = async (id: string, check_in: string, check_out: string) => {
  try {
    const response = await fetch(`${BASEURL}/segments/carts/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ check_in, check_out }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Someting went wrong!",
    };
  }
};

export const A__GET__CartItem = async (id: string, itemId: number) => {
  try {
    const response = await fetch(
      `${BASEURL}/segments/carts/${id}/cartitems/${itemId}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        cache: "no-store",
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

export const A__GET__CartItems = async (id: string) => {
  try {
    const response = await fetch(`${BASEURL}/segments/carts/${id}/cartitems`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

export const A__DELETE__Cart = async (id: string) => {
  try {
    const response = await fetch(`${BASEURL}/segments/carts/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const result = await response.json();

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

export const A__POST__AddToCart = async (
  id: string,
  data: T__CartItemAdder
) => {
  try {
    const response = await fetch(`${BASEURL}/segments/carts/${id}/cartitems/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

export const A__PATCH__CartItemRoomQuantity = async (
  cartId: string,
  cartItemId: string,
  quantity: number
) => {
  try {
    const response = await fetch(
      `${BASEURL}/segments/carts/${cartId}/cartitems/${cartItemId}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ quantity }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};

export const A__DELETE__CartItem = async (
  cartId: string,
  cartItemId: number
) => {
  try {
    const response = await fetch(
      `${BASEURL}/segments/carts/${cartId}/cartitems/${cartItemId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const result = await response.json();

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};
