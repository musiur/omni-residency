"use server";

const BASEURL = process.env.BASEURL;

export const A__GET__GymList = async () => {
  try {
    const response = await fetch(`${BASEURL}/refuel/gyms/`, {
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

export const A__POST__RequestGymMembership = async (data: any) => {
  try {
    const response = await fetch(`${BASEURL}/refuel/gyms/${data?.branchid}/memberships/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
