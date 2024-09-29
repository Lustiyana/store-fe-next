/** @format */
"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:8080",
});

instance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (token?.value) {
      config.headers["Authorization"] = `Bearer ${token.value}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
