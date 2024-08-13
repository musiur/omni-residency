"use server"

/**
 * 
 * {
 *  success: boolean,
 * message: string,
 * data: [] | {},
 * token
 * 
 * }
 * 
 */

import { cookies } from "next/headers";
import { TChangeFormSchema, TLoginFormSchema, TRegisterFormSchema, TResetFormSchema } from "./types/types";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export const A__POST__Register = async (data: TRegisterFormSchema) => {
    try {
        
        const body = JSON.stringify(data);
        
        const response = await fetch(`${BASEURL}/auth/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body,
        })
        const result = await response.json()
        
        return result;
    } catch (error) {
        
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export const A__POST__AccountVerification = async (data: { uid: string, token: string }) => {
    try {
        const body = JSON.stringify(data);
        
        const response = await fetch(`${BASEURL}/auth/users/activation/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body,
        })
        
        const result = await response.json()
        return result;
    } catch (error) {
        
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const A__POST__ForgotPassword = async (data: { email: string }) => {
    try {
        const body = JSON.stringify(data);
        
        const response = await fetch(`${BASEURL}/auth/users/reset_password/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body,
        })
        
        const result = await response.json()
        return result;
    } catch (error) {
        
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}


export const A__POST__ResetPassword = async (data: {
    uid: string,
    token: string,
    new_password: string,
    re_new_password: string
}) => {
    try {
        const body = JSON.stringify(data);
        
        const response = await fetch(`${BASEURL}/auth/users/reset_password_confirm/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body,
        })
        
        const result = await response.json()
        return result;
    } catch (error) {
        
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const A__POST__ChangePassword = async (data: TChangeFormSchema) => {
    try {
        const body = JSON.stringify(data);
        const token = cookies().get("access")?.value;
        const response = await fetch(`${BASEURL}/auth/users/set_password/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": `JWT ${token}`,
            },
            body,
        })
        
        const result = await response.json()
        return result;
    } catch (error) {
        
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
        
        return {
            success: result?.refresh ? true : false,
            message: result?.refresh ? "Login Successful" : result.detail
        };
    } catch (error) {
        
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}


export const A__GET__HotelList = async () => {
    try {
        const response = await fetch(`${BASEURL}/segments/offers/`, {
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
            message: "Something went wrong"
        }
    }
}