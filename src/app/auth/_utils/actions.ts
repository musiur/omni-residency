"use server"

import { cookies } from "next/headers";
import { TLoginFormSchema, TRegisterFormSchema } from "./types/types";
const BASEURL = process.env.BASEURL;

export const A__POST__Register = async (data: TRegisterFormSchema) => {
    try {
        console.log(data)
        const body = JSON.stringify(data);
        console.log(body)
        const response = await fetch(`${BASEURL}/auth/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body,
        })
        console.log(response)
        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const A__POST__Login = async (data: TLoginFormSchema) => {
    try {
        const response = await fetch(`${BASEURL}/auth/jwt/create`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const result = await response.json();

        if (result?.refresh) {
            cookies().set("refresh", result.refresh);
            cookies().set("access", result.access);
        }
        console.log(result)
        return {
            success: true,
            message: "Login successful",
            data: result
        };
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}