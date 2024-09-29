/** @format */

"use server";

import { instance } from "@/libs/axios";

export const getMyProducts = async () => {
  return await instance
    .get("/products/me")
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const createNewProduct = async (data: any) => {
  return await instance
    .post("/products", data)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const getProductByID = async (productID: number) => {
  return await instance
    .get(`/products/${productID}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const editProduct = async (productID: number, data: any) => {
  return await instance
    .put(`/products/${productID}`, data)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const deleteProduct = async (productID: number) => {
  return await instance
    .delete(`/products/${productID}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
