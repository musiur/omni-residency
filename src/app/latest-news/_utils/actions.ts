"use server";

const BASEURL = process.env.BASEURL;

export const A___GET__News = async () => {
    try {
        const response = await fetch(`${BASEURL}/segments/stories/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // cache: "no-store",
            next: {
                revalidate: 3600
            }
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

export const A___GET__NewsBySlug = async (slug: string) => {
    try {
        const response = await fetch(`${BASEURL}/segments/stories/${slug}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
            // next: {
            //     revalidate: 3600
            // }
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
