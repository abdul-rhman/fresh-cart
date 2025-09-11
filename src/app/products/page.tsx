import AllProducts from "../_components/AllProducts/AllProducts";
import getproductsByCategory from "@/APIs/productsByCategory.api";
import { ProductType } from "@/types/Product.type";
import SingleProduct from "../_components/SignleProduct/SingleProduct";
import getproductsByBrand from "@/APIs/productsByBrand.api";

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
