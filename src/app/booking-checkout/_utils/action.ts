"use server";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export const A__GET__RoomDetails = async (data: {
  branch_id: string;
  room_id: string;
}) => {
  try {
    const apiEndpoint = `${BASEURL}/segments/branches/${data?.branch_id}/room_categories/${data?.room_id}/`
    // console.log("Search API endpoint :: ", apiEndpoint)
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
