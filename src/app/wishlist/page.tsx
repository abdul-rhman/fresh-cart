"use client";
import React, { useContext } from "react";
import { ProductType } from "@/types/Product.type";
import SingleProduct from "../_components/SignleProduct/SingleProduct";
import { WishListContext } from "@/Contexts/WishListContextProvider";

export default function Wishlist() {
  const { wishList } = useContext(WishListContext)!;

  return (
    <>
      {wishList.length > 0 ? (
        <div className="container w-[80%] mx-auto my-4">
          <h1 className="text-center text-4xl mt-12 mb-4 mx-auto md:text-start md:mx-2 p-4 w-[fit-content]  font-bold  border-b-4 border-emerald-700">
            Your Wishlist
          </h1>
          <hr />
          <div className="flex flex-wrap">
            {wishList.map((currentProduct: ProductType) => (
              <SingleProduct key={currentProduct.id} product={currentProduct} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="mt-[40vh] font-extrabold text-4xl text-emerald-900 text-center">
          {" "}
          Your Wish List is empty 🌠
        </h1>
      )}
    </>
  );
}
