"use server";

const BASEURL = process.env.BASEURL;

export const A__SearchRooms = async (data: {
  branch: string;
  check_in: string;
  check_out: string;
  adults: string;
}) => {
  try {
    const apiEndpoint = `${BASEURL}/segments/branches/${data?.branch}/room_categories/?check_in=${data?.check_in
      }&check_out=${data?.check_out}&adults=${data?.adults}`

    const response = await fetch(apiEndpoint,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
