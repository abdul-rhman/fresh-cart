import getSingleProduct from "@/APIs/singleProduct.api";
import ProductDetails from "@/app/_components/ProductDetails/ProductDetails";
import React from "react";

export default async function SingleProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let product = await getSingleProduct(id);
  return <ProductDetails product={product} />;
}
