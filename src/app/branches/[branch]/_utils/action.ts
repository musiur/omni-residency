"use client"

const BASEURL = process.env.BASEURL;

 export const A__GET__Branch = async (id: number) => {
    try {
        const response = await fetch(`${BASEURL}/segments/branches/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store"
        })
        const result = await response.json();
        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error
        }
    }
}