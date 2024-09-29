/** @format */
"use server";

import { instance } from "@/libs/axios";
import { cookies } from "next/headers";

type RegisterTypes = {
  fullname: string;
  email: string;
  password: string;
  confirm_password: string;
  phone_number: string;
};

export async function registerUser(data: RegisterTypes) {
  try {
    const response = await instance({
      url: "/register",
      method: "POST",
      data,
    });
    return response.data;
  } catch (err: any) {
    const errorData = err?.response?.data || {
      message: "An unknown error occurred",
    };

    throw new Error(
      errorData.message || "An error occurred during registration"
    );
  }
}

type LoginTypes = {
  email: string;
  password: string;
};
export async function loginUser(data: LoginTypes) {
  try {
    const response = await instance({
      url: "/login",
      method: "POST",
      data,
    });
    const cookiesStore = cookies();
    cookiesStore.set("token", response.data.data.token);
    return response.data;
  } catch (err: any) {
    const errorData = err?.response?.data || {
      message: "An unknown error occurred",
    };

    throw new Error(
      errorData.message || "An error occurred during registration"
    );
  }
}
