"use server"

import { cookies } from "next/headers";

const BASEURL = process.env.BASEURL;

export const A__POST__Booking = async (payload: any) => {
    try {
        const token = cookies().get("access")?.value;
        const response = await fetch(`${BASEURL}/segments/bookings/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `JWT ${token}`,
            },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error: JSON.stringify(error || "")
        }
    }
}

export const A__GET__Bookings = async () => {
    try {
        const token = cookies().get("access")?.value;
        const response = await fetch(`${BASEURL}/segments/bookings/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `JWT ${token}`,
            },
            cache: "no-store"
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error: JSON.stringify(error || "")
        }
    }
}