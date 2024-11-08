"use server";

const BASEURL = process.env.BASEURL;

export const A___GET__News = async () => {
    try {
        const response = await fetch(`${BASEURL}/api/news`, {
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
            message: "Failed to fetch news",
            error: error
        }
    }
}
