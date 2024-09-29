/** @format */
"use client";
import { deleteProduct } from "@/actions/productActions";
import { icons } from "@/constants/icons";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const ButtonDeleteProduct = ({ productID }: { productID: number }) => {
  const router = useRouter();
  const handleDeleteProduct = async () => {
    try {
      const res = await deleteProduct(productID);
      router.refresh();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <button
        className="btn btn-ghost"
        onClick={() => document.getElementById("my_modal_1")?.showModal()}
      >
        <span className="text-error text-xl">{icons.TRASH}</span>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Want to delete this product?</h3>
          <p className="py-4">
            By clicking "Yes" the product will be permanently deleted
          </p>
          <div className="modal-action">
            <form method="dialog">
              <div className="flex gap-2">
                <button className="btn">Close</button>
                <button className="btn" onClick={handleDeleteProduct}>
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ButtonDeleteProduct;
