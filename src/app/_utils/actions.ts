"use server"

import { cookies } from "next/headers"

export const CSR__GET__Cookie = async (name: string) => {
    return cookies().get(name)?.value || null
}

export const CSR__SET__Cookie = async (name: string, value: string) => {
    cookies().set(name, value)
    return "Created successfully"
}

export const CSR__DELETE__Cookie = async (name: string) => {
    return cookies().delete(name)
}