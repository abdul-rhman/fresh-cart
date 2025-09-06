"use client";
import addToCart from "@/actions/addToCart.action";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { toast } from "sonner";

export default function AddtoCartButton({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddToCart() {
    setIsLoading(true);
    const response = await addToCart(productId);
    if (response.status === "success") {
      toast.success("Product added to cart sucessfully", {
        position: "top-center",
        duration: 2000,
      });
    } else {
      toast.error("can't add this product to cart", {
        position: "top-center",
        duration: 2000,
      });
    }

    setIsLoading(false);
  }
  return (
    <>
      <Button
        disabled={isLoading}
        onClick={handleAddToCart}
        className=" w-full rounded-md p-2 cursor-pointer bg-emerald-700 hover:bg-emerald-900 text-white font-bold"
      >
        {isLoading ? <i className=" fa fa-spin fa-spinner"></i> : "Add to Cart"}
      </Button>
    </>
  );
}
