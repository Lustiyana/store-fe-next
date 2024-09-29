/** @format */

"use server";

import { instance } from "@/libs/axios";

export const getAllCategories = () => {
  return instance
    .get("/categories")
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};
