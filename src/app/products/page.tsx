import AllProducts from "../_components/AllProducts/AllProducts";
import getproductsByCategory from "@/APIs/productsByCategory.api";
import { ProductType } from "@/types/Product.type";
import SingleProduct from "../_components/SignleProduct/SingleProduct";
import getproductsByBrand from "@/APIs/productsByBrand.api";
import { Category } from "./../../types/Product.type";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category, brand } = await searchParams;

  if (category) {
    const products = await getproductsByCategory(category);
    return (
      <div className="container w-[80%] mx-auto my-4">
        <h1 className="text-center text-4xl mt-12 mb-4 mx-auto md:text-start md:mx-2 p-4 w-[fit-content]  font-bold  border-b-4 border-emerald-700">
          {products.length
            ? `${products[0].category.name} | ${products.length} Items`
            : "No products Found"}
        </h1>
        <hr />
        <div className="flex flex-wrap">
          {products.map((currentProduct: ProductType) => (
            <SingleProduct key={currentProduct.id} product={currentProduct} />
          ))}
        </div>
      </div>
    );
  } else if (brand) {
    const products = await getproductsByBrand(brand);

    return (
      <div className="container w-[80%] mx-auto my-4">
        <h1 className="text-center mt-12 mb-4 mx-auto md:text-start md:mx-2 p-4 w-[fit-content] text-white font-bold bg-emerald-800 rounded-3xl">
          {products.length
            ? `${products[0].brand.name} | ${products.length} Items`
            : "No products Found"}
        </h1>
        <hr />
        <div className="flex flex-wrap">
          {products.map((currentProduct: ProductType) => (
            <SingleProduct key={currentProduct.id} product={currentProduct} />
          ))}
        </div>
      </div>
    );
  }

  return <AllProducts />;
}
