/** @format */

import { getProductByID } from "@/actions/productActions";
import EditProductForm from "@/components/EditProductForm";
import FormEditImage from "@/components/FormEditImage";
import React from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const res = await getProductByID(Number(params.slug));
  return (
    <div className="flex flex-col gap-8">
      <EditProductForm data={res.data} />
      <FormEditImage images={res.data.images} productID={Number(params.slug)} />
    </div>
  );
};

export default Page;
