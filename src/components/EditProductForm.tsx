/** @format */
"use client";

import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Card from "./Card";
import { useForm } from "react-hook-form";
import SelectInput from "./SelectInput";
import { getAllCategories } from "@/actions/categoryActions";
import { CategoryTypes, ProductTypes } from "@/types/data";
import { toast } from "react-toastify";
import { editProduct } from "@/actions/productActions";
import { useRouter } from "next/navigation";

type FormData = {
  productName: string;
  price: number;
  category: string;
  description: string;
};

const EditProductForm = ({ data }: { data: ProductTypes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      productName: data.product_name,
      price: data.price,
      category: data.category_id.toString(),
      description: data.description,
    },
  });
  const [categoriesOption, setCategoriesOption] = useState<
    { label: string; value: string }[]
  >([]);
  const [editedMode, setEditedMode] = useState(false);

  const onSubmit = async (dataInput: FormData) => {
    const dataPayload = {
      category_id: Number(dataInput.category),
      description: dataInput.description,
      price: Number(dataInput.price),
      product_name: dataInput.productName,
    };
    try {
      const res = await editProduct(data.product_id, dataPayload);
      toast.success(res.message);
      setEditedMode(false);
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

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Card
        title="Add New Product"
        action={
          <button
            className="btn btn-accent"
            type="button"
            onClick={() => setEditedMode(true)}
          >
            Edit Product
          </button>
        }
      >
        <div className="grid grid-cols-2 gap-8">
          <TextInput
            placeholder="Insert product name"
            label="Product Name"
            defaultValue={data?.product_name}
            disabled={!editedMode}
            {...register("productName", {
              required: "Product Name is required",
            })}
            error={errors.productName?.message}
          />
          <TextInput
            placeholder="Insert product price"
            label="Price"
            type="number"
            defaultValue={data?.price}
            disabled={!editedMode}
            {...register("price", {
              required: "Price is required",
            })}
            error={errors.price?.message}
          />
          <SelectInput
            className="col-span-2"
            placeholder="Select category product"
            label="Category"
            defaultValue={data?.category_id}
            options={categoriesOption}
            disabled={!editedMode}
            {...register("category", {
              required: "Category is required",
            })}
            error={errors.category?.message}
          />
          <Textarea
            label="Description"
            className="col-span-2"
            placeholder="Insert product description"
            defaultValue={data?.description}
            disabled={!editedMode}
            {...register("description", {
              required: "Description is required",
            })}
            error={errors.description?.message}
          />
        </div>
      </Card>
      {editedMode ? (
        <button className="btn btn-accent w-full" type="submit">
          Save Edited Product
        </button>
      ) : null}
    </form>
  );
};

export default EditProductForm;
