/** @format */

"use server";

import { instance } from "@/libs/axios";

export const uploadNewImage = (data: any) => {
  return instance
    .post("/images", data)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const deleteImage = (imageID: number) => {
  return instance
    .delete(`/images/${imageID}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
