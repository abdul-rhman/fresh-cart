import getSingleProduct from "@/APIs/singleProduct.api";
import ProductDetails from "@/app/_components/ProductDetails/ProductDetails";
import React from "react";

export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  let product = await getSingleProduct(params.id);
  return <ProductDetails product={product} />;
}
