import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/Product.type";
import AddtoCartButton from "./../AddtoCartButton/AddtoCartButton";
export default function ProductDetails({ product }: { product: ProductType }) {
  return (
    <>
      <div className="container w-full lgmd:w-[70%] p-4 flex flex-wrap my-4 mx-auto items-center">
        <div className="w-full lg:w-1/4 p-4">
          <Image
            width={500}
            height={500}
            src={product.imageCover}
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-3/4 p-4">
          <h1 className="text-2xl font-bold text-emerald-950 my-4">
            {product.title}
          </h1>
          <p>{product.description}</p>
          <p className="text-emerald-600 my-2">{product.category.name}</p>
          <div className="flex justify-between w-full my-4">
            <div>{product.price} EGP</div>
            <div>
              {product.ratingsAverage}
              <i className="fas fa-star text-yellow-400"></i>
            </div>
          </div>
          <AddtoCartButton productId={product.id} />
        </div>
      </div>
    </>
  );
}
