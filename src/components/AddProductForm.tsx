/** @format */
"use client";

import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import ImageInput from "./ImageInput";
import Card from "./Card";
import { useForm } from "react-hook-form";
import SelectInput from "./SelectInput";
import { getAllCategories } from "@/actions/categoryActions";
import { CategoryTypes } from "@/types/data";
import { toast } from "react-toastify";
import { createNewProduct } from "@/actions/productActions";
import { useRouter } from "next/navigation";

type FormData = {
  productName: string;
  price: number;
  category: string;
  description: string;
};

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [categoriesOption, setCategoriesOption] = useState<
    { label: string; value: string }[]
  >([]);
  const [images, setImages] = useState<File[] | null>(null);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("product_name", data.productName);
    formData.append("price", data.price.toString());
    formData.append("category_id", data.category);
    formData.append("description", data.description);

    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append("images", image);
      });
    } else {
      toast.error("At least one image is required.");
      return;
    }

    try {
      const res = await createNewProduct(formData);
      toast.success(res.message);
      router.replace("/my-products");
    } catch (error: any) {
      toast.error(
        error?.message || "An error occurred while creating the product."
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllCategories();
        const options = res.data.map((item: CategoryTypes) => ({
          label: item.category_name,
          value: item.category_id,
        }));
        setCategoriesOption(options);
      } catch (error: any) {
        toast.error(
          error?.message || "An error occurred while fetching categories."
        );
      }
    };

    fetchData();
  }, []);

  const handleChangeImages = (e: File[]) => {
    setImages(e);
  };

  return (
    <form className="flex flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>
      <Card title="Add New Product">
        <div className="grid grid-cols-2 gap-8">
          <TextInput
            placeholder="Insert product name"
            label="Product Name"
            {...register("productName", {
              required: "Product Name is required",
            })}
            error={errors.productName?.message}
          />
          <TextInput
            placeholder="Insert product price"
            label="Price"
            type="number"
            {...register("price", {
              required: "Price is required",
            })}
            error={errors.price?.message}
          />
          <SelectInput
            className="col-span-2"
            placeholder="Select category product"
            label="Category"
            options={categoriesOption}
            {...register("category", {
              required: "Category is required",
            })}
            error={errors.category?.message}
          />
          <Textarea
            label="Description"
            className="col-span-2"
            placeholder="Insert product description"
            {...register("description", {
              required: "Description is required",
            })}
            error={errors.description?.message}
          />
          <ImageInput className="col-span-2" onChange={handleChangeImages} />
        </div>
      </Card>
      <button className="btn btn-accent w-full" type="submit">
        Create New Product
      </button>
    </form>
  );
};

export default AddProductForm;
