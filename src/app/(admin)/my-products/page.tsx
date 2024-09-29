/** @format */

import { getMyProducts } from "@/actions/productActions";
import ButtonDeleteProduct from "@/components/ButtonDeleteProduct";
import { ProductTypes } from "@/types/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const res = await getMyProducts();

  return (
    <div className="grid grid-cols-3 gap-2">
      {res.data.map((product: ProductTypes, index: number) => (
        <div className="card bg-base-100 shadow-xl" key={index}>
          <figure className="max-h-40">
            {product?.images.length > 0 ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_APP_URL}${product.images[0].url}`}
                alt={product.images[0].alt}
                width={160}
                height={160}
                className="h-full object-cover w-full"
              />
            ) : (
              <Image
                src="/images/no-image.png"
                alt="/images/no-image.png"
                width={160}
                height={160}
              />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.product_name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-between items-center">
              <ButtonDeleteProduct productID={product.product_id} />
              <Link
                href={`/my-products/${product.product_id}`}
                className="btn btn-primary"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
