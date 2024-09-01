"use server";

const BASEURL = process.env.BASEURL;

export const A__GET__BranchList = async () => {
  try {
    const response = await fetch(`${BASEURL}/segments/branches/`, {
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

export const A__GET__FavouriteRooms = async (id:number) => {
  try {
      const response = await fetch(`${BASEURL}/segments/branches/${id}/favorite_room_categories/`, {
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
export const A__GET__NearbyTouristSpots = async (id:number) => {
  try {
      const response = await fetch(`${BASEURL}/segments/branches/${id}/tourist_spots/`, {
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