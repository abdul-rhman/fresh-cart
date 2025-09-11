"use server";
export default async function getproductsByBrand(id: string) {
  const result = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/?brand[in]=${id}`
  );
  const { data } = await result.json();
  return data;
}
