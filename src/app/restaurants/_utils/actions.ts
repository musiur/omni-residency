"use server";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export const A__GET__RestaurentList = async () => {
  try {
    const response = await fetch(`${BASEURL}/refuel/restaurants/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
