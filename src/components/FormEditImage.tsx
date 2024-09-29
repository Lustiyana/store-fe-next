/** @format */
"use client";
import { deleteImage, uploadNewImage } from "@/actions/imageActions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Card from "./Card";
import ButtonDeleteImage from "./ButtonDeleteImage";
import { ImageTypes } from "@/types/data";

const FormEditImage = ({
  productID,
  images,
}: {
  productID: number;
  images: ImageTypes[];
}) => {
  const [uploadedImages, setUploadedImages] = useState<ImageTypes[]>(images);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append("product_id", productID.toString());
      formData.append("image", event.target.files[0]);
      try {
        const res = await uploadNewImage(formData);
        setUploadedImages((prev: ImageTypes[]) => [...prev, res.data]);
        toast.success(res.message);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  const handleDeleteImage = async (imageID: number) => {
    try {
      const res = await deleteImage(imageID);
      const filteredArray = uploadedImages.filter(
        (image) => image.image_id != imageID
      );
      setUploadedImages(filteredArray);
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Card title="Images">
      <div className="grid grid-cols-4 gap-8">
        {uploadedImages?.map((image, index) => (
          <div className="relative border h-full flex items-center" key={index}>
            <Image
              src={`${process.env.NEXT_PUBLIC_APP_URL}${image?.url}`}
              alt={image.alt}
              width={240}
              height={32}
              className="rounded-lg"
            />
            <ButtonDeleteImage
              onClick={() => handleDeleteImage(image.image_id)}
            />
          </div>
        ))}
      </div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={() => document.getElementById("fileInput")?.click()}
        className="btn btn-outline btn-accent w-full"
      >
        Upload Image
      </button>
    </Card>
  );
};

export default FormEditImage;
