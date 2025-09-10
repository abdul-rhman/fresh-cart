import getRelatedProducts from "@/APIs/relatedProducts.api";
import getSingleProduct from "@/APIs/singleProduct.api";
import ProductDetails from "@/app/_components/ProductDetails/ProductDetails";
import React from "react";
import { ProductType } from "../../../types/product.type";
import SingleProduct from "./../../_components/SignleProduct/SingleProduct";

export default async function SingleProductDetailed({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getSingleProduct(id);
  if (!product) {
    return <h1>Somthing went wrong...</h1>;
  }
  const relatedProducts = await getRelatedProducts(product.category._id);
  console.log(relatedProducts);;
  return (
    <>
      <ProductDetails product={product} />
      <div className="container w-[80%] mx-auto my-4">
        <div className="flex flex-wrap">
          {relatedProducts.map((currentProduct: ProductType) => (
            <SingleProduct key={currentProduct.id} product={currentProduct} />
          ))}
        </div>
      </div>
    </>
  );
}
