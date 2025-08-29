import React from "react";
import getProducts from "@/APIs/products.api";
import SingleProduct from "../SignleProduct/SingleProduct";
import { ProductType } from '@/types/product.type';

export default async function AllProducts() {
  let data = await getProducts();
  return (
    <div className="container w-[80%] mx-auto my-4">
      <div className="flex flex-wrap">
        {data.map((currentProduct: ProductType) => (
          <SingleProduct key={currentProduct.id} product={currentProduct} />
        ))}
      </div>
    </div>
  );
}
