"use server";

const BASEURL = process.env.BASEURL;

export const A__SearchRooms = async (data: {
  branch: string;
  check_in: string;
  check_out: string;
  adults: string;
}) => {
  try {
    const response = await fetch(
      `${BASEURL}/segments/branches/${data?.branch}/room_categories/?check_in=${
        data?.check_in
      }&check_out=${data?.check_out}&adults=${4}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const result = await response.json();
    console.log("search result", result);
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};
