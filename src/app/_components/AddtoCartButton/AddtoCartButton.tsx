"use client";
import addToCart from "@/actions/cartActions/addToCart.action";
import addToWishlist from "@/actions/wishListActions/addToWishList.action";
import removeWishListItem from "@/actions/wishListActions/removeWishlistItem.action";
import { Button } from "@/components/ui/button";
import { cartCountContext } from "@/Contexts/CartCountContextProvider";
import { WishListContext } from "@/Contexts/WishListContextProvider";
import { ProductType } from "@/types/Product.type";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

export default function AddtoCartButton({ product }: { product: ProductType }) {
  const { wishList, setwishList } = useContext(WishListContext)!;
  const [isLoading, setIsLoading] = useState(false);
  // const [wishListed, setWishlisted] = useState();
  const [wishListedLoading, setWishlistedLoading] = useState(false);
  const { setCartItemsCount } = useContext(cartCountContext)!;
  async function handleAddToCart() {
    setIsLoading(true);
    try {
      const response = await addToCart(product.id);
      if (response.status === "success") {
        toast.success("Product added to cart sucessfully", {
          position: "top-center",
          duration: 2000,
        });
        setCartItemsCount((current) => current + 1);
      } else {
        toast.error(response.message, {
          position: "top-center",
          duration: 2000,
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
      }
    }

    setIsLoading(false);
  }
  async function handleWishlistClicked() {
    const add = !wishList.some(
      (wishlistProduct) => wishlistProduct.id === product.id
    );
    setWishlistedLoading(true);
    try {
      const response = add
        ? await addToWishlist(product.id)
        : await removeWishListItem(product.id);
      if (response.status === "success") {
        toast.success(response.message, {
          position: "top-center",
          duration: 2000,
        });
        add
          ? setwishList((oldWishList: ProductType[]) => [
              ...oldWishList,
              product,
            ])
          : setwishList((oldWishList: ProductType[]) => {
              const newWishList = [...oldWishList];
              const index = newWishList.findIndex(
                (wishlistProduct) => wishlistProduct.id == product.id
              );
              newWishList.splice(index, 1);
              return newWishList;
            });
      } else {
        toast.error(response.message, {
          position: "top-center",
          duration: 2000,
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
      }
    }

    setWishlistedLoading(false);
  }
  return (
    <>
      <div className="flex items-center">
        <Button
          disabled={isLoading}
          onClick={handleAddToCart}
          className=" w-5/6 rounded-md p-2 cursor-pointer bg-emerald-700 hover:bg-emerald-900 text-white font-bold"
        >
          {isLoading ? (
            <i className=" fa fa-spin fa-spinner"></i>
          ) : (
            "Add to Cart"
          )}
        </Button>

        <div className="w-1/6 text-center">
          {wishListedLoading ? (
            <i className=" fa fa-spin fa-spinner"></i>
          ) : (
            <i
              onClick={handleWishlistClicked}
              className={`${
                wishList.some(
                  (wishlistProduct) => wishlistProduct.id === product.id
                )
                  ? "fa-solid text-red-500"
                  : "fa-regular text-emerald-900"
              } fa-heart  text-3xl cursor-pointer`}
            ></i>
          )}
        </div>
      </div>
    </>
  );
}
