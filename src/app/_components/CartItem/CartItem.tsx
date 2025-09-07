"use client";
import removeCartItem from "@/actions/removeCartItem.action";
import updateCartItemQuantity from "@/actions/updateCartItemQuantity.action";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

export default function CartItem({
  product,
  updateCart,
}: {
  product: object;
  updateCart: Function;
}) {
  const [isprocessing, setIsProcessing] = useState(false);

  async function handleUpdateItemCount(count: number) {
    setIsProcessing(true);
    try {
      const res = await updateCartItemQuantity(product.product.id, count);
      if (res.status === "success") {
        toast.success("Item updated sucessfully", {
          position: "top-center",
          duration: 2000,
        });
        updateCart(res);
      } else {
        toast.error("can't update this Item", {
          position: "top-center",
          duration: 2000,
        });
      }
    } catch (err) {}
    setIsProcessing(false);
  }

  async function handleRemoveItem() {
    setIsProcessing(true);
    try {
      const res = await removeCartItem(product.product.id);
      if (res.status === "success") {
        toast.success("Product removed from cart sucessfully", {
          position: "top-center",
          duration: 2000,
        });
        console.log(res);
        updateCart(res);
      } else {
        toast.error("can't remove this product from cart", {
          position: "top-center",
          duration: 2000,
        });
      }
    } catch (err) {}
    setIsProcessing(false);
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <Image
          src={product.product.imageCover}
          className="w-16 md:w-32 max-w-full max-h-full"
          alt="Apple Watch"
          width={500}
          height={500}
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.product.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-around">
          <button
            disabled={isprocessing}
            onClick={() => {
              handleUpdateItemCount(product.count - 1);
            }}
            className="inline-flex  cursor-pointer disabled:cursor-no-drop items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 disabled:text-gray-300 bg-white border border-gray-300 disabled:border-gray-100 rounded-full  focus:outline-none  enabled:hover:bg-gray-100 disabled:focus:ring-0 focus:ring-4 focus:ring-gray-200"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h16"
              />
            </svg>
          </button>
          <div>
            <span>
              {isprocessing ? (
                <i className="fa fa-spin fa-spinner text-emerald-600"></i>
              ) : (
                <span
                  className={`bg-gray-50 w-14 text-center
                    border border-gray-300
                  } rounded-lg px-2.5 py-1 text-gray-900 text-sm`}
                >
                  {product.count}
                </span>
              )}
            </span>
          </div>
          <button
            disabled={isprocessing}
            onClick={() => {
              handleUpdateItemCount(product.count + 1);
            }}
            className="inline-flex disabled:cursor-no-drop cursor-pointer items-center justify-center h-6 w-6 p-1 me-3 text-sm font-medium text-gray-500 disabled:text-gray-300 bg-white border border-gray-300 disabled:border-gray-100 rounded-full  focus:outline-none  enabled:hover:bg-gray-100 disabled:focus:ring-0 focus:ring-4 focus:ring-gray-200"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="font-semibold text-gray-900 dark:text-white">
        {product.price * product.count} EGP
      </td>
      <td className="px-6 py-4">
        <button
          disabled={isprocessing}
          onClick={handleRemoveItem}
          className="cursor-pointer disabled:cursor-no-drop font-medium disabled:text-red-200 text-red-600 dark:text-red-500"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
