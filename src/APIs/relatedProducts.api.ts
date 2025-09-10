"use server";
export default async function getRelatedProducts(id: string) {
  const result = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/?category[in]=${id}`
  );
  const { data } = await result.json();
  return data;
}
