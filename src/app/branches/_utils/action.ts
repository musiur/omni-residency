"use server";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

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
